import React,{Component} from "react"
import axios from "axios";
import { hashHistory,browserHistory, Router, Route,Link,Switch,hashRouter} from 'react-router-dom'
import { connect } from "react-redux"
import { fetchMembers } from "./memberActions"

@connect((store) => {
  return {
    feed: store.feed.feed,
  };
})

class Member extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        current_page:'',
        feed_array:[]
      }
    }

  componentWillMount() {
  	this.style = {
      color:'green'
  	}
  }

  componentDidMount() {
    this.props.dispatch(fetchMembers());
  }

  handleClick(){
    var page = this.props.feed.current_page
    page = page +1
    console.log(page);
    this.props.history.push(`${page}`)
    console.log("im clicked page:"+page);
  }

  render() {
     const { feed,feed_array } = this.props;
     if (!feed) {
       return <button onClick={this.componentDidMount.bind(this)}>Loading....</button>
     }
     this.feed_array = this.props.feed.data
     return (
       <div style={this.style}>
        <h3>{this.feed_array.map(d => {
          return ( <div style={this.style} key={d.id}>
                   <h2><dt><Link to = {`/details/${d.id}`}>{d.id}</Link></dt></h2>
                   <dt><h3>Status: {d.status}</h3></dt>
                   <dt><h3>User:{d.user.name}</h3></dt>
                   </div>
                   )
                })
          }</h3>
         <h3>current_page:{this.props.feed.current_page}</h3>
         <div><button onClick={this.handleClick.bind(this)}>Next</button></div>
       </div>
     )
  }
};

const mapStateToProps = state => ({
  feed: state.data,
});

export default connect(mapStateToProps)(Member)
export {}
