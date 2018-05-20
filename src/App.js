import React, { Component } from 'react'
import './App.css'

import  { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import {
  Button,
  Navbar,
  NavbarBrand
} from 'reactstrap'

import BucketList from './components/BucketList'
import NewBucket from './components/NewBucket'
import Bucket from './components/Bucket'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar className="fixed-top" color="light" light expand="md">
            <NavbarBrand href="/">Secure cloud storage</NavbarBrand>
          </Navbar>

          <main role="main">

            <Switch>
              <Route exact path="/" render={props =>
                <span>
                  <h3>Bucket List</h3>
                  <BucketList {...props}></BucketList>
                </span>
              }/>
              <Route path="/buckets/create" render={props =>
                <span>
                  <h3>Bucket List</h3>
                  <p>Create New Bucket</p>
                  <NewBucket {...props}></NewBucket>
                  <BucketList {...props} hideCreateButton={true}></BucketList>
                </span>
              }/>

              <Route path="/buckets/:bucket" component={Bucket} />


              <Route render={() => <h3>404</h3>}/>
            </Switch>



          </main>


        </div>
      </Router>
    )
  }
}

export default App
