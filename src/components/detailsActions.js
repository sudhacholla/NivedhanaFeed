import axios from "axios";

var url = ''
var gid =''
export function fetchDetails(gid) {
  return function(dispatch) {
    dispatch({type: "FETCH_DETAILS"});

    var route = location.pathname
    const array = route.split('=');
    console.log(array);
    gid = array[1]
    console.log(gid);

    if(gid){
      console.log("in the loop");
      url = 'https://m.nivedhana.world/v1/officers/3/grievances/'
      url = url+ gid;
      console.log("gid not null"+gid);
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
gid = ''
