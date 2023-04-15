import { withLazy } from 'app/hocs/withLazy'

export const LoginPage = withLazy(() => import('features/Home/components/LoginPage/LoginPage'))
