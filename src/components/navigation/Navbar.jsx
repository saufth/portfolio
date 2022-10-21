// Components
import Anchor from '../../core/components/navigation/Anchor'
import MagnetAvatar from '../../core/components/data-display/MagnetAvatar'
import Container from '../../core/components/layout/Container'
// Styles
import styles from '../../styles/navigation/Navbar.module.css'
import MagnetButton from '../../core/components/input/MagnetButton'

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Container auto>
        <nav className={styles.navigation}>

          <div className={styles.avatar}>
            <Anchor>
              <MagnetAvatar />
            </Anchor>
          </div>

          <MagnetButton onclick={() => alert('Let\'s take a coffee!')}>
            Let´s take a coffee!
          </MagnetButton>

        </nav>
      </Container>
    </header>
  )
}

export default Navbar
