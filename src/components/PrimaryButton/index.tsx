import { ReactNode } from 'react'
import styles from './PrimaryButton.module.css'

interface Props {
  children: ReactNode
  onClick: () => void
}

function PrimaryButton (props: Props) {

  const { children, onClick } = props

  return (
    <button 
      className={styles.button}
      onClick={onClick}
    >
      { children }
    </button>
  )
}

export default PrimaryButton