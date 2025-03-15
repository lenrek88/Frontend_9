export default function storeReducer(state, action) {
    switch(action.type){
        case "resetKey" : {
            return {
                ...state,
                filters: {key: !state.filters.key}
            };
            }
            default: {
                return state;
            }
        }
    }

    export const initalState = {
        filters: {key: true},
        genres: [1,2,3,4,5]
    }
