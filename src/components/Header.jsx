import styles from './Header.module.css';

export function Header() {

  return (
    <div className={styles.header}>
       <div className={styles.nameAuthor}>
          <h2>Calado.Jr</h2>
       </div>
       <div className={styles.menuOptions}>
           <ul>
                <li>Sobre me</li>
                <li>Projectos</li>
                <li>Contacto</li>
                <li>Interrest</li>
                <li>Lazer</li>
                <li>Percurso Escolar</li>
                <li>Etnia</li>
           </ul>
       </div>
    </div>
  )
}