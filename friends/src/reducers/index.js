
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
        default:
        return state;
    }
}

export default reducer;