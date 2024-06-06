import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/register/Register";
import Home from "./components/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
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
