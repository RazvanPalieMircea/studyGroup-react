import { withLazy } from 'app/hocs/withLazy'

export const Start = withLazy(() => import('features/Home/pages/Start'))
export const Login = withLazy(() => import('features/Home/pages/Login'))
export const Register = withLazy(() => import('features/Home/pages/Register'))
