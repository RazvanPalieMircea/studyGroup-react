import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import styles from './profilPage.module.scss'

const ProfilPage = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(`http://localhost:3001/users/get_by_id/${id}`)
        if (userResponse.ok) {
          const userData = await userResponse.json()
          setData(userData)
        } else {
          let mentorResponse = await fetch(`http://localhost:3001/mentors/get/${id}`)
          if (mentorResponse.ok) {
            const mentorData = await mentorResponse.json()
            setData({ mentor: mentorData })
          } else {
            let mentorResponse = await fetch(`http://localhost:3001/groups/get/${id}`)
            const mentorData = await mentorResponse.json()
            setData({ mentor: mentorData })
          }
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [id])

  if (!data) {
    return <div>Loading...</div>
  }

  const isMentor = data.hasOwnProperty('mentor')
  const profileData = isMentor ? data.mentor : data

  return (
    <div className={styles.parent}>
      <img
        src={
          isMentor
            ? 'https://static.vecteezy.com/system/resources/previews/000/643/462/original/vector-group-people-icon.jpg'
            : 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
        }
        alt='your-s'
        className={styles.image}
      />
      <div
        style={isMentor ? { backgroundColor: '#226951' } : {}}
        className={styles.container_group}>
        {isMentor ? (
          <>
            <p className={styles.text}>
              {profileData.mentor?.mentorId ? 'Mentor' : 'Group'} ID:{' '}
              {profileData.mentor ? profileData.mentor?.mentorId : profileData.group._id}
            </p>
            <p className={styles.text}>
              Facultate:{' '}
              {profileData.mentor ? profileData.mentor.facultate : profileData.group.facultate}
            </p>
            <p className={styles.text}>
              Specializare:{' '}
              {profileData.mentor ? profileData.specializare : profileData.group.specializare}
            </p>
            <p className={styles.text}>
              Materie: {profileData.mentor ? profileData.mentor.materie : profileData.group.materie}
            </p>
            {profileData.mentor?.maxNumberMember ? (
              <p className={styles.text}>
                Numar maxim de studenti pentru acest mentor: {profileData.mentor.maxNumberMembers}
              </p>
            ) : (
              ''
            )}
          </>
        ) : (
          <>
            <p className={styles.text}>Mail: {profileData.email}</p>
            <p className={styles.text}>Nume: {profileData.name}</p>
            <p className={styles.text}>Universitate: {profileData.universitate}</p>
            <p className={styles.text}>Facultate: {profileData.facultate}</p>
            <p className={styles.text}>Specializare: {profileData.specializare}</p>
            <p className={styles.text}>Varsta: {profileData.varsta}</p>
          </>
        )}
      </div>
      <Link to='/home' className={styles.text_home}>
        Acasa
      </Link>
      {isMentor ? <button className={styles.text_home}>Join</button> : ''}
    </div>
  )
}

export default ProfilPage
