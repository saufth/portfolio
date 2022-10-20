// Components
import Anchor from '../../core/components/navigation/Anchor'
import Avatar from '../../core/components/data-display/Avatar'
import BurgerButton from '../../core/components/input/BurgerButton'
import Container from '../../core/components/layout/Container'
// Styles
import styles from '../../styles/navigation/Navbar.module.css'
import Button from '../../core/components/input/Button'

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

          <Button onclick={() => alert('Lets talk!')}>
            Let´s take a coffee!
          </Button>

          {/* <div className='block sm:hidden'>
            <BurgerButton />
          </div> */}

        </nav>
      </Container>
    </header>
  )
}

export default Navbar
