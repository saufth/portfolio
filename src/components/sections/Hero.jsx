// Components
import Title from '../../core/ui/components/data-display/Title'
// Styles
import styles from '../../styles/sections/Hero.module.css'
import IconLink from '../../core/ui/components/navigation/IconLink'

const Hero = () => {
  return (
    <div className={styles.hero}>

      <Title
        text="fullstack"
        highlighted="web dev"
        info="Software developer"
        center
      />

      <div className="mt-5 md:mt-9"></div>

      <IconLink
        text="Querétaro, Mx."
        icon="location"
        href="https://goo.gl/maps/iM3f27Y7ynwsdp2BA"
        target="_blank"
      />

    </div>
  )
}

export default Hero
