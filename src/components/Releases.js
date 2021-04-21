import React from 'react'
import './releases.css'
import { FaUser } from 'react-icons/fa'
import { GiSpeaker } from 'react-icons/gi'
import { BiRightArrowCircle } from 'react-icons/bi'

const releasedAlbums = [
  [
    {
      id: 0,
      cover: 'images/img1.jpg',
      artist: 'young stoner life',
      name: 'Slime Language 2',
    },
    {
      id: 1,
      cover: 'images/img2.jpg',
      artist: 'London Grammer',
      name: 'Californian Soil',
    },
    {
      id: 2,
      cover: 'images/img3.jpg',
      artist: 'Sech',
      name: '42',
    },
    {
      id: 3,
      cover: 'images/img4.jpg',
      artist: 'AJ Tracy',
      name: 'Flu Game',
    },
    {
      id: 4,
      cover: 'images/img5.jpg',
      artist: 'Greta Van Fleet',
      name: "the Battle at Garden's Gate",
    },
    {
      id: 5,
      cover: 'images/img6.jpg',
      artist: 'Sweetie',
      name: 'Pretty Summer',
    },
    {
      id: 6,
      cover: 'images/img7.jpg',
      artist: 'Eric Church',
      name: 'Heart',
    },
    {
      id: 7,
      cover: 'images/img8.jpg',
      artist: 'CJ',
      name: 'Loyalty over Royalty(Deluxe)',
    },
    {
      id: 8,
      cover: 'images/img9.jpg',
      artist: 'Conway the Machine',
      name: 'La Maquina',
    },
    {
      id: 9,
      cover: 'images/img10.jpg',
      artist: 'Tim McGaw',
      name: 'Here on Earth',
    },
    {
      id: 10,
      cover: 'images/img12.jpg',
      artist: 'Yelawolf & DJ Paul',
      name: 'Slumafia',
    },
    {
      id: 11,
      cover: 'images/img13.jpg',
      artist: 'Big Scarr',
      name: 'Big Grim Reaper',
    },
    {
      id: 12,
      cover: 'images/img14.jpg',
      artist: 'The Offspring',
      name: 'Let the Bad Times Roll',
    },
    {
      id: 13,
      cover: 'images/img15.jpg',
      artist: 'Losers Weepers-EP',
      name: 'Babygirl',
    },
  ],
  [
    {
      id: 0,
      cover: 'images/img6.jpg',
      artist: 'Sweetie',
      name: 'Pretty Summer: Playlist Season 1',
    },
    {
      id: 1,
      cover: 'images/img1.jpg',
      artist: 'Young Stoner Life',
      name: 'Slime Language 2',
    },
    {
      id: 2,
      cover: 'images/img13.jpg',
      artist: 'Big Scarr',
      name: 'Big Grim Reaper',
    },
    {
      id: 3,
      cover: 'images/img16.jpg',
      artist: 'Zaytoven & Fo15',
      name: 'Zaytoven Presents: Fo15',
    },
    {
      id: 4,
      cover: 'images/img9.jpg',
      artist: 'Conway the Machine',
      name: 'La Maquina',
    },
    {
      id: 5,
      cover: 'images/img17.jpg',
      artist: 'Snopp Dogg',
      name: 'From the Streets 2 the suites',
    },
    {
      id: 6,
      cover: 'upcomingAl/al19.jpg',
      artist: 'Gotam, Talib Kweli',
      name: 'Gotham',
    },
    {
      id: 7,
      cover: 'upcomingAl/al21.jpg',
      artist: 'Queen Naija',
      name: 'Missunderstood...Still',
    },
    {
      id: 8,
      cover: 'images/img4.jpg',
      artist: 'Aj Tracey',
      name: 'Flu Game',
    },
    {
      id: 9,
      cover: 'images/img18.jpg',
      artist: 'Sauce Walka',
      name: 'God of Texas',
    },
    {
      id: 10,
      cover: 'images/img19.jpg',
      artist: 'DMX',
      name: "A Dog's Prayer- EP",
    },
    {
      id: 11,
      cover: 'images/img15.jpg',
      artist: 'Babygirl',
      name: 'Losers Weepers- EP',
    },
    {
      id: 12,
      cover: 'images/img3.jpg',
      artist: 'Sech',
      name: '42',
    },
    {
      id: 13,
      cover: 'images/img12.jpg',
      artist: 'Yelawolf & DJ Paul',
      name: 'Slumafia',
    },
    {
      id: 14,
      cover: 'images/img21.jpg',
      artist: 'Escape the Fate',
      name: 'Chemical Warfare',
    },
    {
      id: 15,
      cover: 'images/img10.jpg',
      artist: 'Tim Mcgraw',
      name: 'Here on Earth',
    },
    {
      id: 16,
      cover: 'images/img20.jpg',
      artist: 'Sadek',
      name: 'Aimons-Nous Vivants',
    },
    {
      id: 17,
      cover: 'images/img8.jpg',
      artist: 'CJ',
      name: 'Loyalty over Royalty',
    },
    {
      id: 18,
      cover: 'images/img14.jpg',
      artist: 'The Offspring',
      name: 'Let the Bad Times Roll',
    },
    {
      id: 19,
      cover: 'images/img22.jpg',
      artist: 'Max Mac is dead Right',
      name: 'Two Feet',
    },
    {
      id: 20,
      cover: 'images/img23.jpg',
      artist: 'iLoveMakonnen',
      name: 'My Parade',
    },
    {
      id: 21,
      cover: 'images/img24.jpg',
      artist: 'G Perico',
      name: 'No Love in LA',
    },
    {
      id: 22,
      cover: 'images/img25.jpg',
      artist: 'Lakeyah',
      name: 'In Due Time',
    },
    {
      id: 23,
      cover: 'images/img26.jpg',
      artist: 'Woesum',
      name: 'Blue Summer',
    },
  ],
]

const Releases = (props) => {
  const chatSection = props.chatSection
  const albumsIndex = props.albumsIndex
  const costumClass = props.costumClass

  return (
    <section className='release'>
      <div className={`new-release ${costumClass}`}>
        <h2>New Releases</h2>
        <div className='album-container'>
          {releasedAlbums[albumsIndex].map((album) => {
            const { id, cover, artist, name } = album

            return (
              <div className='album' key={id}>
                <div className='cover'>
                  <img src={cover} alt='' />
                </div>
                <p>{name}</p>
                <p className='artist'>
                  {artist.length > 15 ? artist.slice(0, 15) + '...' : artist}
                </p>
              </div>
            )
          })}
        </div>
      </div>
      {chatSection ? (
        <div className='chat'>
          <div className='title'>
            <h2>Chat</h2>
            <p>Popout | New Tap</p>
          </div>
          <div className='chat-msg'>
            <div className='user'>
              <div className='user-img'>
                <img src='images/img1.jpg' alt='user' />
              </div>
              <div className='user-info'>
                <h6>John little</h6>
                <p>cool website</p>
              </div>
            </div>
          </div>
          <div className='send-msg'>
            <div className='profile'>
              <button>
                <FaUser />
              </button>
              <button>
                <GiSpeaker />
              </button>
            </div>
            <form className='chat-form'>
              <div className='name-field'>
                <input type='text' placeholder='name' />
                <button type='submit'>
                  <BiRightArrowCircle />
                </button>
              </div>
              <div className='name-field'>
                <input type='text' placeholder='message' />
                <button type='submit'>
                  <BiRightArrowCircle />
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default Releases
