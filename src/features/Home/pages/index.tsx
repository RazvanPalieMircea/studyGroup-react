import { withLazy } from 'app/hocs/withLazy'

export const Start = withLazy(() => import('features/Home/pages/Start'))
export const Login = withLazy(() => import('features/Home/pages/Login'))
export const Register = withLazy(() => import('features/Home/pages/Register'))
export const Quiz = withLazy(() => import('features/Home/pages/Quiz'))
export const Result = withLazy(() => import('features/Home/pages/Result'))
export const Home = withLazy(() => import('features/Home/pages/Home'))
export const Profil = withLazy(() => import('features/Home/pages/Profil'))
export const List = withLazy(() => import('features/Home/pages/List'))
export const ListMentorsGroups = withLazy(() => import('features/Home/pages/ListMentorGroup'))
export const Create = withLazy(() => import('features/Home/pages/Create'))
