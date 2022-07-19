import React from "react";
import { GoogleLogout } from "react-google-login";
const clientId="596233438998-oi17jo95ri5tdl0vabb99li28dgl0v1b.apps.googleusercontent.com";
const Logout=()=>{
    const onSuccess = ()=>{
        console.log("Log out successfull!")
    }
    return(
        <div id="signOutButton">
        <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}/>
           
        </div>
    )
}
export default Logout;
