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

//Search:
export function Getinput(name){
    return async (dispatch) =>{
        return axios("http://localhost:3001/countries?name=" + name)
        .then(res => dispatch({
            type: "GET_NAME",
            payload: res.data
        }))
    }
}
// Countries Filters:
export function filterCountriesByContinent(payload){
    console.log(payload);
    return {
        type: "FILTER_BY_CONTINENT",
        payload
    }
}

export function OrderByName(payload){
    return{
        type: "FILTER_BY_NAME",
        payload
    }
}
//activities: 
export function getAllActivities(){
    return async (dispatch)=>{ 
        return axios("http://localhost:3001/activities")
        .then(res => dispatch({type: "GET_ALL_ACTIVITIES", payload: res.data}))
    }
}

export function createActivity(payload){
    return async (dispatch) => {
        const data = axios.post("http://localhost:3001/activities",payload)
        console.log(data)
        return data;
    }
}