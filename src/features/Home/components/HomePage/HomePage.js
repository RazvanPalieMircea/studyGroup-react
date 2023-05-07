import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import studyImage from './../../../../common/assets/icons/study.png'

import styles from './homePage.module.scss'

const HomePage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/mentors/get_all')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className={styles.parent}>
      <img src={studyImage} alt='your-s' className={styles.image} />
      {data.map((mentor) => (
        <Link key={mentor._id} to={`/profil/${mentor._id}`} className={styles.container_group}>
          <img
            src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
            alt='your-s'
            className={styles.image}
          />
          <Link to={`/profil/${mentor._id}`} className={styles.text}>
            {mentor.facultate}
          </Link>
        </Link>
      ))}
    </div>
  )
}

export default HomePage
