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

const responsiveConfigState = {
  initial: {
    titleAlignment: false,
    containerAlignment: 'start',
    animation: {
      rotation: 10,
      transition: 16
    }
  },
  mobile: {
    titleAlignment: true,
    containerAlignment: 'center',
    animation: {
      rotation: 8,
      transition: 6
    }
  }
}

const Hero = () => {
  const [
    responsiveConfig,
    setResponsiveConfig
  ] = useState(responsiveConfigState.initial)

  const heroRef = useRef()
  const heroSize = useRefDimensions(heroRef)

  const greetingMagneticRef = useRefMagnetic({
    fieldRef: heroRef,
    reverse: true,
    ...responsiveConfig.animation
  })
  const titleMagneticRef = useRefMagnetic({
    fieldRef: heroRef,
    reverse: true,
    ...responsiveConfig.animation
  })
  const locationMagneticRef = useRefMagnetic({
    fieldRef: heroRef,
    reverse: true,
    ...responsiveConfig.animation
  })
  const card3DMagneticRef = useRefMagnetic({
    fieldRef: heroRef,
    reverse: false,
    ...responsiveConfig.animation
  })

  const handleResize = () => {
    setResponsiveConfig(
      heroSize.width > 640
        ? responsiveConfigState.initial
        : responsiveConfigState.mobile
    )
  }

  useEffect(() => {
    handleResize()
  }, [heroSize])

  return (
    <div className={styles.hero} ref={heroRef}>

      <Navbar />

      <Container
        auto
        fullHeight
        perspective
        centerAlignment={responsiveConfig.containerAlignment}
      >

        <div className={styles.greeting} ref={greetingMagneticRef}>
          <span>Hi</span> 👋 <span>I&apos;m Saúl, a modern</span>
        </div>

        <div className={styles.title} ref={titleMagneticRef}>
          <Title
            text='fullstack'
            highlighted='web.dev'
            info='Software developer'
            center={responsiveConfig.titleAlignment}
            shadow
          />
        </div>

        <div className={styles.location} ref={locationMagneticRef}>
          <IconLink
            text='Querétaro, Mx.'
            icon='location'
            href='https://goo.gl/maps/iM3f27Y7ynwsdp2BA'
            target='_blank'
            shadow
          />
        </div>

      </Container>

      <BgSteamAnimation items={iconsData} steam='northeast' delay={666} />

      <div className={styles.card3DContainer}>
        <div className={styles.card3D} ref={card3DMagneticRef}>
          <div className={styles.card3DBackground}></div>
        </div>
      </div>

    </div>
  )
}

export default Hero
