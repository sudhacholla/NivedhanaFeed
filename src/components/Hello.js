import { Component } from 'react'
import { hashHistory,browserHistory, Router, Route,Link,Switch,hashRouter} from 'react-router-dom'


class Hello extends Component {
  constructor(props) {
      super(props)
  }
  render() {
    return (
          <div className="hello">
            <h1>Hello</h1>
            <Link to = "/Grievance">Add New Grievance</Link>
            <Link to = "/member">Go to Nivedhana Feed</Link>
          </div>
    )
  }
}
export default Hello
