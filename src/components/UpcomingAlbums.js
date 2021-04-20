import React from 'react'
import './parentAlbums.css'

const UpcomingAlbums = (props) => {
  return (
    <section className={`parent-album ${props.costumClass}`}>
      <section className='section-one'>
        <div className='section--title'>
          <h1>{props.title}</h1>
          <p>{props.link}</p>
        </div>
        <div className='albums--list'>
          <div className='albums'>
            {props.albumArray.map((album) => {
              const { id, title, artist, cover } = album
              return (
                <div className='album' key={id}>
                  <div className='cover'>
                    <img src={cover} alt='cover' />
                    <p>
                      {title.length > 20 ? title.slice(0, 17) + '...' : title}
                    </p>
                    <p className='artist'>{artist}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className='placehoder'></section>
    </section>
  )
}

export default UpcomingAlbums
