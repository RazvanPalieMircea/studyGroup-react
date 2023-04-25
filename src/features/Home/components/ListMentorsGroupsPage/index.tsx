import { withLazy } from 'app/hocs/withLazy'

export const ListMentorsGroupsPage = withLazy(
  () => import('features/Home/components/ListMentorsGroupsPage/ListMentorsGroupsPage'),
)
