import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { browserHistory, Router, Route,Link,Switch,BrowserHistory } from 'react-router'
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
               <Route exact path=":page" component={Member}  />
             </switch>
           </BrowserRouter>
        )
     }
}
export default App
