import React, { Component } from 'react'
import './bucket.css'
import classnames from 'classnames'

import  { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Table, Container} from 'reactstrap'
import {
  Collapse, Navbar, NavbarBrand
} from 'reactstrap'
export default class Example extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '2'
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  render() {
    return (
      <div>
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

          <Button className="delete-bucket-button" color="danger">Delete bucket</Button>

          <TabPane tabId="1">
            {/* <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row> */}

            <Navbar color="light" light={true} expand="md">
              <NavbarBrand>All files (3)</NavbarBrand>

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
                      <Button color="primary">Upload Object</Button>
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
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>asdf</td>
                </tr>
              </tbody>
            </Table>


          </TabPane>

          <TabPane tabId="2">
            <Container>
              <Row>
                <Col className="text-right" xs="2">Bucket name:</Col>
                <Col xs="auto">Cool name</Col>
              </Row>
              <Row>
                <Col className="text-right" xs="2">Location:</Col>
                <Col xs="auto">Šoštanj</Col>
              </Row>
              <Row>
                <Col className="text-right" xs="2">Storage size:</Col>
                <Col xs="auto">33.5GB</Col>
              </Row>
            </Container>
            {/* <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row> */}
          </TabPane>
        </TabContent>
      </div>
    )
  }
}
