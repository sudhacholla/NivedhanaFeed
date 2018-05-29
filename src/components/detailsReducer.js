
export default function reducer(state={
    details: '',
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_DETAILS": {
        return {...state, fetching: true}
      }
      case "FETCH_DETAILS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_DETAILS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          details: action.payload,
        }
      }
    }
    return state
}
