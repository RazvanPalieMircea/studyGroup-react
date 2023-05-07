import { withLazy } from 'app/hocs/withLazy'

export const CreatePageGroup = withLazy(
  () => import('features/Home/components/CreatePageGroup/CreatePageGroup'),
)
