// Components
import Anchor from '../../core/components/navigation/Anchor'
import Logo from '../../core/components/data-display/Logo'

const Footer = () => {
  return (
    <footer className="py-4 text-white">
      <Anchor>
        <span className="flex justify-center items-center">
          <span className="mr-2">With &#x2764;&#xfe0f; by</span>
          <Logo size="sm" />
        </span>
      </Anchor>
    </footer>
  )
}

export default Footer
