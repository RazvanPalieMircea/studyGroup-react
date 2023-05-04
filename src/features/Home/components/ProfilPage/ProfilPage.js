import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import styles from './profilPage.module.scss'

const ProfilPage = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3000/profil/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [id])

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.parent}>
      <img
        src={
          data.isGroup
            ? 'https://static.vecteezy.com/system/resources/previews/000/643/462/original/vector-group-people-icon.jpg'
            : 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
        }
        alt='your-s'
        className={styles.image}
      />
      <div
        style={data.isGroup ? { backgroundColor: '#226951' } : {}}
        className={styles.container_group}>
        <p className={styles.text}>Nume: {data.name}</p>
        <p className={styles.text}>Materie: {data.materie}</p>
        <p className={styles.text}>Facultate: {data.facultate}</p>
        <p className={styles.text}>Tip curs: {data.curs}</p>
        <p className={styles.text}>ID: {id}</p> {/* display the id */}
      </div>
      <Link to='/home' className={styles.text_home}>
        Acasa
      </Link>
      <button className={styles.text_home}>Join</button>
    </div>
  )
}

export default ProfilPage
