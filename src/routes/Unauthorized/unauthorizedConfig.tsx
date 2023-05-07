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
  CreateMentor,
  CreateGroup,
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
  CREATE_GROUP = 'CREATE_GROUP',
  CREATE_MENTOR = 'CREATE_MENTOR',
  LIST_GROUP = 'LIST_GROUP',
  LIST_MENTOR = 'LIST_MENTOR',
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
  [UNCONFIRMED_ROUTES.PROFIL]: '/profil/:id',
  [UNCONFIRMED_ROUTES.LIST]: '/list-create',
  [UNCONFIRMED_ROUTES.LIST_GROUP]: '/list/group',
  [UNCONFIRMED_ROUTES.LIST_MENTOR]: '/list/mentor',
  [UNCONFIRMED_ROUTES.CREATE_GROUP]: '/create/group',
  [UNCONFIRMED_ROUTES.CREATE_MENTOR]: '/create/mentor',
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
    path: UNCONFIRMED_PATHS.LIST_GROUP,
    element: <ListMentorsGroups />,
  },
  {
    path: UNCONFIRMED_PATHS.LIST_MENTOR,
    element: <ListMentorsGroups />,
  },
  {
    path: UNCONFIRMED_PATHS.CREATE_GROUP,
    element: <CreateGroup />,
  },
  {
    path: UNCONFIRMED_PATHS.CREATE_MENTOR,
    element: <CreateMentor />,
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
