import type { RouteProps } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import { Start, Login, Register, Quiz, Result } from 'features/Home'

enum UNCONFIRMED_ROUTES {
  START = 'START',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  QUIZ = 'QUIZ',
  RESULT = 'RESULT',
}

const UNCONFIRMED_PATHS: Record<UNCONFIRMED_ROUTES, string> = {
  [UNCONFIRMED_ROUTES.START]: '/start',
  [UNCONFIRMED_ROUTES.LOGIN]: '/login',
  [UNCONFIRMED_ROUTES.REGISTER]: '/register',
  [UNCONFIRMED_ROUTES.QUIZ]: '/quiz',
  [UNCONFIRMED_ROUTES.RESULT]: '/result',
}

export const UNCONFIRMED_ROUTE_CONFIG: RouteProps[] = [
  {
    path: UNCONFIRMED_PATHS.START,
    element: <Start />,
  },

  {
    path: UNCONFIRMED_PATHS.LOGIN,
    element: <Login />,
  },
  {
    path: UNCONFIRMED_PATHS.REGISTER,
    element: <Register />,
  },
  {
    path: UNCONFIRMED_PATHS.QUIZ,
    element: <Quiz />,
  },
  {
    path: UNCONFIRMED_PATHS.RESULT,
    element: <Result />,
  },
  {
    path: '*',
    element: <Navigate to={UNCONFIRMED_PATHS.START} replace />,
  },
]
