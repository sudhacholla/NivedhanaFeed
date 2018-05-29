
export default function reducer(state={
    feed: '',
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_MEMBERS": {
        return {...state, fetching: true}
      }
      case "FETCH_MEMBERS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_MEMBERS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          feed: action.payload,
        }
      }
    }
    return state
}
