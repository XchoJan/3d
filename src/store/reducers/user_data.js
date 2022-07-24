import {GET_USER_DATA} from "../actions/user_data";

const initialState = {
    users: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DATA: {
            const {users} = action.payload
            console.log(users, 'redux')
            return {
                ...state,
                users
            }
        }
        default: {
            return state
        }
    }
}
