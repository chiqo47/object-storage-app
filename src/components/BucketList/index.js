import React, {Component} from 'react'
import './bucket-list.css'

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

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
  DropdownItem
} from 'reactstrap'

// const BucketList = () => <span>
//   <h3>BucketList</h3>
// </span>

const BucketList = ({hideCreateButton}) => {

  return <dir className="bucket-list">

    <Navbar color="light" light={true} expand="md">
      <NavbarBrand href="/">All buckets (3)</NavbarBrand>

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
        <tr>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>Larry</td>
          <td>the Bird</td>
        </tr>
      </tbody>
    </Table>
  </dir>
}

export default BucketList
