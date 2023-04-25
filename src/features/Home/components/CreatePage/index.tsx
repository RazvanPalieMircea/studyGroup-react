import { withLazy } from 'app/hocs/withLazy'

export const CreatePage = withLazy(() => import('features/Home/components/CreatePage/CreatePage'))
