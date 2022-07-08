import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'


export default function Navbar() {
    return (
      <div className={styles.navbar}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/register">Registar</Link>
          </li>
          <li className={styles.item}>
            <Link to="/">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/">Contato</Link>
          </li>
        </ul>
    </div>
    )
}