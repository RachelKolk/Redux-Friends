import React from 'react';
import {connect} from 'react-redux';

import {addFriend} from '../actions';

import Form from './Form';

class CreateFriendForm extends React.Component {
    state = {
        friend: {
            id: '',
            name: '',
            age: '',
            email: '',
    }
};

    changeHandler = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        });
    };

    addNewFriend = () => {
       this.props.addFriend(this.state.friend); 
    };


    render() {
    return (
        <div>
            <Form 
                addNewFriend={this.addNewFriend}
                changeHandler={this.changeHandler}
                friend={this.state.friend}
            />

        </div>
    )
}
}

const mapStateToProps = state => ({});

export default connect(
    mapStateToProps,
    {addFriend}
)(CreateFriendForm);