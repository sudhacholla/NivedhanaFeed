import axios from "axios";

console.log("memberActions");

let url = "https://m.nivedhana.world/v1/users/6/feed"

export function fetchMembers(page) {
  return function(dispatch) {
    dispatch({type: "FETCH_MEMBERS"},page);

    let route = location.pathname
    const array = route.split('=');
    let page = array[1]
    if(!page){
     url = "https://m.nivedhana.world/v1/users/6/feed"
    }
    else{
      console.log("in the loop");
      url = url+"?page="+page;
      console.log("page not null"+page);
      console.log(url);
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
        url ='https://m.nivedhana.world/v1/users/6/feed'
        page = ''
  }
}
