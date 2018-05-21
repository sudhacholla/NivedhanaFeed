import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { browserHistory, Router, Route,Link,Switch } from 'react-router'
import { hashHistory } from 'react-router'

import MemberList from './MemberList'
import Details from './Details'
import Hello from './Hello'

window.React = React

class App extends Component {
  render() {
        return (
           <Router history={browserHistory}>
                <Route exact path="details" component={Details} />
                <Route exact path="/" component={MemberList} />
                <Route exact path="?page=activePage" component={MemberList} />
           </Router>
        )
     }
}
export default App
