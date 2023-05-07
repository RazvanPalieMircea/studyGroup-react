import { withLazy } from 'app/hocs/withLazy'

export const CreatePageMentor = withLazy(
  () => import('features/Home/components/CreatePageMentor/CreatePageMentor'),
)
