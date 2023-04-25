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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { start, end, title } = formData
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
      <div className={styles.eventData}>{JSON.stringify(eventData)}</div>
    </div>
  )
}

export default AddCalendarPage
