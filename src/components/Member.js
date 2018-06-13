import React,{Component} from "react"
import axios from "axios";
import { hashHistory,browserHistory, withRouter, Router, Route,Link,Switch,hashRouter} from 'react-router-dom'
import { connect } from "react-redux"
import { fetchMembers } from "./memberActions"
import Panel from 'muicss/lib/react/panel';
import store from './store'

@connect((store) => {
  return {
    feed: store.feed.feed,
  };
})

class Member extends React.Component {
  constructor(props) {
      super(props)
      this.props.history.listen((location, action) => {
       console.log("on route change",this.props.history);
     });
      this.state = {
        current_page:'',
        feed_array:'',
        value:1
        }
    }


  componentWillMount() {
  	this.style = {
      color:'yellow',
      backgroundColor:'#8E24AA'
  	}
  }

  componentDidMount() {
    this.props.dispatch(fetchMembers());
  }

  handleClick(e){
    var page = this.props.feed.current_page
    page = page +1
    console.log(page);
    this.props.history.push(`/member/page=${page}`)
    console.log("im clicked page:"+page);
    window.location.reload()
  }

  goBack(e){
    var page = this.props.feed.current_page
    page = page -1
    console.log(page);
    this.props.history.push(`/member/page=${page}`,`${page}`)
    console.log("im clicked page:"+page);
    window.location.reload()
  }

  render() {
     const { feed,feed_array } = this.props;
     if (!feed) {
       return <button onClick={this.componentDidMount.bind(this)}>Loading....</button>
     }
     this.feed_array = this.props.feed.data
     return (
       <div>
        <h3>current_page:{this.props.feed.current_page}</h3>
        <Panel style={{ backgroundColor: 'silver',width: '50%', align:'center' }}> <h3>{this.feed_array.map(d => {
          return ( <div key={d.id}>
                   <Panel style={this.style}><h2><dt><Link to = {`/details/id=${d.id}`} style={{ color: 'yellow' }}>{d.id}</Link></dt></h2>
                   <dt><h3>Status: {d.status}</h3></dt>
                   <dt><h3>User:{d.user.name}</h3></dt></Panel>
                   </div>
                   )
                })
          }</h3></Panel>

         <div><button disabled={this.props.feed.current_page==1} onClick={(e) => {this.goBack(e)}} >Prev</button></div>
         <div><button onClick={(e) => {this.handleClick(e)}}>Next</button></div>
        </div>
     )
  }
};

const mapStateToProps = state => ({
  feed: state.data,
});

export default connect(mapStateToProps)(Member)
