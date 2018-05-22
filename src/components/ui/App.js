import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { browserHistory, Router, Route,Link,Switch } from 'react-router'
import { hashHistory } from 'react-router'
import MemberList from './MemberList'
import Hello from './Hello'
import Details from './Details'

window.React = React

class App extends Component {
  render() {
        return (
           <Router history={browserHistory}>
                <Route exact path="details/:id" component={Details} />
                <Route exact path="/" component={MemberList} />
                <Route exact path="?page=activePage" component={MemberList} />
           </Router>
        )
     }
}
export default App
