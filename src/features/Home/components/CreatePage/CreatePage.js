/* eslint-disable css-modules/no-unused-class */
/* eslint-disable css-modules/no-undef-class */
import { useState } from 'react'

import studyImgae from './../../../../common/assets/icons/study.png'

import styles from './createPage.module.scss'

const fields = [
  { name: 'Materie predata', type: 'text', required: true },
  { name: 'Facultate', type: 'text', required: true },
  { name: 'Specializare', type: 'text', required: true },
  { name: 'Maxim numar studenti', type: 'text', required: true },
]

const CreatePage = () => {
  const [formState, setFormState] = useState({
    'Materie predata': '',
    Facultate: '',
    Specializare: '',
    'Maxim numar studenti': '',
  })
  const [errors, setErrors] = useState({})

  const validateField = (field, value) => {
    switch (field) {
      case 'Maxim numar studenti':
        return isNaN(value) ? 'Numarul maxim de studenti trebuie sa fie un numar' : null
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

  const handleRegister = () => {
    window.location.href = '/home'
  }

  return (
    <div className={styles.parent}>
      <img src={studyImgae} alt='your-s' className={styles.image} />
      <h1 className={styles.text_create}>Create</h1>
      <form onSubmit={handleSubmit} className={styles.form_container}>
        {fields.map(({ name, type, required }) => (
          <div key={name} className={styles.form_container_input}>
            <input
              type={type}
              placeholder={name}
              className={styles.input}
              name={name}
              value={formState[name]}
              onChange={handleInputChange}
              required={required}
            />
            {errors[name] && <p className={styles.error}>{errors[name]}</p>}
          </div>
        ))}
        <button type='submit' onClick={handleRegister} className={styles.button}>
          Creaza
        </button>
      </form>
    </div>
  )
}

export default CreatePage
