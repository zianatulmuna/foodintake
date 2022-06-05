import AboutUs from '../views/pages/about-us';
import Foodish from '../views/pages/foodish';
import Home from '../views/pages/home';
import LoginPage from '../views/pages/login';

const routes = {
  '/': Home,
  '/home': Home,
  '/tentang-kami': AboutUs,
  '/foodish': Foodish,
  '/login': LoginPage,
};

export default routes;
