import {useEffect} from 'react'
import { Link } from 'react-router-dom'

import './notFound.css'

const Port = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <div className="not__container place__items__center">
        <h1>Page Under construction</h1>
        <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}

export default Port