import { combineReducers } from 'redux'
// import buckets from './components/reducer'
// import visibilityFilter from './visibilityFilter'



function locations(state = [], action) {
  // console.log(action)
  switch (action.type) {
    // case 'ADD_TODO':
    //   return state.concat([{ text: action.text, completed: false }])
    // case 'TOGGLE_TODO':
    //   return state.map(
    //     (todo, index) =>
    //       action.index === index
    //         ? { text: todo.text, completed: !todo.completed }
    //         : todo
    //   )
    case 'RECIEVE_LOCATIONS':
      return action.locations || []
    default:
      return state
  }
}

function buckets(state = [], action) {
  switch (action.type) {
    case 'RECIEVE_BUCKETS':
      return action.buckets || []
    case 'DELETE_BUCKET_DONE':
      return Object.assign({}, state, {bucketDeleted : true})
    default:
      return state
  }
}

function bucketObjects(state = {}, action) {
  switch (action.type) {
    case 'RECIEVE_BUCKET_OBJECTS':
      return Object.assign({}, state, {
        [action.bucketId]: action.objects
      })
    default:
      return state
  }
}

export default combineReducers({
  buckets,
  locations,
  bucketObjects
})
