import AboutUs from '../views/pages/about-us';
import Foodish from '../views/pages/foodish';
import Home from '../views/pages/home';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home,
  '/home': Home,
  '/tentang-kami': AboutUs,
  '/foodish': Foodish,
  '/detail/:id': Detail,
  // '/login': LoginPage,
};

export default routes;
