import React from 'react'

const Links = (props) => {
  return (
    <section className='quick-links'>
      <h1>Quick Links</h1>
      <ul className='list-links'>
        {props.listLinks.map((listItem) => {
          const { id, link } = listItem
          return <li key={id}>{link}</li>
        })}
      </ul>
      <div className='popular'>
        <h1>Popular This Month</h1>
        <div className='popular-list'>
          {props.popular.map((album) => {
            const { id, artist, title, img } = album
            return (
              <div className='album' key={id}>
                <div className='album-cover'>
                  <span>{id}.</span>{' '}
                  {img ? <img src={img} alt='cover' /> : null}
                  <span>{title}</span>
                </div>
                <p className='artist'>{artist}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Links
