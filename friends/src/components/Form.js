import React from 'react';


function Form(props) {

    const handleClick = e => {
        e.preventDefault();
        props.addNewFriend();
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={props.changeHandler}
                    value={props.friend.name}
                />

                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={props.changeHandler}
                    value={props.friend.email}
                />

                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    onChange={props.changeHandler}
                    value={props.friend.age}
                />

                <button onClick={handleClick}>Add Friend</button>

            </form>
        </div>
    );
}

export default Form;