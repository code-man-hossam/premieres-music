import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './carousel.css'
import { albums } from './albumData'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

const MultiCarousel = () => {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={3000}
      autoPlay={true}
      keyBoardControl={true}
      containerClass='carousel-container'
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass='custom-dot-list-style'
      itemClass='carousel-item-padding-40-px'
      className='carousel'
    >
      {albums.map((album) => {
        const { id, img } = album
        return (
          <div className='album' key={id}>
            <img src={img} alt='album cover' />
          </div>
        )
      })}
    </Carousel>
  )
}

export default MultiCarousel
