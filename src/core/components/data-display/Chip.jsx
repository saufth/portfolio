import styles from '../../../styles/data-display/Chip.module.css'

const Chip = ({ label }) => {
  return (
    <label className={styles.chip}>
      {label}
    </label>
  )
}

export default Chip
