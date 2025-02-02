import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Auth.css'

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <div className='auth-container'>
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
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                
                />
                 <button 
                    type='button'
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                  >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
            </div>
            <button type="submit" className="auth-button">Login</button>
        </form>
        <p className="auth-switch">
          Don't have an account? 
          <button  className="switch-button" onClick={()=>navigate('/signup')} >
            Sign Up
          </button>
        </p>
    </div>
    </div>
  )
}
