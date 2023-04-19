import { withLazy } from 'app/hocs/withLazy'

export const ResultPage = withLazy(() => import('features/Home/components/ResultPage/ResultPage'))
