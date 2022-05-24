import axios from 'axios'

export function getAllCountries(){
    return (dispatch)=>{ 
        return axios("http://localhost:3001/countries")
        .then(res => dispatch({type: "GET_ALL_COUNTRIES", payload: res.data}))
    }
}