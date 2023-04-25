import { Link } from 'react-router-dom'

import styles from './profilPage.module.scss'

const ProfilPage = () => {
  return (
    <div className={styles.parent}>
      <img
        src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
        alt='your-s'
        className={styles.image}
      />
      <div className={styles.container_group}>
        <p className={styles.text}>Nume: Mihai marian</p>
        <p className={styles.text}>Materie: Matematica</p>
        <p className={styles.text}>Facultate: FSEGA</p>
        <p className={styles.text}>Tip curs: Hybrid</p>
      </div>
      <Link to='/home' className={styles.text_home}>
        Acasa
      </Link>
      <Link to='/home' className={styles.text_home}>
        Join
      </Link>
    </div>
  )
}

export default ProfilPage
