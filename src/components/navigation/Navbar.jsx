// Components
import Anchor from '../../core/components/navigation/Anchor'
import Avatar from '../../core/components/data-display/Avatar'
import BurgerButton from '../../core/components/input/BurgerButton'
import Chip from '../../core/components/data-display/Chip'
import Container from '../../core/components/layout/Container'

const Navbar = () => {
  return (
    <header className="w-full py-6 sm:py-8 absolute z-50">
      <Container>
        <nav className="flex items-center justify-between">
          <Anchor>
            <div className="flex justify-center items-center">
              <Avatar />
              <div className="ml-5 sm:ml-7">
                <Chip label="Hi, I&apos;m Saúl" />
              </div>
            </div>
          </Anchor>

          <BurgerButton />
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
