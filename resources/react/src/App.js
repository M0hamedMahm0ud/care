import "./App.css";
import SignUp from  "./Pages/SignUp";
import Root from "./Components/Root";
import ErrorPage from "./Components/ErrorPage";
import HomePage from "./Pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Activities from "./Pages/Activities";
import Login from "./Pages/Login";
import Achevment from "./Pages/Achevment";
import Sports from "./Pages/Activites/Sports"
import Cultural from "./Pages/Activites/Cultural";
import Family from "./Pages/Activites/Family";
import Rangers from "./Pages/Activites/Rangers";
import Practical from "./Pages/Activites/Practical";
import ActivitySign from "./Pages/ActivitySign";
import AchOne from "./Pages/Achevment/AchOne";
import MainAch from "./Pages/Achevment/MainAch";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/activities", element: <Activities /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/achevment", element: <Achevment /> },
        { path: "/sports", element: <Sports/> },
        { path: "/cultural", element: <Cultural/> },
        { path: "/family", element: <Family/> },
        { path: "/rangers", element: <Rangers/> },
        { path: "/practical", element: <Practical/> },
        { path: "/activitysign", element: <ActivitySign/> },
        { path: "/achone", element: <AchOne/> },
        { path: "/mainach", element: <MainAch/> },

      ],

    },
  ]);
  return <RouterProvider router={router} />;

}

export default App;
