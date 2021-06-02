import ServiceItem from '../ServiceItem'
import styles from './ServiceSection.module.css'

function ServiceSection() {
  return (
    <section className={styles.container}>
      <h1> Services </h1>
      <div className={styles.grid}>
        <div>
          <ServiceItem
            color="primary"
            iconName="home"
            title="Ecommerce"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic."
          />
        </div>
        <div>
          <ServiceItem
            color="primary"
            iconName="home"
            title="Ecommerce"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic."
          />
        </div>
        <div>
          <ServiceItem
            color="primary"
            iconName="home"
            title="Ecommerce"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic."
          />
        </div>
        <div>
          <ServiceItem
            color="primary"
            iconName="home"
            title="Ecommerce"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic."
          />
        </div>
        <div>
          <ServiceItem
            color="primary"
            iconName="home"
            title="Ecommerce"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic."
          />
        </div>
        <div>
          <ServiceItem
            color="primary"
            iconName="home"
            title="Ecommerce"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic."
          />
        </div>
      </div>
    </section>
  )
}

export default ServiceSection