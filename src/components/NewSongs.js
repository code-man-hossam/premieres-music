import React from 'react'

const NewSongs = (props) => {
  return (
    <section className='songs-section'>
      <div className='header'>
        <h1>{props.title}</h1>
        <p>{props.link}</p>
      </div>
      <div className='songs-list'>
        <div className='songs-container'>
          {props.songs.map((song) => {
            const { id, artist, title, cover } = song
            return (
              <div className='song' key={id}>
                <div className='cover'>
                  <img src={cover} alt='cover' />
                </div>
                <div className='artist-title'>
                  <p>{title}</p>
                  <p>{artist}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default NewSongs
