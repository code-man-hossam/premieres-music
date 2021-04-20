import React from 'react'
import Links from './Links'
import NewSongs from './NewSongs'
import './quickLinks.css'

const listLinks = [
  {
    id: 0,
    link: 'New Releases',
  },
  {
    id: 1,
    link: 'New Songs',
  },
  {
    id: 2,
    link: 'New Albums',
  },
  {
    id: 3,
    link: 'New EPs',
  },
  {
    id: 4,
    link: 'New Music Videos',
  },
  {
    id: 5,
    link: 'Recently Added',
  },
  {
    id: 6,
    link: 'Top 50 Songs ',
  },
  {
    id: 7,
    link: 'Top 50 Albums ',
  },
  {
    id: 8,
    link: 'Up-Coming ',
  },
  {
    id: 9,
    link: 'Re-Upload',
  },
]

const popular = [
  {
    id: 1,
    title: 'Slime Language 2',
    artist: 'Young Stoner Life, Young Thug & Gunna',
    img: './images/img1.jpg',
  },
  {
    id: 2,
    title: 'Justice(Triple Chucks Deluxe)',
    artist: 'Justin Bieber',
  },
  {
    id: 3,
    title: 'SoulFly',
    artist: 'Rod Wave',
  },
  {
    id: 4,
    title: 'Destined to Win',
    artist: 'Lil Tjay',
  },
  {
    id: 5,
    title: 'Justice',
    artist: 'Justin Bieber',
  },
  {
    id: 6,
    title: 'Love is Weird',
    artist: 'Julia Michaels',
  },
  {
    id: 7,
    title: 'House of Ballons(original)',
    artist: 'The Weeknd',
  },
  {
    id: 8,
    title: 'Dancing With the Devil: The Art of Staring Over',
    artist: 'Demi Lovato',
  },
  {
    id: 9,
    title: 'Freedom-EP',
    artist: 'Justin Bieber',
  },
  {
    id: 10,
    title: "Fearless(Taylor's Version)",
    artist: 'Taylor Swift',
  },
]

const songs = [
  [
    {
      id: 1,
      title: "I Ain't Scared",
      artist: 'Young Boy Never Broke Again',
      cover: 'songs/song1.jpg',
    },
    {
      id: 2,
      title: 'Ski',
      artist: 'Young Stoner Life',
      cover: 'songs/song2.jpg',
    },
    {
      id: 3,
      title: 'Solid(feat. Drake)',
      artist: 'Young Stoner Life',
      cover: 'songs/song2.jpg',
    },
    {
      id: 4,
      title: 'SHOOT MY SHOT',
      artist: 'IDK & Offset',
      cover: 'songs/song3.jpg',
    },
    {
      id: 5,
      title: 'Aire',
      artist: 'Steve Aoki & Farruko',
      cover: 'songs/song4.jpg',
    },
    {
      id: 6,
      title: 'Sabotage',
      artist: 'Bebe Rexha',
      cover: 'songs/song5.jpg',
    },
    {
      id: 7,
      title: "What's Your Country Song",
      artist: 'Thomas Rhett',
      cover: 'songs/song6.jpg',
    },
    {
      id: 8,
      title: 'You',
      artist: 'Regard, Troye Sivan & Tate McRae',
      cover: 'songs/song7.jpg',
    },
    {
      id: 9,
      title: 'Been To War',
      artist: 'Godfather of Harlem',
      cover: 'songs/song8.jpg',
    },
    {
      id: 10,
      title: 'Long Lost',
      artist: 'Lord Huron',
      cover: 'songs/song9.jpg',
    },
    {
      id: 11,
      title: 'Love is Weird',
      artist: 'Julia Michaels',
      cover: 'songs/song10.jpg',
    },
    {
      id: 12,
      title: 'What it Cost',
      artist: 'Toosii',
      cover: 'songs/song11.jpg',
    },
    {
      id: 13,
      title: 'Shots in The Dark',
      artist: 'iann dior & Trippie Redd',
      cover: 'songs/song12.jpg',
    },
    {
      id: 14,
      title: 'Titanium',
      artist: 'Dave',
      cover: 'songs/song13.jpg',
    },
    {
      id: 15,
      title: 'You Stupid Bitch',
      artist: 'Girl in Red',
      cover: 'songs/song14.jpg',
    },
    {
      id: 16,
      title: 'Amy Shark',
      artist: 'Amy Shark',
      cover: 'songs/song15.jpg',
    },
  ],
  [
    {
      id: 1,
      title: "I Ain't Scared",
      artist: 'Young Boy Never Broke Again',
      cover: 'songs/song1.jpg',
    },
    {
      id: 2,
      title: 'Flames(feat. Avril Lavigne)',
      artist: 'MOD SUN',
      cover: 'upcomingAl/al12.jpg',
    },
    {
      id: 3,
      title: 'BGC(feat. DDG)',
      artist: 'Blueface',
      cover: 'upcomingAl/al13.jpg',
    },
    {
      id: 4,
      title: 'Pick Up The Pace',
      artist: 'Big K.R.I.T',
      cover: 'upcomingAl/al15.jpg',
    },
    {
      id: 5,
      title: 'Chopstix',
      artist: 'Talepan Dooda',
      cover: 'upcomingAl/al17.jpg',
    },
    {
      id: 6,
      title: '80 BARZ',
      artist: 'Redman',
      cover: 'upcomingAl/al18.jpg',
    },
    {
      id: 7,
      title: 'Almost Woke',
      artist: 'Luki',
      cover: 'upcomingAl/al20.jpg',
    },
    {
      id: 8,
      title: 'Goddess (feat. Bigbabygucci, Austin Skinner & Draco) - Single',
      artist: 'Better Temperature',
      cover: 'upcomingAl/al31.jpg',
    },
    {
      id: 9,
      title: 'Never Bend Never Fold - Single',
      artist: 'Tee Grizzley & G Herbo',
      cover: 'upcomingAl/al32.jpg',
    },
    {
      id: 10,
      title: 'Ski',
      artist: 'Young Stoner Life',
      cover: 'upcomingAl/al14.jpg',
    },
    {
      id: 11,
      title: 'Solid(feat. Drake)',
      artist: 'Young Stoner Life',
      cover: 'upcomingAl/al14.jpg',
    },
    {
      id: 12,
      title: 'H20',
      artist: 'DJ Chose & Fredo Bang',
      cover: 'upcomingAl/al33.jpg',
    },
    {
      id: 13,
      title: 'Solo',
      artist: 'Shakka & GoldLink',
      cover: 'upcomingAl/al34.jpg',
    },
    {
      id: 14,
      title: 'Low Key In Love',
      artist: 'The Struts & paris jackson',
      cover: 'upcomingAl/al35.jpg',
    },
    {
      id: 15,
      title: 'Everybody Knows',
      artist: 'WRLDFMS Tony Williams & Wale',
      cover: 'upcomingAl/al36.jpg',
    },
    {
      id: 16,
      title: 'Shoot My Shot',
      artist: 'IDK & Offset',
      cover: 'songs/song3.jpg',
    },
  ],
]

const QuickLinks = (props) => {
  const linksComponent = props.linksComponent
  const title = props.title
  const link = props.link
  const SongsIndex = props.SongsIndex
  return (
    <section className='songs--links'>
      <NewSongs title={title} link={link} songs={songs[SongsIndex]} />
      {linksComponent ? (
        <Links listLinks={listLinks} popular={popular} />
      ) : null}
    </section>
  )
}

export default QuickLinks
