import axios from "axios";

console.log("detailsActions");
var url = ''
var page =''

export function fetchDetails(page = null) {
  return function(dispatch) {
    dispatch({type: "FETCH_DETAILS"});

    console.log("Im in details");
    var route = location.pathname
    const array = route.split('/');
    console.log(array);
    page = array[2]
    console.log(page);

    if(!page){
     url = "https://m.nivedhana.world/v1/officers/3/grievances/"
    }
    else{
      console.log("in the loop");
      url = 'https://m.nivedhana.world/v1/officers/3/grievances/'
      url = url+ page;
      console.log("page not null"+page);
      console.log(url);
    }

    axios.get(url,{headers: {'Authorization': "Bearer CzHmAVVHLGs7zXPL93jSkY1tFc0x0kmPNCeY5EXKVD4AZXtZ3f"}})
      .then((response) => {
        dispatch({type: "FETCH_DETAILS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_DETAILS_REJECTED", payload: err})
      })
  }
}
page = ''
