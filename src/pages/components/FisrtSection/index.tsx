import styles from './FirstSection.module.css'

function FirstSection () {
  return (
    <section className={styles.container} id="first-section">
      <div id="replace" className={styles.content}>
        <p> HUDSONDEV SERVICES </p>
        <span> Professional Development </span>
      </div>
      <div id="overlay" className={styles.overlay}/>
    </section>
  )
}

export default FirstSection