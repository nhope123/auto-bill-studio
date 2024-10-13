import { useRoutes } from "react-router-dom";
import DashBoard from "./pages/Dashboard/DashBoard";
import Import from "./pages/Import/Import";
import Invoice from "./pages/Invoice/Invoice";

const useCreatedRoutes = () => { 
  
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashBoard />,
    },
    {
      path: '/import',
      element: <Import />
    },
    {
      path: '/invoice',
      element: <Invoice />
    },
  ]);
};

export default useCreatedRoutes;