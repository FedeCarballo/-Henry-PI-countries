const initialState = {
    countries: [],
    Allcountries: [],
    activities: [],
    Allactivities: [],
}

function reducer(state=initialState, {type, payload}){
    switch(type) {
        case "GET_ALL_COUNTRIES":
            return {
                ...state,
                countries: payload,
                Allcountries: payload,
            }
        case "GET_SINGLE_COUNTRY":
                return{
                    ...state,
                    countries: payload
                }
        case "FILTER_BY_CONTINENT":
            const allCountries = state.Allcountries
            const filter = payload === "All" ? allCountries : allCountries.filter(e => e.continent === payload)
            return{
                ...state,
                countries: filter,
            }
        
        case "FILTER_BY_NAME":
            const Sort = payload === "asc" ? 
            state.countries.sort(function(a,b){
                if(a.name > b.name){
                    return 1;
                }
                if (a.name < b.name){
                    return -1
                }
                return 0
            }) :
            state.countries.sort(function (a,b){
                if(a.name> b.name){
                    return -1;
                }
                if(a.name < b.name){
                    return 1;
                }
                return 0
            })
            return{
                ...state,
                countries: Sort
            }
        case "GET_NAME":
            return{
                ...state,
                countries: payload
            }
        
        case "GET_ALL_ACTIVITIES":
            return {
                ...state,
                activities: payload,
                Allactivities: payload,
                }
        case "CREATE_ACTIVITY":
            return{
                ...state,
                activities: state.activities.concat(payload)
            }
        case "POST_ACTIVITY":
            return{
                ...state,
            }
        default: return state
    }

}

export default reducer;