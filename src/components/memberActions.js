import axios from "axios";

console.log("memberActions");
let url = ''
let page = ''
let route = ''

export function fetchMembers(page = '') {
  return function(dispatch) {
    dispatch({type: "FETCH_MEMBERS"});

    route = location.pathname
    const array = route.split('');
    var page = array[1]
    console.log("pagee"+page);

    if(!page){
     console.log("in if");
     url = "https://m.nivedhana.world/v1/users/6/feed"
    }
    else{
      console.log("in the loop");
      url = url+ "?page="+page;
      console.log("page not null"+page);
      console.log(url);
    }

    axios.get(url,{headers: {'Authorization': "Bearer CzHmAVVHLGs7zXPL93jSkY1tFc0x0kmPNCeY5EXKVD4AZXtZ3f"}})
      .then((response) => {
        dispatch({type: "FETCH_MEMBERS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_MEMBERS_REJECTED", payload: err})
      })
  }
}
