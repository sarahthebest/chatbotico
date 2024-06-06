import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/register/Register";
import Home from "./components/Home";
import LandingHeader from "./components/landing/landingHeader";
import Dashboard from "./components/dashboard/Dashboard";

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
    element: <Dashboard />,
  },
];

function App() {
  const router = createBrowserRouter(routes);

  return (
    <div className="main-content flex-grow">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
