import React from "react";
import Login from "./Login";
import Profile from "./Profile";
function PrivateRoute(){
    
    if(window.localStorage.getItem('username')){
    return(
        <Profile/>
    )

    }
    else {
        return(
            <Login/>
        )
    }
}
export default PrivateRoute;
