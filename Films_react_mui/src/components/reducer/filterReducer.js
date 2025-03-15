export default function fitlerReducer(state, action) {
    switch(action.type){
        case "resetKey" : {
            return {
                ...state,
                key: !state.key
            };
            }
            default: {
                return state;
            }
        }
    }
