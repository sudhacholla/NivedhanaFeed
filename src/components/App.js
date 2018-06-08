import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { browserHistory, Router, Route,Link,Switch,BrowserHistory,Redirect } from 'react-router'
import { hashHistory } from 'react-router'
import Details from './Details'
import Member from './Member'
import Hello from './Hello'


window.React = React

class App extends Component {
  render() {
        return (
           <BrowserRouter history={browserHistory}>
             <switch>
               <Route exact path="/details/:id" component={Details}/>
               <Route exact path="/member" component={Member}/>
               <Route exact path="/" component={Hello} />
               <Route exact path="/member/page=:page" component={Member}  />
               <Redirect from="/" />
             </switch>
           </BrowserRouter>
        )
     }
}
export default App
