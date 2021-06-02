import PrimaryButton from '../PrimaryButton'
import styles from './ImageButton.module.css'

function ImageButton() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <PrimaryButton onClick={() => console.log('clicou')}>
          GET MORE INFORMATION
        </PrimaryButton>
      </div>
    </div>
  )
}

export default ImageButton