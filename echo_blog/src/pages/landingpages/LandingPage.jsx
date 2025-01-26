import React,{useState} from 'react'
import './LandingPage.css'
const LandingPage = () => {
    const [imageError, setImageError] = useState(false);

    const webImage = `${process.env.PUBLIC_URL}/image/web.jpg`;
    const mobileImage = `${process.env.PUBLIC_URL}/image/image.jpg`;
    
  return (
    <div className="home">
        <h1 className="welcome-text">Welcome to  <span className="echoblog-world">EchoBlog</span> World</h1>
        <div className="responsive-image-container">
        <picture>
            <source media="(min-width: 768px)" srcSet={webImage} />
            <img 
              src={mobileImage}
              alt="Landing Page Banner" 
              className="hero-image"
              
            />
          </picture>
        </div>
    </div>
  )
}

export default LandingPage