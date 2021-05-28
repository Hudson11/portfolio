import styles from './Toolbar.module.css'

function Toolbar() {
  return (
    <header className={styles.container}>
      <section>
        <span> LOGO </span>
        <table>
          <tbody>
            <tr>
              <td> <a href="#">  Home  </a> </td>
              <td> <a href="#">  About  </a> </td>
              <td> <a href="#">  Career  </a> </td>
              <td> <a href="#">  Services  </a> </td>
              <td> <a href="#">  Projects  </a> </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        links
      </section>
    </header>
  )
}

export default Toolbar