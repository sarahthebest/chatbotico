import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import Register from "./components/register/Register";
import SignIn from "./components/signin/SignIn"
import Home from "./components/Home";
import Dashboard from "./components/dashboard/Dashboard";
import { useState, useEffect } from "react";

function App() {
  const [auth, setAuth] = useState({ token: null, user: null });

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (token && user) {
      setAuth({ token, user });
    }
  }, []);

  function ProtectedRoutes({auth}) {
    return auth.token && auth.user ? <Outlet /> : <Navigate to="/" />
  }

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
      element: <ProtectedRoutes auth={auth} />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
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
