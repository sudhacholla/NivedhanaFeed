import axios from "axios";

const router = this.props.router.route.location.path
console.log(router);

export function fetchMembers(page = null) {
  return function(dispatch) {
    dispatch({type: "FETCH_MEMBERS"});

    let url = "https://m.nivedhana.world/v1/users/6/feed"

    if(page != null){
      url += "?page="+page;
    }

    var config = {
        headers: {'Authorization': "Bearer CzHmAVVHLGs7zXPL93jSkY1tFc0x0kmPNCeY5EXKVD4AZXtZ3f"}
    }
    axios.get(url,config)
      .then((response) => {
        dispatch({type: "FETCH_MEMBERS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_MEMBERS_REJECTED", payload: err})
      })
    }
}
