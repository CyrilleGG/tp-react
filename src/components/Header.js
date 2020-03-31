
import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <React.Fragment>
      <nav className="navigation">
        <Link exact to='/'>Home</Link>
        <Link exact to='/about'>About</Link>
        <Link exact to='/work'>Work</Link>
      </nav>
    </React.Fragment>
  )
}

export default Header