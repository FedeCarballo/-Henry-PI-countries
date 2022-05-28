const initialState = {
    countries: [],
    activities: [],
}

function reducer(state=initialState, {type, payload}){
    switch(type) {
        case "GET_ALL_COUNTRIES":
            return {
                ...state,
                countries: payload
            }
        case "GET_SINGLE_COUNTRY":
                return{
                    ...state,
                    countries: payload
                }
        case "GET_ALL_ACTIVITIES":
            return {
                ...state,
                activities: payload
                }
        case "CREATE_ACTIVITY":
            return{
                ...state,
                activities: state.activities.concat(payload)
            }
        default: return state
    }

}

export default reducer;