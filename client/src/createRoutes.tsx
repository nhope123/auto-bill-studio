import DashBoard from "./pages/Dashboard/DashBoard";
import Import from "./pages/Import/Import";

const createRoutes = () => [
  {
    path: '/',
    element: <DashBoard />
  },
  {
    path: '/import',
    element: <Import />
  },
  {
    path: '/invoice',
  },
  
]

export default createRoutes;