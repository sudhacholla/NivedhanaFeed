import { combineReducers } from "redux"
import feed from "./memberReducer"
import details from "./detailsReducer"

export default combineReducers({
  feed,
  details,
})
