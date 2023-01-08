import React from "react";

let user = {
    firstName: 'Nguyen',
    lastName: 'Tuan'
}

let returnUserData = (user) => {
    return user.lastName + ' ' +user.firstName;
}

class MyComponent extends React.Component {

    state = {
        name: 'Tuan',
        facebook: 'Tuan Nguyen'
    }

    render(){
        return (
            <>
            <div>
                Hello {returnUserData(user)}!
            </div>
            <div>Facebook: {this.state.facebook}</div>
            </>
        )
    }
}

export default MyComponent;