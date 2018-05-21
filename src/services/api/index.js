const API_KEY = '948F12A2-481A-475B-90A7-C14CE3913371'
const BASE_URL = 'https://challenge.3fs.si/storage'
const FETCH_OPTIONS = {
  headers: new Headers({
     'Authorization': `Token ${API_KEY}`,
   })
}

const locations = {
  getAll: function () {
    return fetch(`${BASE_URL}/locations`, FETCH_OPTIONS)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(response => response.locations)
  }
}

const buckets = {
  getAll () {
    return fetch(`${BASE_URL}/buckets`, FETCH_OPTIONS)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(response => response.buckets)
  },

  create (name, locationId) {
    // let data = new FormData()
    // data.append('name', 'Test2' )
    // data.append('location', 'Ljubljana' )

    return fetch(`${BASE_URL}/buckets`, {
      method: 'POST',
      body: JSON.stringify({name, location: locationId}),
      ...FETCH_OPTIONS
    })
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    )
  },

  delete (bucketId) {
    return fetch(`${BASE_URL}/buckets/${bucketId}`, {
      method: 'DELETE',
      ...FETCH_OPTIONS
    })
    // .then(
    //   response => response.json(),
    //   error => console.log('An error occurred.', error)
    // )
  },

  getObjects (bucketId) {
    return fetch(`${BASE_URL}/buckets/${bucketId}/objects`, FETCH_OPTIONS)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(response => response.objects)
  },

  uploadObject (bucketId, file) {

    let data = new FormData()
    data.append('file', file)

    return fetch(`${BASE_URL}/buckets/${bucketId}/objects`, {
      method: 'POST',
      body: data,
      credentials: 'same-origin',
      ...FETCH_OPTIONS
    })
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    )
    // .then(response => response.objects)
  },
}


export {
  locations,
  buckets
}
