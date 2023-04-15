import type { RouteProps } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import { Start, Login, Register } from 'features/Home'

enum UNCONFIRMED_ROUTES {
  START = 'START',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
}

const UNCONFIRMED_PATHS: Record<UNCONFIRMED_ROUTES, string> = {
  [UNCONFIRMED_ROUTES.START]: '/start',
  [UNCONFIRMED_ROUTES.LOGIN]: '/login',
  [UNCONFIRMED_ROUTES.REGISTER]: '/register',
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
    path: '*',
    element: <Navigate to={UNCONFIRMED_PATHS.START} replace />,
  },
]
