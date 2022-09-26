import styles from '../../../styles/data-display/Chip.module.css'

const Chip = ({ label }) => {
  return (
    <div className={styles.chip}>
      <label>
        {label}
      </label>
    </div>
  )
}

export default Chip
