/* eslint-disable css-modules/no-unused-class */
import { useState } from 'react'

import axios from 'axios'

import studyImgae from './../../../../common/assets/icons/study.png'

import styles from './createPage.module.scss'

const fields = [
  { name: 'materie', label: 'Materie predata', type: 'text', required: true },
  { name: 'facultate', label: 'Facultate', type: 'text', required: true },
  { name: 'specializare', label: 'Specializare', type: 'text', required: true },
  { name: 'maxNumberMembers', label: 'Maxim numar studenti', type: 'text', required: true },
]

const CreatePageGroup = () => {
  const [formState, setFormState] = useState({
    materie: '',
    Facultate: '',
    specializare: '',
    maxNumberMembers: '',
  })
  const [errors, setErrors] = useState({})

  const validateField = (field, value) => {
    switch (field) {
      case 'maxNumberMembers':
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

  const handleRegister = async (e) => {
    e.preventDefault()
    const formValid = Object.values(errors).every((val) => val === null)
    if (formValid) {
      try {
        const response = await axios.post('http://localhost:3001/groups/add', {
          ...formState,
          users: [], // Set users field as an empty array
        })
        console.log(response.data)
        window.location.href = '/home'
        // Call to create item was successful
      } catch (error) {
        console.error(error)
        // Handle error
      }
    } else {
      console.log('Form contains errors')
      // Handle invalid form
    }
  }

  return (
    <div className={styles.parent}>
      <img src={studyImgae} alt='your-s' className={styles.image} />
      <h1 className={styles.text_create}>Creaza</h1>
      <form className={styles.form_container}>
        {fields.map(({ name, label, type, required }) => (
          <div key={name} className={styles.form_container_input}>
            <input
              type={type}
              placeholder={label}
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

export default CreatePageGroup
