import React from 'react'
import UpcomingAlbums from './UpcomingAlbums'

const Albums = [
  [
    {
      id: 1,
      title: 'Dr.Evil',
      artist: 'Young Nudy',
      cover: 'upcomingAl/al1.jpg',
    },
    {
      id: 2,
      title: 'KO',
      artist: 'ssgkobe',
      cover: 'upcomingAl/al2.jpg',
    },
    {
      id: 3,
      title: 'Still Taking Risks',
      artist: 'Quando Rondo',
      cover: 'upcomingAl/al3.jpg',
    },
    {
      id: 4,
      title: 'Better Mistakes',
      artist: 'Bebe Rexha',
      cover: 'upcomingAl/al4.jpg',
    },
    {
      id: 5,
      title: 'Hotel Surrender',
      artist: 'Chet Faker',
      cover: 'upcomingAl/al5.jpg',
    },
    {
      id: 6,
      title: 'Long Lost',
      artist: 'Lord Huron',
      cover: 'upcomingAl/al6.jpg',
    },
    {
      id: 7,
      title: 'Not in Chronological Order',
      artist: 'Julia Micheals',
      cover: 'upcomingAl/al7.jpg',
    },
    {
      id: 8,
      title: 'Country Again',
      artist: 'Thomas Rhett',
      cover: 'upcomingAl/al8.jpg',
    },
    {
      id: 9,
      title: "A Gangsta's Pain",
      artist: 'Moneybag Yo',
      cover: 'upcomingAl/al9.jpg',
    },
    {
      id: 10,
      title: 'Scaled and Icy',
      artist: 'Twenty One Pilots',
      cover: 'upcomingAl/al10.jpg',
    },
  ],
  [
    {
      id: 1,
      title: "I Ain't Scared-single",
      artist: 'Young Boy Never Broke Again',
      cover: 'upcomingAl/al11.jpg',
    },
    {
      id: 2,
      title: 'Flames(feat. Avril Lavigne)',
      artist: 'MOD SUN',
      cover: 'upcomingAl/al12.jpg',
    },
    {
      id: 3,
      title: 'BGC(feat. DDG)-Single',
      artist: 'Blueface',
      cover: 'upcomingAl/al13.jpg',
    },
    {
      id: 4,
      title: 'Slime Language 2',
      artist: 'Young Stoner Life',
      cover: 'upcomingAl/al14.jpg',
    },
    {
      id: 5,
      title: 'Pick Up The Pace-Single',
      artist: 'Big K.R.I.T',
      cover: 'upcomingAl/al15.jpg',
    },
    {
      id: 6,
      title: 'Shinin-Single',
      artist: 'FCG Heem',
      cover: 'upcomingAl/al16.jpg',
    },
    {
      id: 7,
      title: 'Chopstix-Single',
      artist: 'Taleban Doodas',
      cover: 'upcomingAl/al17.jpg',
    },
    {
      id: 8,
      title: '80 BARZ-single',
      artist: 'Redman',
      cover: 'upcomingAl/al18.jpg',
    },
    {
      id: 9,
      title: 'Gotham',
      artist: 'Gotham ,Talib Kweli',
      cover: 'upcomingAl/al19.jpg',
    },
    {
      id: 10,
      title: 'Almost Woke-Single',
      artist: 'Luki',
      cover: 'upcomingAl/al10.jpg',
    },
  ],
  [
    {
      id: 1,
      title: 'Missunderstood...still',
      artist: 'Queen Naija',
      cover: 'upcomingAl/al21.jpg',
    },
    {
      id: 2,
      title: 'm b v',
      artist: 'my bloody valentine',
      cover: 'upcomingAl/al22.jpg',
    },
    {
      id: 3,
      title: 'The Fame',
      artist: 'Lady Gaga',
      cover: 'upcomingAl/al23.jpg',
    },
    {
      id: 4,
      title: 'rip2me',
      artist: 'lael',
      cover: 'upcomingAl/al24.jpg',
    },
    {
      id: 5,
      title: 'My Krazy Life(Deluxe Version)',
      artist: 'YG',
      cover: 'upcomingAl/al25.jpg',
    },
    {
      id: 6,
      title: 'Christmas in Tahoe(Deluxe Edition)',
      artist: 'Train',
      cover: 'upcomingAl/al26.jpg',
    },
    {
      id: 7,
      title: 'Drops of Jupiter',
      artist: 'Train',
      cover: 'upcomingAl/al27.jpg',
    },
    {
      id: 8,
      title: 'Train',
      artist: 'Train',
      cover: 'upcomingAl/al28.jpg',
    },
    {
      id: 9,
      title: 'Save Me, San Francisco',
      artist: 'Train',
      cover: 'upcomingAl/al29.jpg',
    },
    {
      id: 10,
      title: 'California 37',
      artist: 'Train',
      cover: 'upcomingAl/al30.jpg',
    },
  ],
]

const ParentAlbums = (props) => {
  return (
    <>
      <UpcomingAlbums
        title='Upcoming Albums'
        link='All Upcoming Albums'
        albumArray={Albums[0]}
      />
      <UpcomingAlbums
        title='Recently Added'
        link='All Recently Added'
        albumArray={Albums[1]}
        costumClass='recently--added'
      />
      <UpcomingAlbums
        title='Re-Uploads'
        link='All Re-Uploads'
        albumArray={Albums[2]}
        costumClass='re--uploads'
      />
    </>
  )
}

export default ParentAlbums
