import FormContact from '../FormContact'
import styles from './ContactSection.module.css'

function ContactSection() {
  return (
    <section className={styles.container} id="contact">
      <div className={styles.content}>
        <h1> CONTACT </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam voluptas
          nostrum quisquam eum porro a pariatur accusamus veniam.
        </p>
        <div className={styles.grid}>
          <div>
            <FormContact />
          </div>
          <div>
            
          </div>
        </div>  
      </div>
    </section>
  )
}

export default ContactSection