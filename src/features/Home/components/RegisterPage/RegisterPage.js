/* eslint-disable css-modules/no-unused-class */
import { useState } from 'react'

import studyImgae from './../../../../common/assets/icons/study.png'

import styles from './registerPage.module.scss'

const fields = [
  { label: 'Nume user', name: 'name', type: 'text' },
  { label: 'Vârstă', name: 'varsta', type: 'number' },
  { label: 'Universitatea', name: 'universitate', type: 'text' },
  { label: 'Facultatea', name: 'facultate', type: 'text' },
  { label: 'Specializare', name: 'specializare', type: 'text' },
  { label: 'Mail', name: 'email', type: 'email' },
  { label: 'Parola', name: 'password', type: 'password' },
]

const RegisterPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    password: '',
    varsta: null,
    universitate: '',
    facultate: '',
    specializare: '',
    email: '',
    role: 'Admin',
    quizResult: [
      {
        key: 'ceva',
        value: 'altceva',
      },
      {
        key: 'ceva',
        value: 'altceva',
      },
    ],
    quizDone: true,
    mentors: [],
    mentys: [],
    groups: [],
    createdGroup: [],
  })
  const [errors, setErrors] = useState({})

  const validateField = (field, value) => {
    switch (field) {
      case 'email':
        return /\S+@\S+\.\S+/.test(value) ? null : 'Introduceți un email valid'
      case 'password':
        return value.length < 8 ? 'Parola trebuie să conțină cel puțin 8 caractere' : null
      case 'varsta':
        return isNaN(value) ? 'Vârsta trebuie să fie un număr' : null
      default:
        return value.trim() !== '' ? null : 'Completați acest câmp'
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  const sendDataToBackend = async (formData) => {
    const response = await fetch('http://localhost:3001/users/singup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error(`Failed to register: ${response.status}`)
    }

    const responseData = await response.json()
    console.log(responseData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formValid = Object.values(errors).every((val) => val === null)
    if (formValid) {
      try {
        await sendDataToBackend(formState)
        console.log('Registration successful')
        window.location.href = '/login'
      } catch (error) {
        console.error(error)
        setErrors({ name: 'Eroare register' })
      }
    } else {
      console.log('Form contains errors')
    }
  }

  return (
    <div className={styles.parent}>
      <img src={studyImgae} alt='login' className={styles.image} />
      <form onSubmit={handleSubmit} className={styles.form_container}>
        {fields.map(({ label, name, type }) => (
          <div key={name} className={styles.form_container_input}>
            <input
              type={type}
              placeholder={label}
              className={styles.input}
              name={name}
              value={formState[name]}
              onChange={handleInputChange}
            />
            {errors[name] && <p className={styles.error}>{errors[name]}</p>}
          </div>
        ))}
        <button type='submit' onClick={handleSubmit} className={styles.button}>
          Înregistrare
        </button>
      </form>
    </div>
  )
}

export default RegisterPage
