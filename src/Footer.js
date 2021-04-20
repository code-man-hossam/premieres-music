import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer--col'>
        <img src='upcomingAl/logo1.png' alt='logo' />
        <p>New Music every thursday |</p>
        <p>8AM - Midnight ET</p>
      </div>
      <div className='footer--col'>
        <ul>
          <li>Privacy</li>
          <li>Terms</li>
          <li>DMCA</li>
          <li>Help</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </section>
  )
}

export default Footer
