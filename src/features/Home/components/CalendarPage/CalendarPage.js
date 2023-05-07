/* eslint-disable css-modules/no-undef-class */
import { useState, useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { Link } from 'react-router-dom'

import moment from 'moment'

import styles from './calendarPage.module.scss'

import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const CalendarPage = () => {
  const [eventData, setEventData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/events/get_all')
      .then((response) => response.json())
      .then((data) => setEventData(data))
      .catch((error) => console.error('Error fetching events:', error))
  }, [])

  const generateEvents = (events) => {
    return events.map((event) => ({
      start: new Date(event.start),
      end: new Date(event.end),
      title: event.title,
    }))
  }

  return (
    <div className={styles.calendar}>
      <div className={styles.link}>
        <Link to='/add-calendar' className={styles.text}>
          Adauga eveniment
        </Link>
      </div>
      <Calendar
        localizer={localizer}
        events={generateEvents(eventData)}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 700 }}
      />
    </div>
  )
}

export default CalendarPage
