import React from 'react';
import {connect} from 'react-redux';

import { getFriends } from '../actions';

import './friends.css'
;

class Friends extends React.Component {
   
    state = {
        friends: []
    };

    componentDidMount() {
        this.props.getFriends();
    }
   

    render() {
        return (
            <div className="FriendForm">
                {this.props.friends.map((friend) => (
                   <div className="FriendCard" key={friend.id}> <p className="FriendName">{friend.name}</p> 
                   <p className="FriendEmail">email: {friend.email}</p>
                   <p className="FriendAge">Age: {friend.age}</p>
                   </div>
                  
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    friends: state.friends
});

export default connect(
    mapStateToProps,
    {getFriends}
)(Friends);