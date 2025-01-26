import React from 'react'
import './Auth.css'
export const Login = () => {
  return (
    <div className="auth-box login-box">
        <h2>Welcome Back</h2>
        <form>
            <div className="form-group">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"/>

               
             </div>
             <div className="form-group password-group">
                <input
                name="password"
                placeholder="Password"
                
                />
            </div>
            <button type="submit" className="auth-button">Login</button>
        </form>
        <p className="auth-switch">
          Don't have an account? 
          <button  className="switch-button">
            Sign Up
          </button>
        </p>
    </div>
  )
}
