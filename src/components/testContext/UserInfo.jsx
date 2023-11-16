import React from "react";
import Profile from "./Profile";
import UserContext from "./UserContext";

class UserInfo extends React.Component {
    state = {
        user:'ramjan'
    }

    render(){
        const {user} =  this.state;
        return( <UserContext.Provider value={{user:user}}> <Profile /> </UserContext.Provider>);
    }
}

export default UserInfo;