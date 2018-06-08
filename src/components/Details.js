import React,{Component} from "react"
import axios from "axios";
import { hashHistory,browserHistory, Router, Route,Link,Switch,hashRouter} from 'react-router-dom'
import { connect } from "react-redux"
import { fetchDetails } from "./detailsActions"

@connect((store) => {
  return {
    details: store.details.details,
  };
})

class Details extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
      }
    }

  componentWillMount() {
  	this.style = {
      color:'purple'
  	}
  }

  componentDidMount() {
    this.props.dispatch(fetchDetails());
  }

  handleClick(e){
    this.props.history.goBack()
  }

  render() {
     const { details } = this.props;
     console.log(this.props.details);
     if (!details) {
       return <button onClick={this.componentDidMount.bind(this)}>Loading....</button>
     }
     return (
       <div style={this.style}>
          <h2>Grievance Id:     {this.props.details.id}</h2>
          <h2>user_id:     {this.props.details.user_id}</h2>
          <h2>Category Id:     {this.props.details.category.id}</h2>
          <h2>Category Name:     {this.props.details.category.name}</h2>
          <h2>created_at:    {this.props.details.category.created_at}</h2>
          <h2>updated_at:    {this.props.details.updated_at}</h2>
          <h2>Status:     {this.props.details.status}</h2>
          <h2>User Name:    {this.props.details.user.name}</h2>
          <h2>Village Name:     {this.props.details.village.name}</h2>
          <div><button onClick={(e) => {this.handleClick(e)}}>Back</button></div>
       </div>

     )
  }
};

const mapStateToProps = state => ({
  details: state.data,
});

export default connect(mapStateToProps)(Details)
