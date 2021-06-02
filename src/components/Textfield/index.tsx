import { InputHTMLAttributes } from 'react'
import styles from './Textfield.module.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon: string
}

function Textfield({ icon, ...rest}: Props) {
  return (
    <div className={styles.container}>
      <div id={styles.content}>
        <span className="material-icons"> {icon} </span>
        <input {...rest} /> 
      </div>
    </div>
  )
}

export default Textfield
