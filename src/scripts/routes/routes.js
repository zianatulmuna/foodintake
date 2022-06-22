import AboutUs from '../views/pages/about-us';
import Foodish from '../views/pages/foodish';
import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Bookmark from '../views/pages/bookmark';

const routes = {
  '/': Home,
  '/home': Home,
  '/about-us': AboutUs,
  '/foodish': Foodish,
  '/detail/:id': Detail,
  '/bookmark': Bookmark,
};

export default routes;
