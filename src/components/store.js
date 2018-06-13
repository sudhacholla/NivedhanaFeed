import { combineReducers, applyMiddleware, createStore } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import { createBrowserHistory, routerReducer, routerMiddleware, startListener, push } from 'redux-first-routing'
import feed from "./memberReducer"
import details from "./detailsReducer"

const history = createBrowserHistory()

const rootReducer = combineReducers({
  feed,
  details,
  router: routerReducer
})
const middleware = routerMiddleware(history)
const store = createStore(rootReducer, {}, applyMiddleware(middleware,promise(),thunk,logger()))
startListener(history, store)
let currentLocation = store.getState().router.pathname

let unsubscribe = store.subscribe(() => {
  let previousLocation = currentLocation
  currentLocation = store.getState().router.pathname
  // console.log("currentLocation"+currentLocation);
  // console.log("previousLocation"+previousLocation);

  if (previousLocation !== currentLocation) {
      window.location.reload()
  }
})

export default store
