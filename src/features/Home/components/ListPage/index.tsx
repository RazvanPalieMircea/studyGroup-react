import { withLazy } from 'app/hocs/withLazy'

export const ListPage = withLazy(() => import('features/Home/components/ListPage/ListPage'))
