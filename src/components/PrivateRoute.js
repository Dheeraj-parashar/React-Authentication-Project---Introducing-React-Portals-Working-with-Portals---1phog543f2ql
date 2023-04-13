import React from "react";
function PrivateRoute(){
    
    if(window.localStorage.getItem(username)){
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

