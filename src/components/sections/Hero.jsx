// Components
import IconLink from '../../core/components/navigation/IconLink'
import Title from '../../core/components/data-display/Title'
// Styles
import styles from '../../styles/sections/Hero.module.css'

const Hero = () => {
  return (
    <div
      className={styles.hero}
    >

      <Title
        text="full~stack"
        highlighted="web dev"
        info="Software developer"
        center
      />

      <div className="mt-6 sm:mt-10">
        <IconLink
          text="Querétaro, Mx."
          icon="location"
          href="https://goo.gl/maps/iM3f27Y7ynwsdp2BA"
          target="_blank"
        />
      </div>

    </div>
  )
}

export default Hero
