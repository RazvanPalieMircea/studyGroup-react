import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import styles from './profilPage.module.scss'

const ProfilPage = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3001/users/get_by_id/${id}`)
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
        <p className={styles.text}>Mail: {data.email}</p>
        <p className={styles.text}>Nume: {data.name}</p>
        <p className={styles.text}>Universitate: {data.universitate}</p>
        <p className={styles.text}>Facultate: {data.facultate}</p>
        <p className={styles.text}>Specializare: {data.specializare}</p>
        <p className={styles.text}>Varsta: {data.varsta}</p>
      </div>
      <Link to='/home' className={styles.text_home}>
        Acasa
      </Link>
      <button className={styles.text_home}>Join</button>
    </div>
  )
}

export default ProfilPage
