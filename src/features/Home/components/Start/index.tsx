import { withLazy } from 'app/hocs/withLazy'

export const StartPage = withLazy(() => import('features/Home/components/Start/StartPage'))
