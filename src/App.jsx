import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import Register from "./components/account/Register";
import * as ReactDOM from "react-dom";
import ThemeControl from "./components/common/ThemeControl";
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
    <RouterProvider router={router}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </RouterProvider>
  );
}

export default App;
