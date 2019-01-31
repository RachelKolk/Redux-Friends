import React from 'react';
import {connect} from 'react-redux';

import { getFriends } from '../actions';


class Friends extends React.Component {
   
    state = {
        friends: []
    };

    componentDidMount() {
        this.props.getFriends();
    }


    

    render() {
        return (
            < >
                {this.props.friends.map((friend, id) => (
                   <div key={friend.id}> <h3 className="FriendName">{friend.name}</h3> 
                   <h5 className="FriendEmail">Email: {friend.email}</h5>
                   <p className="FriendAge">Age: {friend.age}</p>
                   </div>
                  
                ))}
            </ >
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