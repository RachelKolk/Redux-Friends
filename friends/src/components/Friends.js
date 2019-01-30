import React from 'react';
import {connect} from 'react-redux';


class Friends extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         friends: []
    //     }
    // }
    

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
    {}
)(Friends);