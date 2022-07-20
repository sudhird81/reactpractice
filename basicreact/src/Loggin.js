import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "26243695013-fpknd7iavpvgiork7gkveou543djnjcc.apps.googleusercontent.com";

const Loggin = ()=> {

    const [showloginButton, setShowloginButton] = useState(true);
   
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

   

    return (
        <div>
            { showloginButton ?
                <GoogleLogin style={{width:"300px", justifyContent:"center"}}
                    clientId={clientId}
                    buttonText="Sign Up Using Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                  //   cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            
        </div>
    );
}
export default Loggin;