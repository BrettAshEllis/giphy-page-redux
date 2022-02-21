import { SET_USER, CLEAR_USER } from "../actions";

export default function userReduer(state, action) {
    switch (action.type) {
        case SET_USER:
            return action.username;
        case CLEAR_USER:
            return null;
        default:
            return state;

    }
}