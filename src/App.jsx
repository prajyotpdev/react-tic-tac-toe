import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import Home from "./pages/home/homePage";
import Play from "./pages/playground/playGround";
import Body from "./pages/home/hero";
import store from "./backend/redux-store/store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/play",
          element: <Play />,
        },
      ],
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
} 

export default App;
