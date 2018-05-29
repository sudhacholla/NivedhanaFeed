import React from "react"
import ReactDOM,{render} from "react-dom"
import { Provider } from "react-redux"
import App from "./components/App"
import Member from "./components/Member"
import store from "./components/store"

ReactDOM.render( <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root'));
