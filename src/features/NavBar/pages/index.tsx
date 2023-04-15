import { withLazy } from 'app/hocs/withLazy'

export const Nav = withLazy(() => import('features/NavBar/pages/NavBar'))
