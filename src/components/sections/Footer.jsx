// Components
import Anchor from '../../core/components/navigation/Anchor'
import Logo from '../../core/components/data-display/Logo'
// Styles
import styles from '../../styles/sections/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Anchor>
        <span className={styles.message}>
          <span className='mr-2'>With &#x2764;&#xfe0f; by</span>
          <Logo size='sm' />
        </span>
      </Anchor>
    </footer>
  )
}

export default Footer
