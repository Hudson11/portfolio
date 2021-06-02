import PrimaryButton from '../PrimaryButton'
import styles from './FirstSection.module.css'

function FirstSection () {
  return (
    <section className={styles.container} id="first-section">
      <div id="replace" className={styles.content}>
        <p> HUDSONDEV SERVICES </p>
        <span> Professional Development </span>
        <PrimaryButton 
          onClick={() => console.log('clicou')}
        >
          START SERVICE 
        </PrimaryButton>
      </div>
      <div id="overlay" className={styles.overlay}/>
    </section>
  )
}

export default FirstSection