import { withLazy } from 'app/hocs/withLazy'

export const RegisterPage = withLazy(
  () => import('features/Home/components/RegisterPage/RegisterPage'),
)
