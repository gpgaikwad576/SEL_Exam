//main application
import React, { useState } from 'react'
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import Quiz from './Quiz';
import './App.css';

const App = () => {
  const [flag, setflag] = useState(false);
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
    setflag(true);
  }
  const logout = () => {
    setflag(false);
  }
  return (
      
      <div className="showdata">
        {
          !flag ? <><h1>User is Not Login Currently<br />Loading...</h1><div className='google'>
          <GoogleLogin
            clientId="849610606264-5mugjepqc4ghlr8iedmcc4mtbg6qdd6f.apps.googleusercontent.com"
            buttonText="Sign In With Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div></> : <Quiz />
        }

      </div>
  );
}

export default App

{/* <GoogleLogout
              clientId="446301006294-f4rkinbj1oieb8a1kn0d5cvbita6vuao.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={logout}
              className='logout'
            /> */}