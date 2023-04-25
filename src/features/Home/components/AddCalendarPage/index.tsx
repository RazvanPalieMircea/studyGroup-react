import { withLazy } from 'app/hocs/withLazy'

export const AddCalendarPage = withLazy(
  () => import('features/Home/components/AddCalendarPage/AddCalendarPage'),
)
