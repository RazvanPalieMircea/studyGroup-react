/* eslint-disable css-modules/no-unused-class */
/* eslint-disable css-modules/no-undef-class */
import { Calendar, momentLocalizer } from 'react-big-calendar'

import moment from 'moment'

import styles from './calendarPage.module.scss'

import 'react-big-calendar/lib/css/react-big-calendar.css'
const eventData = [
  {
    start: '2023-04-25T10:30:00Z',
    end: '2023-04-25T11:30:00Z',
    title: 'Meeting with John',
  },
  {
    start: '2023-04-26T13:00:00Z',
    end: '2023-04-26T14:30:00Z',
    title: 'Lunch with Sarah',
  },
  // more events
]
const localizer = momentLocalizer(moment)
const generateEvents = (eventData) => {
  const events = []
  eventData.forEach((event) => {
    const start = new Date(event.start)
    const end = new Date(event.end)
    const title = event.title
    events.push({ start, end, title })
  })
  return events
}
const CalendarPage = () => {
  return (
    <div className={styles.calendar}>
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
