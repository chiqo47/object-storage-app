import React, {Component} from 'react'
import './bucket-list.css'

import {connect} from 'react-redux'

import {BrowserRouter as Router, Route, Link, Switch, withRouter} from 'react-router-dom'

import {
  Table,
  Button,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink
} from 'reactstrap'

import {
  Collapse,
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItemc
} from 'reactstrap'

// const BucketList = () => <span>
//   <h3>BucketList</h3>
// </span>

const renderBucketRow = (bucket, history) =>
  <tr key={bucket.id} onClick={() => history.push('/buckets/' + bucket.id)}>
    <td>{bucket.name}</td>
    <td>{bucket.location.name}</td>
  </tr>


export const BucketList = ({hideCreateButton, buckets, history}) => {
  return <dir className="bucket-list">

    <Navbar color="light" light={true} expand="md">
      <NavbarBrand>All buckets (3)</NavbarBrand>

      { !hideCreateButton &&
        <Collapse isOpen={true} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/buckets/create">
                <Button color="primary">Create New Bucket</Button>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      }
    </Navbar>

    <Table hover={true} size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {
          buckets.map(b => renderBucketRow(b, history))
        }

      </tbody>
    </Table>
  </dir>
}

function mapStateToProps(state) {
  return {
    buckets: state.buckets || []
  }
}

export default withRouter(connect(mapStateToProps)(BucketList))
