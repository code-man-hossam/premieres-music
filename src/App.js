import React from 'react'
import './App.css'
import Setting from './components/Setting'
import Carousel from './components/Carousel'
import Nav from './components/Nav'
import Releases from './components/Releases'
import QuickLinks from './components/QuickLinks'
import ParentAlbums from './components/ParentAlbums'
import Footer from './Footer'

function App() {
  return (
    <>
      <Nav />
      <Carousel />
      <Setting />
      <Releases chatSection={true} albumsIndex={0} />
      <QuickLinks
        linksComponent={true}
        title='New Songs'
        link='All New Songs'
        SongsIndex={0}
      />
      <ParentAlbums />
      <QuickLinks title='Recently Added Songs' SongsIndex={1} />
      <Releases albumsIndex={1} costumClass='release--costum' />
      <Footer />
    </>
  )
}

export default App
