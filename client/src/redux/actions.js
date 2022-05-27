import axios from 'axios'


//countries:
export function getAllCountries(){
    return async (dispatch)=>{ 
        return axios("http://localhost:3001/countries")
        .then(res => dispatch({type: "GET_ALL_COUNTRIES", payload: res.data}))
    }
}

export function getSingleCountry(id){
    return async (dispatch)=>{
        return axios(`http://localhost:3001/countries/${id}`)
        .then(res => dispatch({type: "GET_SINGLE_COUNTRY", payload: res.data}))
    }
}


//activities: 
export function getAllActivities(){
    return async (dispatch)=>{ 
        return axios("http://localhost:3001/activities")
        .then(res => dispatch({type: "GET_ALL_ACTIVITIES", payload: res.data}))
    }
}
