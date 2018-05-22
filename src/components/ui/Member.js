import { Component } from 'react'
import Details from './Details'
import { hashHistory,browserHistory, Router, Route,Link,Switch,hashRouter} from 'react-router'

window.val = ''
var url = 'https://m.nivedhana.world/v1/officers/3/grievances/'

class Member extends Component {
  constructor(props) {
      super(props)
      this.state = {
      det: ''
    };
  }

  componentWillMount() {
  	this.style = {
  		backgroundColor: 'green',
      color:'white'
  	}
  }

  render() {
	const { id,heading,body,status,user} = this.props
  const {det} = this.state
    return (
      <div>

          <div className="member" style={this.style}>
          <h1><Link to={`/details/${this.props.id}`} style={{ color: 'white' }} >{this.props.id}</Link></h1>
          <h3>Reported by: {user}</h3>
          <h3>{heading}</h3>
          <h5>{body}</h5>
          <h5>The current status is: {status}</h5>
        </div>
        </div>
      )
  }
}
export default Member;
