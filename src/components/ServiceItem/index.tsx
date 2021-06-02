import { ReactNode } from 'react'
import styles from './ServiceItem.module.css'

interface Props {
  iconName: string
  color?: 'primary' | 'secondary' | 'default'
  title: string
  description: string
}

function ServiceItem(props: Props) {

  const { iconName, color, title, description } = props

  let iconColor = ''
  if(color) {
    if(color === 'primary') iconColor = '#c89a69'
    else if(color === 'secondary') iconColor = '#fff'
  }

  return (
    <div className={styles.container}>
      <span 
        className="material-icons"
        style={{ color: iconColor }}
      >
       {iconName}
      </span>
      <div id={styles.content}>
        <label> | {title} </label>
        <p> {description} </p>
      </div>
    </div>
  )
}

export default ServiceItem