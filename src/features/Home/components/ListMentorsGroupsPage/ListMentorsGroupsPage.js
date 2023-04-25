import { Link } from 'react-router-dom'

import studyImgae from './../../../../common/assets/icons/study.png'

import styles from './listMentorsGroupsPage.module.scss'

const ListMentorsGroupsPage = () => {
  const handleJoin = () => {
    window.location.href = '/quiz'
  }
  return (
    <div className={styles.parent}>
      <img src={studyImgae} alt='your-s' className={styles.image} />
      {['mentor 1', 'mentor 2', 'group 1', 'group 2', 'mentor 3'].map((el, index) => (
        <div key={index} className={styles.container_group}>
          <img
            src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
            alt='your-s'
            className={styles.image}
          />
          <Link to='/profil' className={styles.text}>
            {el}
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
