import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const FETCH_FRIEND_FAILURE = 'FETCH_FRIEND_FAILURE';

export const getFriends = () => dispatch => {
    dispatch({type: FETCHING_FRIENDS});
    axios
    .get('http://localhost:5000/api/friends')
    .then(res => dispatch({type: FRIENDS_FETCHED, payload: res.data}))
    .catch(err => dispatch({type: FETCH_FRIEND_FAILURE, payload: err}));
};