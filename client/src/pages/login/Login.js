import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Login.scss'
import { axiosClient } from '../../utils/axiosClient';
import { KEY_ACCESS_TOKEN, setItem } from '../../utils/localStorageManager';
// import { Navigate } from 'react-router-dom';


function Login() {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');



   async function handleSubmit(e){

       e.preventDefault();
     try {
          const response = await axiosClient.post("/auth/login", {
              email,
              password,
          });
          setItem( KEY_ACCESS_TOKEN , response.result.accessToken);
     } catch (error) {
        console.log(error);
     }
      

    }
  return (
      <div className="login" >
          <div className="login-box">
              <h2 className="heading">Login</h2>
              <form onSubmit={handleSubmit}>
                  <label htmlFor="email">email</label>
                  <input
                      type="email"
                      className="email"
                      id="email"
                      onChange={(e) => {
                          setEmail(e.target.value);
                      }}
                  />

                  <label htmlFor="password">password</label>
                  <input
                      type="password"
                      className="password"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                  />

                  <input type="submit" className="submit" />
              </form>
              <p className="subheading">
                  Do not have an account? <Link to="/signup">Sign UP</Link>{" "}
              </p>
          </div>
      </div>
  );
}

export default Login