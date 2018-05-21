import fetch from 'cross-fetch'
import {
  locations as locationsApi,
  buckets as bucketsApi

} from './services/api'

export function createBucket() {
  return {
    type: 'CREATE_BUCKET'
  }
}
export function createBucketEnd() {
  return {
    type: 'CREATE_BUCKET_END'
  }
}

export function requestLocations() {
  return {
    type: 'REQUEST_LOCATIONS'
  }
}

export function receiveLocations(locations) {
  return {
    type: 'RECIEVE_LOCATIONS',
    locations
  }
}

export function requestBuckets() {
  return {
    type: 'REQUEST_BUCKETS'
  }
}

export function receiveBuckets(buckets) {
  return {
    type: 'RECIEVE_BUCKETS',
    buckets
  }
}

export function requestBucketObjects() {
  return {
    type: 'REQUEST_BUCKET_OBJECT'
  }
}

export function receiveBucketObjects(objects, bucketId) {
  return {
    type: 'RECIEVE_BUCKET_OBJECTS',
    objects,
    bucketId
  }
}

export function uploadObject(bucketId, file) {
  return {
    type: 'UPLOAD_OBJECT', bucketId, file
  }
}

export function uploadObjectDone() {
  return {
    type: 'UPLOAD_OBJECT_DONE'
  }
}

export function deleteBucketDone() {
  return {
    type: 'DELETE_BUCKET_DONE'
  }
}

export function fetchCreateBucket (name, locationId) {
  return function (dispatch) {
    dispatch(createBucket())

    return bucketsApi.create(name, locationId)
      .then(data => {
        dispatch(createBucketEnd(data))
        dispatch(fetchBuckets(data))
      })
  }
}

export function fetchLocations() {
  return function (dispatch) {
    dispatch(requestLocations())

    return locationsApi.getAll()
      .then(data =>
        dispatch(receiveLocations(data))
      )
  }
}

export function fetchBuckets() {
  return function (dispatch) {
    dispatch(requestBuckets())

    return bucketsApi.getAll()
      .then(data =>
        dispatch(receiveBuckets(data))
      )
  }
}

export function fetchBucketObjects(bucketId) {
  return function (dispatch) {
    dispatch(requestBucketObjects())

    return bucketsApi.getObjects(bucketId)
      .then(data =>
        dispatch(receiveBucketObjects(data, bucketId))
      )
  }
}

export function fetchUploadObject(bucketId, file) {
  return function (dispatch) {
    dispatch(uploadObject(bucketId, file))
    console.log("bucketsApi.uploadObject")
    return bucketsApi.uploadObject(bucketId, file)
      .then(data => {
        dispatch(uploadObjectDone())
        dispatch(fetchBucketObjects(bucketId))
      })
  }
}

export function fetchDeleteBucket(bucketId, file) {
  return function (dispatch) {
    // dispatch(uploadObject(bucketId, file))
    // console.log("bucketsApi.uploadObject")
    return bucketsApi.delete(bucketId)
      .then(data => {
        dispatch(deleteBucketDone())
        // dispatch(fetchBucketObjects(bucketId))
      })
  }
}
