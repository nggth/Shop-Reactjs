import React from 'react';
import { getUser, removeUserSession } from '../utils/SessionStorage'


function LoginForm(props) {
    const user = getUser();
 
    // handle click event of logout button
    const handleLogout = () => {
      removeUserSession();
      props.history.push('/login');
    }
   
    return (
      <div>
        Welcome {user.name}!<br /><br />
        <input type="button" onClick={handleLogout} value="Logout" />
      </div>
    );
  }

export default LoginForm;