// Components
import Anchor from '../../core/components/navigation/Anchor'
import Avatar from '../../core/components/data-display/Avatar'
import BurgerButton from '../../core/components/input/BurgerButton'
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
              <Avatar />
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
