import React, { Component } from 'react'
import './bucket.css'
import classnames from 'classnames'
import moment from 'moment'
import {bytesToSize} from '../../helpers'

import {connect} from 'react-redux'

import  { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
import {fetchBucketObjects, fetchUploadObject, fetchDeleteBucket} from '../../actions'

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Table, Container} from 'reactstrap'
import {
  Collapse, Navbar, NavbarBrand
} from 'reactstrap'

const renderObjectListItem = ({id, name, last_modified, size}) => {
  console.log(name, last_modified, size)
  var momObj = moment(last_modified)
  var timeToString = momObj.format('DD.MM.YYYY')

  return <tr key={name}>
    <th>{name}</th>
    <th>{timeToString}</th>
    <th>{bytesToSize(size || 0, 0)}</th>
  </tr>
}

export class Bucket extends React.Component {
  constructor(props) {
    super(props)

    // console.log(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: '1'
    }

    let {routeBucketId, bucket, dispatch} = this.props

    if (routeBucketId)
      dispatch(fetchBucketObjects(routeBucketId))
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  handleFileUpload(e) {
    let file = e.target.files[0]

    let {bucket, dispatch} = this.props

    if (file){
      let bucketId = bucket.id
      dispatch(fetchUploadObject(bucketId, file))
    }
  }

  render() {

    let {routeBucketId, bucket, bucketObjects} = this.props


    console.log(bucket)

    if(!bucket)
      return <Redirect></Redirect>

    let bucketId = bucket.id
    let objects = bucketObjects[bucketId]

    if(!objects)
      return null

    let sizeInBytes = objects.reduce((acc, obj) => {
      console.log(obj.size)
      return acc + obj.size
    }, 0)

    return (
      <div>
        <h4>{bucket.name}</h4>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1') }}
            >
              Files
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2') }}
            >
              Details
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>

          <Button className="delete-bucket-button" onClick={() => this.props.dispatch(fetchDeleteBucket(bucketId))} color="danger">Delete bucket</Button>

          <TabPane tabId="1">
            {/* <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row> */}

            <Navbar color="light" light={true} expand="md">
              <NavbarBrand>{`All files (${bucketObjects[bucketId].length})`}</NavbarBrand>

              <Collapse isOpen={true} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    {/* <Link to="/buckets/create"> */}
                      <Button outline disabled color="danger">Delete Object</Button>
                    {/* </Link> */}
                  </NavItem>
                  {" "}
                  <NavItem>
                    {/* <Link to="/buckets/create"> */}
                      <Button color="primary" onClick={() => this.fileInput.click()}>Upload Object</Button>
                    {/* </Link> */}
                  </NavItem>
                </Nav>
              </Collapse>

            </Navbar>

            <Table hover={true} size="sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Last modified</th>
                  <th>Size</th>
                </tr>
              </thead>
              <tbody>
                {
                  objects && objects.map(renderObjectListItem)
                }
              </tbody>
            </Table>

            <form>
              <input hidden
                ref={input => this.fileInput = input}
                type="file"
                onChange={e => this.handleFileUpload(e)}
              />
            </form>

          </TabPane>

          <TabPane tabId="2">
            <Container>
              <Row>
                <Col className="text-right" xs="3">Bucket name:</Col>
                <Col xs="auto">{bucket.name}</Col>
              </Row>
              <Row>
                <Col className="text-right" xs="3">Location:</Col>
                <Col xs="auto">{bucket.location.name}</Col>
              </Row>
              <Row>
                <Col className="text-right" xs="3">Storage size:</Col>
                <Col xs="auto">{bytesToSize(sizeInBytes || 0)}</Col>
              </Row>
            </Container>
          </TabPane>
        </TabContent>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  console.log(state)
  let routeBucketId = props.match.params.bucket
  let bucket = state.buckets.find(bucket => bucket.id == routeBucketId)
  return {
    routeBucketId,
    bucket,
    bucketObjects: state.bucketObjects
  }
}

export default connect(mapStateToProps)(Bucket)
