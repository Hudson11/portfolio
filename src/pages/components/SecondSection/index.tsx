import ImageButton from '../ImageButton'
import styles from './SecondSection.module.css'

function SecondSection () {
  return (
    <section className={styles.container}>
      <main>
        <div id={styles.head}> 
          <h1 id={styles.h1mobile}> ABOUT </h1>
          <ImageButton /> 
        </div>
        <div>
          <h1 id={styles.h1full}> ABOUT </h1>
          <strong> I am a professional specialized in the development of websites, portfolios, electronic commerce and etc ... </strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Por nenhuma razão, 
            qualquer um dos fracos de espírito, é assim chamado do desejo do direito desses 
            sintomas? Recusado aos prazeres, ele foi escolhido para o grande obstáculo a esses 
            sintomas, Bem-aventurados os ancestrais de alguns dos momentos mais importantes, 
            por assim dizer. O direito ao gozo dos prazeres de uma grande coisa, é apenas como 
            períodos de tempo, ter a mente que exceto o problema de qualquer espécie, ou podemos 
            ser capazes a este respeito: ele odeia porque quer. Ele quem a explicação disso é por 
            meio do qual, o mais importante de desconforto. Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Seguir aquele que é sábio não é resultado suscetível da dor do presente.
          </p>
        </div>
      </main>
    </section>
  )
}

export default SecondSection