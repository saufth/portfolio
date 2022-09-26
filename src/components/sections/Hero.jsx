// Components
import Container from '../../core/components/layout/Container'
import IconLink from '../../core/components/navigation/IconLink'
import Navbar from '../navigation/Navbar'
import Title from '../../core/components/data-display/Title'
// Hooks
import useBgAnimation from '../../modules/animation/hooks/useBgAnimation'
// Data
import iconsData from '../../modules/sections/data/hero-animation-icons.json'
// Styles
import styles from '../../styles/sections/Hero.module.css'

const iconsViewBox = '0 0 24 24'
const animationStyle = 'animate-steam-up'
const animationDelay = 777

const Hero = () => {
  const [itemsAnimating, animatedItemsRef] = useBgAnimation(
    animationStyle,
    iconsData.length,
    animationDelay
  )

  return (
    <div className={styles.hero}>

      <Navbar />

      <Container auto fullHeight centerAlignment="start">
        <div className={styles.greeting}>
          <span>Hi</span> 👋 <span>I&apos;m Saúl,</span>
        </div>

        <Title
          text="full~stack"
          highlighted="web.dev"
          info="Software developer"
        />

        <div className={styles.location}>
          <IconLink
            text="Querétaro, Mx."
            icon="location"
            href="https://goo.gl/maps/iM3f27Y7ynwsdp2BA"
            target="_blank"
          />
        </div>

        <div className={styles.canvas}>
          <div className={styles.icons}>
            {iconsData.map((icon, index) => (
              <svg
                viewBox={iconsViewBox}
                className={itemsAnimating[index].isAnimating}
                ref={element => animatedItemsRef.current[index] = element}
                key={index}
              >
                <path d={icon.data} />
              </svg>
            ))}
          </div>
        </div>
      </Container>

    </div>
  )
}

export default Hero
