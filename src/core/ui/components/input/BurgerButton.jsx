// Styles
import styles from '../../../../styles/input/BurgerButton.module.css'

const BurgerButton = () => {
  return (
    <button className={styles.buttonBurger} onClick={() => alert('Menu')} >
      <div className={styles.buttonBurgerSticks}></div>
    </button>
  )
}

export default BurgerButton
