import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import { Login } from "./Login";
import Register from "./Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <main className="App">
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
