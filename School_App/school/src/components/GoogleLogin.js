// import React, { useState } from 'react';
// import { GoogleLogin, GoogleLogout } from 'react-google-login';

// const clientId = "134538664798-95qi8aej1jr3duotftgoj1f8r4quaehu.apps.googleusercontent.com";

// function GoogleLogin() {

//     const [showloginButton, setShowloginButton] = useState(true);
//     const [showlogoutButton, setShowlogoutButton] = useState(false);
//     const onLoginSuccess = (res) => {
//         console.log('Login Success:', res.profileObj);
//         setShowloginButton(false);
//         setShowlogoutButton(true);
//     };

//     const onLoginFailure = (res) => {
//         console.log('Login Failed:', res);
//     };

//     const onSignoutSuccess = () => {
//         alert("You have been logged out successfully");
//         console.clear();
//         setShowloginButton(true);
//         setShowlogoutButton(false);
//     };

//     return (
//         <div>
//             {showloginButton ?
//                 <GoogleLogin
//                     clientId={clientId}
//                     buttonText="Sign In"
//                     onSuccess={onLoginSuccess}
//                     onFailure={onLoginFailure}
//                     cookiePolicy={'single_host_origin'}
//                     isSignedIn={true}
//                 /> : null}

//             {showlogoutButton ?
//                 <GoogleLogout
//                     clientId={clientId}
//                     buttonText="Sign Out"
//                     onLogoutSuccess={onSignoutSuccess}
//                 >
//                 </GoogleLogout> : null
//             }
//         </div>
//     );
// }
// export default GoogleLogin;