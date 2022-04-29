import { Link } from 'react-router-dom'
import './hero1.css'

const Hero1 = () => {
  return (
    <div className="hero__container">
        <div className="hero__wrapper">
            <h1>
            WORK, STAY AND STUDY ABROAD
            </h1>
            <p>Your study abroad begins here</p>
            <button><Link to='/contact'>Contact Us</Link></button>
        </div>
    </div>
  )
}

export default Hero1