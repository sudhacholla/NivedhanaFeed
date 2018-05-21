import { Component } from 'react'
import Hello from './Details'
import { hashHistory,browserHistory, Router, Route,Link,Switch,hashRouter} from 'react-router'


class Member extends Component {
  constructor(props) {
      super(props)
  }

  componentWillMount() {
  	this.style = {
  		backgroundColor: 'green',
      color:'white'
  	}
  }

  render() {
	const {id} = this.props
    return (
          <div className="hello" style={this.style}>
            <h1>{id}</h1>
          </div>
    )
  }
}
export default Hello
