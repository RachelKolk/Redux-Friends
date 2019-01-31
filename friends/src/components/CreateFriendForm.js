import React from 'react';
import {connect} from 'react-redux';

import {addFriend} from '../actions';

import Form from './Form';

class AddFriendForm extends React.Component {

    render() {
    return (
        <div>
            <Form 
            
            />

        </div>
    )
}
}

const mapStateToProps = state => ({});

export default connect(
    mapStateToProps,
    {addFriend}
)(AddFriendForm);