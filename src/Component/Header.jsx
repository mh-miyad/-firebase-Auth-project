import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className="navbar bg-primary text-primary-content">
  <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  <Link className="btn btn-ghost normal-case text-xl" to={'/'}> Register </Link>
  <Link className="btn btn-ghost normal-case text-xl" to={'/login'}> Log In </Link>
</div>



    </div>
  )
}

export default Header