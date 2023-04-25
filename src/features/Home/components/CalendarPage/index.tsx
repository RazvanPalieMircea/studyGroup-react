import { withLazy } from 'app/hocs/withLazy'

export const CalendarPage = withLazy(
  () => import('features/Home/components/CalendarPage/CalendarPage'),
)
