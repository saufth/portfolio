// Components
import BgSteamAnimation from '../animation/BgSteamAnimation'
import Container from '../../core/components/layout/Container'
import IconLink from '../../core/components/navigation/IconLink'
import Navbar from '../navigation/Navbar'
import Title from '../../core/components/data-display/Title'
// Hooks
import { useEffect, useRef, useState } from 'react'
import useRefDimensions from '../../modules/sizing/hooks/useRefDimensions'
import useRefMagnetic from '../../modules/animation/hooks/useRefMagnetic'
// Data
import iconsData from '../../modules/sections/data/hero-animation-icons.json'
// Styles
import styles from '../../styles/sections/Hero.module.css'

const heroConfig = {
  initial: {
    content: {
      alignment: 'start',
      animation: {
        rotation: 0,
        transition: 0,
        fromPage: true
      }
    },
    card3D: {
      animation: {
        rotation: 20,
        transition: 10,
        fromPage: true
      }
    }
  },
  mobile: {
    content: {
      alignment: 'center',
      animation: {
        rotation: 20,
        transition: 0,
        fromPage: true
      }
    },
    card3D: {
      animation: {
        rotation: 20,
        transition: 0,
        fromPage: true
      }
    }
  }
}

const Hero = () => {
  const [heroState, setHeroState] = useState(heroConfig.initial)

  const heroRef = useRef()
  const heroSize = useRefDimensions(heroRef)

  // const contentMagneticRef = useRefMagnetic({
  //   fieldRef: heroRef,
  //   ...heroState.content.animation
  // })
  // const card3DMagneticRef = useRefMagnetic({
  //   fieldRef: heroRef,
  //   ...heroState.card3D.animation
  // })

  useEffect(() => {
    setHeroState(heroSize.width > 768 ? heroConfig.initial : heroConfig.mobile)
  }, [heroSize])

  return (
    <div className={styles.hero} ref={heroRef}>

      <Navbar />

      <Container
        auto
        fullHeight
        perspective
        alignment={heroState.content.alignment}
      >
        {/* <div className={styles.content} ref={contentMagneticRef}> */}
        <div className={styles.content}>

          <div className={styles.greeting}>
            <span>Hi</span> 👋 <span>I&apos;m Saúl, a modern</span>
          </div>

          <div className={styles.title}>
            <Title
              text='fullstack'
              highlighted='web.dev'
              info='Software developer'
              alignment={heroState.content.alignment}
              shadow
            />
          </div>

          <div className={styles.location}>
            <IconLink
              text='Querétaro, Mx.'
              icon='location'
              href='https://goo.gl/maps/iM3f27Y7ynwsdp2BA'
              target='_blank'
              shadow
            />
          </div>

        </div>
      </Container>

      <BgSteamAnimation items={iconsData} steam='northeast' />

      {/* <div className={styles.card3DContainer}>
        <div className={styles.card3D} ref={card3DMagneticRef}>
          <div className={styles.card3DBackground}></div>
        </div>
      </div> */}

    </div>
  )
}

export default Hero
