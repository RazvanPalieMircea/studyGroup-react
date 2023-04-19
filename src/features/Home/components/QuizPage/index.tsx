import { withLazy } from 'app/hocs/withLazy'

export const QuizPage = withLazy(() => import('features/Home/components/QuizPage/QuizPage'))
