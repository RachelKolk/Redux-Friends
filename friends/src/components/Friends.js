import React from 'react';
import {connect} from 'react-redux';

import { getFriends } from '../actions';


class Friends extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         friends: []
    //     }
    // }
    state = {
        friends: []
    };

    componentDidMount() {
        this.props.getFriends();
    }


    

    render() {
        return (
            <div>
                {this.props.friends.map((friend, id) => (
                    <h3>{friend.value}</h3>
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