import Freebies from '../Freebies';
import About from '../About/About';
import Help from '../Help';
import TimeBank from '../TimeBank';
import Header from '../Header';
import Login from '../Login';
export const routerArray = [
  { component: Header, path: '/', exact: true },
  { component: Freebies, path: '/freebies', exact: false },
  { component: About, path: '/about', exact: false },
  { component: TimeBank, path: '/timebank', exact: false },
  { component: Help, path: '/help', exact: false },
  { component: Login, path: '/login', exact: false } //for now login is her but later need to check the auth
].filter(x => x);
