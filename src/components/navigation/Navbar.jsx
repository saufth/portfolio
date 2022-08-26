// Components
import Anchor from '../../core/ui/components/navigation/Anchor'
import Avatar from '../../core/ui/components/data-display/Avatar'
import BurgerButton from '../../core/ui/components/input/BurgerButton'
import Chip from '../../core/ui/components/data-display/Chip'

const Navbar = () => {
  return (
    <header className="py-6 md:py-7">
        <nav className="flex items-center justify-between">
          <Anchor>
            <div className="flex justify-center items-center">
              <Avatar />
              <div className="ml-6 md:ml-7">
                <Chip label="Hi, I&apos;m Saúl" />
              </div>
            </div>
          </Anchor>

          <BurgerButton />
        </nav>
    </header>
  )
}

export default Navbar
