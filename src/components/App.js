import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { browserHistory, Router, Route,Link,Switch } from 'react-router'
import { hashHistory } from 'react-router'
import Hello from './Hello'
import Details from './Details'
import Member from './Member'
import memberActions from './memberActions'

window.React = React

class App extends Component {
  render() {
        return (
           <BrowserRouter history={browserHistory}>
             <div>
               <Route exact path="/hello/" component={Hello} />
               <Route exact path="/details/:id" component={Details} />
               <Route exact path="/" component={Member} />
               <Route exact path="/:page" component={Member} />
             </div>
           </BrowserRouter>
        )
     }
}
export default App
