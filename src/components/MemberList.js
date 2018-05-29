import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Member from './Member'
import ReactDOM from "react-dom"
import { hashHistory,browserHistory, Router, Route,Link,Switch,hashRouter} from 'react-router'

var url = 'https://m.nivedhana.world/v1/users/6/feed'
var url1 = 'https://m.nivedhana.world/v1/users/6/feed?page='
var url2 = 'https://m.nivedhana.world/v1/officers/3/grievances/'

class MemberList extends Component {

    constructor(props) {
        super(props)
        const router = this.props.router
        this.state = {
            members: [],
            loading: false,
            activePage:'',
            totalPages: '',
            nextPage: '',
            prevPage:'',
            current_page:'',
            itemsCountPerPage:'',
            totalItemsCount:'',
            pageRangeDisplayed:'',
            loading: true
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch(url, {
          method: "GET",
          headers: new Headers({
            "Authorization": "Bearer CzHmAVVHLGs7zXPL93jSkY1tFc0x0kmPNCeY5EXKVD4AZXtZ3f",
          }),
          body: { mobile: 9980758248, },
          json: true,

        })
            .then(response => response.json())
            .then(response => {
              this.setState({members:response.data}),
              this.setState({nextPage:response.next_page_url}),
              this.setState({prevPage:response.last_page_url}),
              this.setState({activePage:response.current_page}),
              this.setState({itemsCountPerPage:response.per_page}),
              this.setState({totalItemsCount:response.total}),
              this.setState({pageRangeDisplayed:response.last_page})
            }).then(nextPage =>{
              console.log(nextPage)
            })
            setTimeout(() => this.setState({ loading: false }), 5500)
    }

   handlePageChange(activePage) {
      this.setState({activePage: activePage});
      url=url1+activePage
      this.componentDidMount()
      browserHistory.push(`/MemberList?page=${activePage}`)
      window.scrollTo(0, 0)
    }

    render() {
    	const { members, loading } = this.state
        return (
            <div className="member-list">
                <h1>NIVEDHANA FEED</h1>
                  {(loading) ?<span>loading.....</span> :
                    <span>Number of records: {members.length}   </span>
                  }
                {(members.length) ?
                   members.map(
                	 (member, i) =>
                		<Member key={i}
                          id ={member.id}
                          heading={member.latest_update.heading}
                          body={member.latest_update.body}
                          status={member.status}
                          user={member.user.name}/>
                	 ):
                   <span> </span>
               }
                  <div>
                      <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                        onChange={::this.handlePageChange}
                      />
                  </div>
            </div>
        )
    }
}

export default MemberList
