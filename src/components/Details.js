import { Component } from 'react'
import { hashHistory,browserHistory, Router, Route,Link,Switch,hashRouter} from 'react-router-dom'
import Member from './Member'


var url = 'https://m.nivedhana.world/v1/officers/3/grievances/'
var page =''

class Details extends Component {
  constructor(props) {
      super(props)
      console.log("Im in details");
      var route = location.pathname
      const array = route.split('/');
      console.log(array);
      this.page = array[2]
      console.log(this.page);
      this.state={
        det:'',
        category:'',
        user:'',
        current_escalation:''
      }
  }

  componentWillMount() {
  	this.style = {
  		backgroundColor: 'green',
      color:'white'
  	}
  }

  componentDidMount(){
    console.log(this.page);
    url = url+this.page
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
          this.setState({det:response}),
          this.setState({category:response.category}),
          this.setState({user:response.user}),
          this.setState({current_escalation:response.current_escalation})
            })

            url = 'https://m.nivedhana.world/v1/officers/3/grievances/'
  }

  render() {
	const { det,category,user,current_escalation } = this.state
    return (
      <div className="details" style={this.style}>
        <div>
          <h1>Grievance id :  {det.id}</h1>
          <h3>user_id :  {det.user_id}</h3>
          <h3>village_id :  {det.village_id}</h3>
          <h3>comment :  {det.comment}</h3>
        </div>
        <div style={{ backgroundColor: '#777' }}>
          <h3>category id:   {category.id}</h3>
          <h3>category name:   {category.name}</h3>
          <h3>category slug:   {category.slug}</h3>
          <h3>category image:   {category.image}</h3>
        </div>
        <div style={this.style}>
            <h1>User Name :  {user.name}</h1>
            <h3>Email :  {user.email}</h3>
            <h3>Mobile :  {user.mobile}</h3>
            <h3>Last Login:  {user.last_login}</h3>
          </div>
        <div style={{ backgroundColor: '#777' }}>
          <h3>current_escalation id: {current_escalation.id}</h3>
          <h3>current_escalation level: {current_escalation.level}</h3>
          <h3>current_escalation resolution_deadline: {current_escalation.resolution_deadline}</h3>
          <h3>current_escalation officer_name: {current_escalation.officer_name}</h3>
          <h3>current_escalation officer_designation: {current_escalation.officer_designation}</h3>
        </div>
      </div>

    )
  }
}
export default Details
