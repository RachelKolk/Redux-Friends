
import {
    FETCHING_FRIENDS,
    FRIENDS_FETCHED,
    FETCH_FRIEND_FAILURE,
    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAILURE
} from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    addingFriend: false,
    friendAdded: false,
    friends: [],
    error: null
}

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {

        // case FETCHING_FRIENDS:
        // return {
        //     fetchingFriends: true
        // };
        case FRIENDS_FETCHED:
        return {
            ...state,
            friends: action.payload,
            // friendsFetched: true
        };

        case ADD_FRIEND_SUCCESS:
        return {
            ...state,
        //    addingFriend: false,
        //    friendAdded: true,
           friends: action.payload,
           error: null 
        }

        default:
        return state;
    }
}

export default reducer;