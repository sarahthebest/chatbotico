import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Register from "./components/register/Register";
import Home from "./components/Home";
import Dashboard from "./components/dashboard/Dashboard";
import { useState, useEffect } from "react";

function App() {
  const [auth, setAuth] = useState({ token: null, user: null });

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const user = JSON.parse(localStorage.getItem('user'));

    if (token && user) {
      setAuth({ token, user });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setAuth({ token: null, user: null });
  }

  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: auth ? <Dashboard /> : <Navigate to='/' />
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
