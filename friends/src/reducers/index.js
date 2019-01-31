
import {
    FETCHING_FRIENDs,
    FRIENDS_FETCHED,
    FETCH_FRIEND_FAILURE

} from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
}

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
        case FRIENDS_FETCHED:
        return {
            ...state,
            friends: action.payload
        };
        default:
        return state;
    }
}

export default reducer;