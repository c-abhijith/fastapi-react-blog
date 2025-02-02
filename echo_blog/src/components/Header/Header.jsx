import React,{useState} from 'react'
import "./Header.css"
import { Link,useLocation,useNavigate} from 'react-router-dom';


export const Header = () => {
    const location = useLocation()
    const navigate = useNavigate();

    const[isDarkMode,setIsDarkMode]=useState(true)

    const isLandingPage = location.pathname === '/';
    const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('light-mode');
      };
    const handleUserClick =()=>{
        navigate('/login');
    }

  return (
    <header className={`App-header ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="header-left">
            <div className="brand-name">
                <Link to="/" className="brand-link">
                    <span className={`echo-text ${isDarkMode ? 'dark' : 'light'}`}>
                    Echo
                    </span>
                    <span className="blog-text">Blog</span>
                </Link>
            </div>
            {/* <nav className="nav-links">
                <div to="/blog" className="nav-link">Blog</div>
            </nav> */}

        </div>
        <div className="header-controls">
        {isLandingPage && !isAuthPage&& (<button className="user-button" onClick={handleUserClick}>User</button>)}
            
            <div className="auth-buttons">
            {!isLandingPage && isAuthPage&& (
                <div className="auth-buttons">
                    <button className="login-button" onClick={() => navigate('/login')}>Login</button>
                    <button className="signup-button" onClick={() => navigate('/signup')}> Sign Up</button>
                </div>
            )}
            {/* <div to="/" className="nav-link">Home</div> */}
            {/* <button className="user-icon-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button> */}
            <button
            onClick={toggleMode} 
            className="mode-toggle"
            aria-label="Toggle dark mode">
            {isDarkMode ?(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="yellow">
              <circle cx="12" cy="12" r="5" strokeWidth="2"/>
              <line x1="12" y1="1" x2="12" y2="3" strokeWidth="2"/>
              <line x1="12" y1="21" x2="12" y2="23" strokeWidth="2"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth="2"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth="2"/>
              <line x1="1" y1="12" x2="3" y2="12" strokeWidth="2"/>
              <line x1="21" y1="12" x2="23" y2="12" strokeWidth="2"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth="2"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth="2"/>
            </svg>):(
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6e6e6e">
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                strokeWidth="2"
              />
            </svg>)}
            </button>
            </div>
        </div>
    </header>
  )
}
