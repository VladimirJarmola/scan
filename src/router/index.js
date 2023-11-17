import Main from '../pages/Main';
import Auth from '../pages/Auth';
import SearchPage from '../pages/SearchPage';
import ResultPage from '../pages/ResultPage';

export const privateRoute = [
    {path: '/auth', component: Auth, exact: true},
    {path: '/search', component: SearchPage, exact: true},
    {path: '/result', component: ResultPage, exact: true},
    {path: '/', component: Main, exact: true},
]

export const publicRoute = [
    {path: '/auth', component: Auth, exact: true},
    {path: '/', component: Main, exact: true},
]