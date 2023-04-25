/* eslint-disable css-modules/no-undef-class */
import { Calendar, momentLocalizer } from 'react-big-calendar'

import moment from 'moment'

import styles from './calendarPage.module.scss'
import 'react-big-calendar/lib/css/react-big-calendar.css'
const events = [
  {
    start: new Date(),
    end: new Date(),
    title: 'Programare',
  },
  // more events
]
const localizer = momentLocalizer(moment)

const CalendarPage = () => {
  return (
    <div className={styles.container}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 700 }}
      />
    </div>
  )
}

export default CalendarPage
