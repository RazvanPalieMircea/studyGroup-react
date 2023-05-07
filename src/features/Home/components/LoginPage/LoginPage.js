import { useState } from 'react'

import studyImgae from './../../../../common/assets/icons/study.png'

import styles from './loginPage.module.scss'

const LoginPage = () => {
  const [email, setemail] = useState(null)
  const [password, setPassword] = useState(null)
  const [eror, setErorr] = useState(false)

  const handleLogin = () => {
    // Send login request with email and password
    fetch('http://localhost:3001/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        document.cookie = `token=${data.token};`
        localStorage.setItem('Id', data.user._id)
        window.location.href = '/home'
      })
      .catch(() => {
        setErorr(true)
      })
  }

  return (
    <div className={styles.parent}>
      <img src={studyImgae} alt='login' className={styles.image} />
      <div className={styles.form_container}>
        <input
          type='text'
          placeholder='Email'
          className={styles.input}
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Parola'
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href='*' className={styles.text}>
          Ai uitat parola?
        </a>
      </div>
      {eror ? <p className={styles.error}>Email sau parola gresita!</p> : ''}
      <button className={email && password ? styles.button : styles.disable} onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

export default LoginPage

export const user = {
  id: 1,
  name: 'string',
  password: 'string',
  varsta: 'string',
  universitate: 'string',
  facultate: 'string',
  specializare: 'string',
  mail: 'string',
  quizResult: [
    { key: 'denumire camp', value: 'string' },
    { key: 'denumire camp', value: 'string' },
  ],
  mentors: [1, 2, 3], //keyle sunt id-urile altor useri
  mentys: [1, 2, 3], //keyle sunt id-urile altor useri
  groups: [1, 2], //keyle sunt id-urile grupurilor
  createdGroup: [1, 2], //keyle sunt id-urile grupurilor dar aici sunt grupurile unde e admin
}

export const group = {
  id: 1,
  facultate: 'string',
  specializare: 'string',
  materie: 'string',
  members: [1, 2, 3], //keyle sunt id-urile altor useri
  maxNumberMembers: 5, // number
}

export const mnetor = {
  id: 1,
  facultate: 'string',
  specializare: 'string',
  materie: 'string',
  members: [1, 2, 3], //keyle sunt id-urile altor useri
  maxNumberMembers: 5, // number
}
