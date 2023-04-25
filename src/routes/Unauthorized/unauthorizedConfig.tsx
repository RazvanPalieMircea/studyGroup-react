import type { RouteProps } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import {
  Start,
  Login,
  Register,
  Quiz,
  Result,
  Home,
  Profil,
  List,
  ListMentorsGroups,
  Create,
  Calendar,
  AddCalendar,
} from 'features/Home'

enum UNCONFIRMED_ROUTES {
  START = 'START',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  QUIZ = 'QUIZ',
  RESULT = 'RESULT',
  HOME = 'HOME',
  PROFIL = 'PROFIL',
  LIST = 'LIST',
  LIST_GROUP_MENTOR = 'LIST_GROUP_MENTOR',
  CREATE = 'CREATE',
  CALENDAR = 'CALENDAR',
  ADD_CALENDAR = 'ADD_CALENDAR',
}

const UNCONFIRMED_PATHS: Record<UNCONFIRMED_ROUTES, string> = {
  [UNCONFIRMED_ROUTES.START]: '/start',
  [UNCONFIRMED_ROUTES.LOGIN]: '/login',
  [UNCONFIRMED_ROUTES.REGISTER]: '/register',
  [UNCONFIRMED_ROUTES.QUIZ]: '/quiz',
  [UNCONFIRMED_ROUTES.RESULT]: '/result',
  [UNCONFIRMED_ROUTES.HOME]: '/home',
  [UNCONFIRMED_ROUTES.PROFIL]: '/profil',
  [UNCONFIRMED_ROUTES.LIST]: '/list-create',
  [UNCONFIRMED_ROUTES.LIST]: '/list-create',
  [UNCONFIRMED_ROUTES.LIST_GROUP_MENTOR]: '/list-mentor-group',
  [UNCONFIRMED_ROUTES.CREATE]: '/create-page',
  [UNCONFIRMED_ROUTES.CALENDAR]: '/calendar',
  [UNCONFIRMED_ROUTES.ADD_CALENDAR]: '/add-calendar',
}

export const UNCONFIRMED_ROUTE_CONFIG: RouteProps[] = [
  {
    path: UNCONFIRMED_PATHS.START,
    element: <Start />,
  },
  {
    path: UNCONFIRMED_PATHS.HOME,
    element: <Home />,
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
    path: UNCONFIRMED_PATHS.PROFIL,
    element: <Profil />,
  },
  {
    path: UNCONFIRMED_PATHS.LIST,
    element: <List />,
  },
  {
    path: UNCONFIRMED_PATHS.LIST_GROUP_MENTOR,
    element: <ListMentorsGroups />,
  },
  {
    path: UNCONFIRMED_PATHS.CREATE,
    element: <Create />,
  },
  {
    path: UNCONFIRMED_PATHS.CALENDAR,
    element: <Calendar />,
  },
  {
    path: UNCONFIRMED_PATHS.ADD_CALENDAR,
    element: <AddCalendar />,
  },
  {
    path: '*',
    element: <Navigate to={UNCONFIRMED_PATHS.START} replace />,
  },
]
