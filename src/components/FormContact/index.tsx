import ButtonSubmit from '../ButtonSubmit'
import Textfield from '../Textfield'
import styles from './FormContact.module.css'

function FormContact () {
  return (
    <div className={styles.container}>
      <header>
        <span className="material-icons">
          contact_mail
        </span>
        <label> Write to us </label>
      </header>
      <div className={styles.form}>
        <div id={styles.contentSpan}> <span> We'll write rarely, but only the best content. </span> </div>
        <form>
          <Textfield 
            id="name"
            aria-describedby="name for user"
            type="text"
            required
            placeholder="Name"
            icon="account_circle"
          />

           <Textfield 
            id="email"
            aria-describedby="name for user"
            type="email"
            required
            placeholder="Email"
            icon="email"
          />

           <Textfield 
            id="phone"
            aria-describedby="name for user"
            type="text"
            required
            placeholder="(99) 9 9999-9999"
            icon="settings_phone"
          />

          <ButtonSubmit text="Submit" />
        </form>
      </div>
    </div>
  )
}

export default FormContact