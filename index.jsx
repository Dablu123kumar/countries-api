import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import Home from "./Components/Home";
import Country from "./Components/Country.jsx";
import Error from "./Components/Error.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Error />,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/:country',
            element:<Country/>
        }
      ]
    },
  ]);
const root = createRoot(document.querySelector(".root"));

root.render(<RouterProvider router={router} />);
