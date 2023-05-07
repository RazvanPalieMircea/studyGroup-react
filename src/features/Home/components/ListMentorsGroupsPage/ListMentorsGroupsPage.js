import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import studyImgae from './../../../../common/assets/icons/study.png'

import styles from './listMentorsGroupsPage.module.scss'

const ListMentorsGroupsPage = () => {
  const [data, setData] = useState([])
  const location = useLocation()
  const hasMentor = location.pathname === '/list/mentor'

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (hasMentor) {
          const mentorResponse = await fetch('http://localhost:3001/mentors/get_all')
          const mentorData = await mentorResponse.json()
          setData([...mentorData])
        } else {
          const groupResponse = await fetch('http://localhost:3001/groups/get_all')
          const groupData = await groupResponse.json()

          setData([...groupData])
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  const handleJoin = () => {
    window.location.href = '/home'
  }

  return (
    <div className={styles.parent}>
      <img src={studyImgae} alt='your-s' className={styles.image} />
      {data.map((el, index) => (
        <div key={index} className={styles.container_group}>
          <img
            src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
            alt='your-s'
            className={styles.image}
          />
          <Link to={`/profil/${el._id}`} className={styles.text}>
            {!hasMentor
              ? `Group invatare pentru ${el.materie}`
              : `Mentor ce te invata ${el.materie}`}
          </Link>
          <div onClick={handleJoin} className={styles.join}>
            Join
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListMentorsGroupsPage
