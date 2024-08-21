import Register from "./components/register/Register";
import SignIn from "./components/signin/SignIn"
import Home from "./components/Home";
import Profile from "./components/profile/Profile"
import Dashboard from "./components/dashboard/Dashboard";
import ProtectedRoutes from "./components/common/ProtectedRoutes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const routes = [
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      element: <ProtectedRoutes />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <div className="main-content flex-grow">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
