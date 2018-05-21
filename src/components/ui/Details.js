import { Component } from 'react'
import { hashHistory,browserHistory, Router, Route,Link,Switch,hashRouter} from 'react-router'
import Member from './Member'

var url = 'https://m.nivedhana.world/v1/officers/3/grievances/335'

class Details extends Component {
  constructor(props) {
      super(props)
      this.state={
        det:'',
        category:''
      }
  }

  componentWillMount() {
  	this.style = {
  		backgroundColor: 'green',
      color:'white'
  	}
  }

  componentDidMount(){
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
          this.setState({category:response.category})
            })
          .then(response =>{
            console.log(response) })
  }

  render() {
	const { det,category } = this.state
  const { id } = this.props
    return (
      <div className="details" style={this.style}>
        {id}
        <div>
          <h1>Grievance id :{det.id}</h1>
          <h3>user_id :{det.user_id}</h3>
          <h3>village_id :{det.village_id}</h3>
          <h3>comment :{det.comment}</h3>
        </div>
        <div style={{ backgroundColor: 'grey' }}>
          <h3>category id: {category.id}</h3>
          <h3>category name: {category.name}</h3>
          <h3>category slug: {category.slug}</h3>
          <h3>category image: {category.image}</h3>
        </div>

      </div>

    )
  }
}
export default Details
