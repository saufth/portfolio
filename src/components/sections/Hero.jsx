// Components
import BgSteamAnimation from '../animation/BgSteamAnimation'
import Container from '../../core/components/layout/Container'
import IconLink from '../../core/components/navigation/IconLink'
import Navbar from '../navigation/Navbar'
import Title from '../../core/components/data-display/Title'
// Data
import iconsData from '../../modules/sections/data/hero-animation-icons.json'
// Styles
import styles from '../../styles/sections/Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>

      <Navbar />

      <Container auto fullHeight centerAlignment='start'>

        <div className={styles.greeting}>
          <span>Hi</span> 👋 <span>I&apos;m Saúl, a modern</span>
        </div>

        <Title
          text='fullstack'
          highlighted='web.dev'
          info='Software developer'
        />

        <div className={styles.location}>
          <IconLink
            text='Querétaro, Mx.'
            icon='location'
            href='https://goo.gl/maps/iM3f27Y7ynwsdp2BA'
            target='_blank'
          />
        </div>

        <BgSteamAnimation items={iconsData} steam='northeast' delay={777} />

      </Container>

    </div>
  )
}

export default Hero
