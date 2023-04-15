import { useState } from 'react'

import studyImgae from './../../../../common/assets/icons/study.png'

import styles from './registerPage.module.scss'

const fields = [
  { name: 'Nume user', type: 'text' },
  { name: 'Vârstă', type: 'number' },
  { name: 'Universitatea', type: 'text' },
  { name: 'Facultatea', type: 'text' },
  { name: 'Specializare', type: 'text' },
  { name: 'Mail', type: 'email' },
  { name: 'Parola', type: 'password' },
]

const RegisterPage = () => {
  const [formState, setFormState] = useState({
    'Nume user': '',
    Vârstă: '',
    Universitatea: '',
    Facultatea: '',
    Specializare: '',
    Mail: '',
    Parola: '',
  })
  const [errors, setErrors] = useState({})

  const validateField = (field, value) => {
    switch (field) {
      case 'Mail':
        return /\S+@\S+\.\S+/.test(value) ? null : 'Introduceți un email valid'
      case 'Parola':
        return value.length < 8 ? 'Parola trebuie să conțină cel puțin 8 caractere' : null
      case 'Vârstă':
        return isNaN(value) ? 'Vârsta trebuie să fie un număr' : null
      default:
        return null
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formValid = Object.values(errors).every((val) => val === null)
    if (formValid) {
      // send form data to backend
      console.log(formState)
    } else {
      console.log('Form contains errors')
    }
  }

  return (
    <div className={styles.parent}>
      <img src={studyImgae} alt='login' className={styles.image} />
      <form onSubmit={handleSubmit} className={styles.form_container}>
        {fields.map(({ name, type }) => (
          <div key={name}>
            <input
              type={type}
              placeholder={name}
              className={styles.input}
              name={name}
              value={formState[name]}
              onChange={handleInputChange}
            />
            {errors[name] && <p className={styles.error}>{errors[name]}</p>}
          </div>
        ))}
        <a href='#' className={styles.text}>
          Ai uitat parola?
        </a>
        <button type='submit' className={styles.button}>
          Înregistrare
        </button>
      </form>
    </div>
  )
}

export default RegisterPage
