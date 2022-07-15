import { Data } from '../pages/Data';
import { Dashboard } from '../pages/Dashboard';

export const routes = [
  {
    path: '/',
    component: Dashboard,
  },
  {
    path: '/data',
    component: Data,
  }
]