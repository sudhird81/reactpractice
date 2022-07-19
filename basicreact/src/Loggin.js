import React from "react";
import { GoogleLogin } from 'react-google-login';
const clientId ="596233438998-oi17jo95ri5tdl0vabb99li28dgl0v1b.apps.googleusercontent.com"
const Loggin = () => {
   const onSuccess = (res) => {
    console.log("LOGIN SUCCESS ! Current user: ",res.profileobj);
   }
   const onFailure = (res) => {
    console.log("LOGIN FAILED! res:",res);
   }
   return(
    <div id="signInButton">
    <GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={"single_host_origin"}
    issSignedIn={true} />
   </div> 

   )
}
export default Loggin;