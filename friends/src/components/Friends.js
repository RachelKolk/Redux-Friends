import React from 'react';


class Friends extends React.Component {
    

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

export default Friends;