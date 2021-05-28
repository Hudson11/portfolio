import styles from './ImageButton.module.css'

function ImageButton() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <button>
          GET MORE INFORMATION
        </button>
      </div>
    </div>
  )
}

export default ImageButton