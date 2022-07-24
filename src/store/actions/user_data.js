export const GET_USER_DATA = 'GET_USER_DATA';

export function getUserDate(users) {
    return {
        type: GET_USER_DATA,
        payload: {
            users
        }
    }
}

