import React, { Component } from 'react'
import {connect} from 'react-redux'
import './new-bucket.css'
import {fetchCreateBucket} from '../../actions'

import {Link} from 'react-router-dom'

import { Table, Input } from 'reactstrap'

export class NewBucket extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    let {locations, dispatch} = this.props
    console.log(locations)
    let selectedLocation = this.state && this.state.selectedLocation

    let selectedLocationId = selectedLocation && selectedLocation.id

    if (!selectedLocationId)
      selectedLocationId = locations && locations[0] && locations[0].id

    return <form className="new-bucket">
        <div className="form-group row">
            <div className="col-sm-6">
                <label htmlFor="inputFirstname">Bucket Name *</label>
                <input type="text" className="form-control" id="bucket-name" placeholder="Bucket Name" onChange={(e) => {
                  this.setState({newBucketName: e.target.value})
                }}/>
            </div>
            <div className="col-sm-6">
                <label htmlFor="inputLastname">Bucket Location *</label>

                <Input type="select" className="form-control" name="select" id="bucket-location" placeholder="Bucket Location"
                  ref={el => this.selectElement = el}
                    onChange={(e) => {
                      this.setState({selectedLocation: locations.find(l => l.id == e.target.value)})
                    }}

                   >
                  {locations.map(location =>
                    <option key={location.id} value={location.id}>{location.name}</option>
                  )}
                </Input>
            </div>
        </div>

        <button type="button" className="btn btn-primary px-4" onClick={() => {
          dispatch(fetchCreateBucket(this.state.newBucketName, selectedLocationId))
        }}>Create Bucket</button>

        <Link to="/">
          <button type="button" className="btn btn-danger px-4 float-right">X</button>
        </Link>
    </form>
  }
}

function mapStateToProps(state) {
  return {
    locations: state.locations || []
  }
}

export default connect(mapStateToProps)(NewBucket)
