import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './ButtonSubmit.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  text: string
}

function ButtonSubmit ({ children, text, ...rest }: Props) {
  return (
    <button 
      className={styles.submit}
      {...rest}
    >
      { children }
      <span> { text } </span>
    </button>
  )
}

export default ButtonSubmit