// Components
import Anchor from '../../core/components/navigation/Anchor'
import Avatar from '../../core/components/data-display/Avatar'
import BurgerButton from '../../core/components/input/BurgerButton'
import Chip from '../../core/components/data-display/Chip'
import Container from '../../core/components/layout/Container'
// Styles
import styles from '../../styles/navigation/Navbar.module.css'

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Container>
        <nav className={styles.navigation}>
          <div className={styles.avatar}>
            <Anchor>
              <Avatar />
            </Anchor>
            <div className={styles.chip}>
              <Chip label="Hi, I&apos;m Saúl" />
            </div>
          </div>

          <BurgerButton />
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
