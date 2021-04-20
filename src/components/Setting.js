import React, { useEffect, useState } from 'react'
import './setting.css'
import { AiTwotoneSetting } from 'react-icons/ai'
import { ImInstagram, ImTwitter } from 'react-icons/im'
import { SiDiscord } from 'react-icons/si'

const displayedText = [
  {
    id: 0,
    para: 'New Music every',
    link: 'Thursday',
  },
  {
    id: 1,
    para: 'Join our',
    link: 'Discord',
  },
  {
    id: 2,
    para: 'Follow us on',
    link: 'Instagram',
  },
  {
    id: 3,
    para: 'Follow us on',
    link: 'Twitter',
  },
]

const Sitting = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let lastIndex = displayedText.length - 1
    if (index > lastIndex) {
      setIndex(0)
    }
    return index
  }, [index])

  useEffect(() => {
    let showText = setInterval(() => {
      setIndex(index + 1)
    }, 7000)

    return () => clearInterval(showText)
  }, [index])

  return (
    <section className='setting'>
      <div className='setting-button'>
        <button>
          <AiTwotoneSetting />
        </button>
      </div>
      <div className='links'>
        {displayedText.map((text, textIndex) => {
          const { para, link, id } = text

          let shownText = ''

          if (index === textIndex) {
            shownText = 'show'
          }

          return (
            <p key={id} className={shownText}>
              {para} <span>{link}</span>
            </p>
          )
        })}
      </div>
      <div className='icons'>
        <button>
          <ImTwitter />
        </button>
        <button>
          <ImInstagram />
        </button>
        <button>
          <SiDiscord />
        </button>
      </div>
    </section>
  )
}

export default Sitting
