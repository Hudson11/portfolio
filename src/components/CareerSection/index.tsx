import PrimaryButton from '../PrimaryButton'
import styles from './CareerSection.module.css'

function CareerSection () {
  return (
    <section className={styles.container} id="career">
      <p> If you need to build your first online business ... I am available </p>
      <PrimaryButton onClick={() => console.log('contato')}> CONTACT US </PrimaryButton>
    </section>
  )
}

export default CareerSection