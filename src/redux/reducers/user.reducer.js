import { SET_USER, CLEAR_USER } from "../actions";

const initialState = null;

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return action.username;
        case CLEAR_USER:
            return null;
        default:
            return state;
    }
}
