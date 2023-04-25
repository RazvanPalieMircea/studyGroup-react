import { withLazy } from 'app/hocs/withLazy'

export const ProfilPage = withLazy(() => import('features/Home/components/ProfilPage/ProfilPage'))
