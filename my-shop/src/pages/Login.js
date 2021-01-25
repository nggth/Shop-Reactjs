import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../utils/SessionStorage';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Login(props) {
  const [loading, setLoading] = useState(false)
  const username = useFormInput('')
  const password = useFormInput('')
  const [error, setError] = useState(null)

  // handle button click of login form
  const handleLogin = () => {
    setError(null)
    setLoading(true)
    axios.post('http://localhost:3000/users/signin', { username: username.value, password: password.value }).then(response => {
      setLoading(false)
      setUserSession(response.data.token, response.data.user)
      props.history.push('/dashboard')
    }).catch(error => {
      setLoading(false)
      if (error.response.status === 401) setError(error.response.data.message)
      else setError("Something went wrong. Please try again later.")
    });
  }
  return (
    <Tabs>
      <TabList>
        <Tab>Sign in</Tab>
        <Tab>Sign up</Tab>
      </TabList>

      <TabPanel>
        <div>
          <div>
            Username<br />
            <input type="text" {...username} autoComplete="new-password" />
          </div>
          <div style={{ marginTop: 10 }}>
            Password<br />
            <input type="password" {...password} autoComplete="new-password" />
          </div>
          {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
          <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
        </div>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;