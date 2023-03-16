
import styles from './AboutMe.module.css';

export function AboutMe() {
  return (
    <div className={styles.aboutme}>
      <div className={styles.Profile}>
        <img src="https://media.licdn.com/dms/image/D4D03AQELW1xM6QNPeQ/profile-displayphoto-shrink_800_800/0/1678143368451?e=1684368000&v=beta&t=voO6nIrroafVqkZHt_R4_tfz0I9knAkwlhebYVTFtbM" alt="" />
      </div>

      <div className={styles.description}>
        <h1>Elêncio Calado Zivane</h1>

        <span>
          Meu nome é Elêncio Calado Zivane, tenho 22 anos de idade e sou estudante de Engenharia da Computação na  <a href="https://www.linkedin.com/school/unilab-oficial/">Universidade de Integração Internacional da Lusofonia Afro-Brasileira (UNILAB).</a> 
        </span>

        <span>
          Entretanto, tenho uma paixão por desenvolvimento web, por isso
          sempre estou a procura de novos conhecimentos e novas tecnologias para me desenvolver como programador Profissional.
        </span>

        <p>Atualmente um estudante de programação buscando conhecimento e Oportunidades</p>
      </div>
    </div>
  )
}