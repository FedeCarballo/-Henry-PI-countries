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
        default: return state
    }
}

export default reducer;