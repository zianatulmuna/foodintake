import AboutUs from '../views/pages/about-us';
import Foodish from '../views/pages/foodish';
import Detail from '../views/pages/detail';
import Home from '../views/pages/home';
import LoginPage from '../views/pages/login';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/tentang-kami': AboutUs,
  '/foodish': Foodish,
  '/login': LoginPage,
};

export default routes;
