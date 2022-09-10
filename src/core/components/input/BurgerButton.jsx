// Styles
import styles from '../../../styles/input/BurgerButton.module.css'

const BurgerButton = ({onclick}) => {
  return (
    <button className={`${styles.buttonBurger} ${styles.group}`} onClick={onclick} >
      <div className={styles.buttonBurgerSticks}></div>
    </button>
  )
}

export default BurgerButton
