
import React,{useState} from 'react'
import './Auth.css'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {
  const[showPassword,setShowPassword]=useState(false)

  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  

  return (
    <div className="auth-container">
    
      <div className="auth-box signup-box">
        <h2>Create Account</h2>
        <form>
          <div className="form-group">
            <input name='Username' placeholder='Username' type='test' />
          </div>
          <div className="form-group">
            <input name='phoneNumber' placeholder='Phone Number' type='tel' />
          </div>
          <div className="form-group">
            <input name='password' placeholder='Password' type={showPassword ? "text" : "password"} />
            <button 
                    type='button'
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                  >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
          </div>
          <button type="submit" className="auth-button">Sign Up</button>

        </form>
        <p className="auth-switch">
          Already have an account? 
          <button  className="switch-button" onClick={()=>navigate('/login')} >
            Login
          </button>
        </p>

      </div>
    </div>
  )
}
