import React, { Component } from 'react'
import './new-bucket.css'

import {Link} from 'react-router-dom'


import { Table, Input } from 'reactstrap'

// const BucketList = () => <span>
//   <h3>BucketList</h3>
// </span>

const NewBucket = (props) => {
  console.log(props)
  return <form className="new-bucket">
      <div className="form-group row">
          <div className="col-sm-6">
              <label htmlFor="inputFirstname">Bucket Name *</label>
              <input type="text" className="form-control" id="bucket-name" placeholder="Bucket Name" />
          </div>
          <div className="col-sm-6">
              <label htmlFor="inputLastname">Bucket Location *</label>
              <Input type="select" className="form-control" name="select" id="bucket-location" placeholder="Bucket Location" >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
          </div>
      </div>

      <button type="button" className="btn btn-primary px-4">Create Bucket</button>

      <Link to="/">
        <button type="button" className="btn btn-danger px-4 float-right">X</button>
      </Link>
  </form>
}

export default NewBucket
