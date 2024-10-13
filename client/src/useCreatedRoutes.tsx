import { createBrowserRouter } from "react-router-dom";
import DashBoard from "./pages/Dashboard/DashBoard";
import Import from "./pages/Import/Import";

const useCreatedRoutes = () => { 
  
  return createBrowserRouter([
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

  ]);
};

export default useCreatedRoutes;