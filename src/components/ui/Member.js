import { Component } from 'react'
import Details from './Details'
import { hashHistory,browserHistory, Router, Route,Link,Switch,hashRouter} from 'react-router'

var val = ''
var url = 'https://m.nivedhana.world/v1/officers/3/grievances/'

class Member extends Component {
  constructor(props) {
      super(props)
      this.state = {
      gid: ''
    };
  }

  componentWillMount() {
  	this.style = {
  		backgroundColor: 'green',
      color:'white'
  	}
  }

  getValue(){
    val = this.props.id
    url = url+val
    console.log(url);
    fetch(url, {
      method: "GET",
      headers: new Headers({
        "Authorization": "Bearer CzHmAVVHLGs7zXPL93jSkY1tFc0x0kmPNCeY5EXKVD4AZXtZ3f",
      }),
      body: { mobile: 9980758248, },
      json: true,
      mode:'cors'
    })
        .then(response => response.json())
        .then(response => {
          this.setState({gid:response})
        })
        val = ''
        url = 'https://m.nivedhana.world/v1/officers/3/grievances/'
  }

  sendValue(){
     val = this.props.id
     console.log(val);
   }

  render() {
  const {gid} = this.props
  console.log(gid);
	const { id,heading,body,status,user} = this.props
    return (
      <a href='/details' style={{ color: 'green' }}  onClick={this.getValue.bind(this)}>
          <div className="member" style={this.style}>
          <h1>{id}</h1>
          <h3>Reported by: {user}</h3>
          <h3>{heading}</h3>
          <h5>{body}</h5>
          <h5>The current status is: {status}</h5>
        </div></a>
    )
  }
}
export default Member
