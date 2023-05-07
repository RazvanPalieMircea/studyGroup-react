/* eslint-disable css-modules/no-unused-class */
import { Link } from 'react-router-dom'

import studyImgae from './../../../../common/assets/icons/study.png'

import styles from './listPage.module.scss'

const listButton = [
  {
    text: 'Găseste un mentor',
    name: 'findmentor',
    link: '/list/mentor',
    style: 'rgb(10, 175, 197)',
  },
  {
    text: 'Alătură-te unui grup',
    name: 'findgroup',
    link: '/list/group',
    style: 'rgb(118, 102, 8)',
  },
  {
    text: 'Crează grup',
    name: 'creategroup',
    link: '/create/group',
    style: 'rgb(9, 105, 18)',
  },
  {
    text: 'Devino un mentor',
    name: 'creatementor',
    link: '/create/mentor',
    style: 'rgb(118, 8, 34)',
  },
]
const ListPage = () => {
  return (
    <div className={styles.parent}>
      <img src={studyImgae} alt='your-s' className={styles.image} />
      {listButton.map((element, index) => (
        <div
          key={index}
          className={styles.container_text}
          style={{ backgroundColor: `${element.style}` }}>
          <Link to={element.link} className={styles.text}>
            {element.text}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ListPage
