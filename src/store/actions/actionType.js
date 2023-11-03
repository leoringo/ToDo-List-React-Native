import axios from 'axios'
import { BASE_URL, SUCCESS_FETCH_CATEGORY } from './actionCreator'

// ----------------------------------------------- PAYLOAD -----------------------------------------------

const categoryPayload = (payload) => {
    return {
        type: SUCCESS_FETCH_CATEGORY,
        payload
    }
}

//  ----------------------------------------------- AXIOS -----------------------------------------------

export function fetchCategory() {
    return async (dispatch) => {
        try {
            const { data } = await axios({
                url: BASE_URL,
                method: 'GET'
            })
            dispatch(categoryPayload(data))
        } catch (error) {
            console.log(error);
        }
    }
}