import React, { useState } from 'react'
import './nav.css'
import { BiSearchAlt } from 'react-icons/bi'

const Nav = () => {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <nav className='nav'>
      <div className='logo'>
        <div className='logo--container'>
          <img src='logo.png' alt='logo' />
        </div>
      </div>

      <div className='navLinks'>
        <ul>
          <li className='active'>Home</li>
          <li>
            <span>Genres</span>
            <div className='dropdown-content'>
              <p>Hip Hop</p>
              <p>Alternative</p>
              <p>R&B</p>
              <p>Dance</p>
              <p>Reggea</p>
              <p>Soul</p>
              <p>Rock</p>
            </div>
          </li>
          <li>Top 50</li>
        </ul>
      </div>

      <div className='search'>
        <form>
          <input
            type='text'
            placeholder='search...'
            className={showSearch ? 'active' : ''}
          />
          <button
            type='button'
            className={showSearch ? 'active' : ''}
            onClick={() => setShowSearch(!showSearch)}
          >
            <BiSearchAlt />
          </button>
        </form>
      </div>
    </nav>
  )
}

export default Nav
