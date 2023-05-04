/* eslint-disable css-modules/no-undef-class */
/* eslint-disable css-modules/no-unused-class */
import { useState } from 'react'

import styles from './addCalendarPage.module.scss'

const AddCalendarPage = () => {
  const [formData, setFormData] = useState({
    start: '',
    end: '',
    title: '',
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [eventData, setEventData] = useState([])
  const [modalMessage, setModalMessage] = useState('')
  const [showModal, setShowModal] = useState(false)

  const postEvent = (eventData) => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3000/calendar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          resolve('Event successfully added!')
        })
        .catch((error) => {
          reject('There was a problem adding the event:', error)
        })
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { start, end, title } = formData
    if (!start || !end || !title) {
      setModalMessage('Please complete all fields')
      setShowModal(true)
      return
    }
    const newEvent = {
      start: new Date(start),
      end: new Date(end),
      title,
    }
    setEventData((prevData) => [...prevData, newEvent])
    setFormData({
      start: '',
      end: '',
      title: '',
    })

    try {
      const response = await postEvent(newEvent)
      setModalMessage(response)
      setShowModal(true)
    } catch (error) {
      setModalMessage(error)
    }
  }

  return (
    <div className={styles.parent}>
      <form onSubmit={handleSubmit} className={styles.form_container}>
        <label htmlFor='start' className={styles.text}>
          Start Time:
        </label>
        <input
          type='datetime-local'
          id='start'
          name='start'
          value={formData.start}
          onChange={handleChange}
          className={styles.input}
        />
        <label htmlFor='end' className={styles.text}>
          End Time:
        </label>
        <input
          type='datetime-local'
          id='end'
          name='end'
          value={formData.end}
          onChange={handleChange}
          className={styles.input}
        />
        <label htmlFor='title' className={styles.text}>
          Title:
        </label>
        <input
          type='text'
          id='title'
          name='title'
          value={formData.title}
          onChange={handleChange}
          className={styles.input}
        />
        <button type='submit' className={styles.button}>
          Add Event
        </button>
      </form>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <p>{modalMessage}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddCalendarPage
