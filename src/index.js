import React from "react"
import ReactDOM,{render} from "react-dom"
import { Provider } from "react-redux"
import App from "./components/App"
import Member from "./components/Member"
import store from "./components/store"
import { BrowserRouter } from 'react-router-dom'
import { browserHistory, Router, Route,Link,Switch } from 'react-router'
import { hashHistory } from 'react-router'
import Details from './components/Details'

ReactDOM.render( <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
