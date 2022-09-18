// Components
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
  const [iconsAnimating, iconsRef] = useBgAnimation(iconsData, animationDelay)

  return (
    <div className={styles.hero}>

      <Navbar />

      <div className="flex flex-col items-center">
        <Title
          text="full~stack"
          highlighted="web.dev"
          info="Software developer"
          center
        />

        <div className="mt-5 sm:mt-8 lg:mt-10">
          <IconLink
            text="Querétaro, Mx."
            icon="location"
            href="https://goo.gl/maps/iM3f27Y7ynwsdp2BA"
            target="_blank"
          />
        </div>
      </div>

      <div className={styles.canvas}>
        <div className={styles.icons}>
          {iconsData.map((icon, index) => (
              <svg
                viewBox={iconsViewBox}
                className={iconsAnimating[index].isAnimating ? animationStyle : ''}
                ref={element => iconsRef.current[index] = element}
                key={index}
              >
                <path d={icon.data} />
              </svg>
            )
          )}
        </div>
      </div>

    </div>
  )
}

export default Hero
