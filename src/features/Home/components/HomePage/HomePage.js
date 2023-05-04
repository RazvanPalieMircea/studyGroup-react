import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import studyImage from './../../../../common/assets/icons/study.png'

import styles from './homePage.module.scss'

const HomePage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/mentors')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className={styles.parent}>
      <img src={studyImage} alt='your-s' className={styles.image} />
      {data.map((el) => (
        <Link key={el.id} to={`/profil/${el.id}`} className={styles.container_group}>
          <img
            src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
            alt='your-s'
            className={styles.image}
          />
          <Link to={`/profil/${el.id}`} className={styles.text}>
            {el.name}
          </Link>
        </Link>
      ))}
    </div>
  )
}

export default HomePage
