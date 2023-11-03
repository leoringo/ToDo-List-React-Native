import { SUCCESS_FETCH_CATEGORY } from "../actions/actionCreator";

const initialState = {
    categories: []
}

export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case SUCCESS_FETCH_CATEGORY:
            return {
                ...state,
                categories: action.payload
            }

        default:
            return state;
    }
}