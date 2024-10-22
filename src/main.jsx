import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./components/authenticationPages/SignUp.jsx";
import Login from "./components/authenticationPages/Login.jsx";
import VideoListing from "./components/videoListongComponent/VideoListing.jsx";
import WatchPage from "./components/videoListongComponent/Watch.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App clasName="font-roboto" />,
    children: [
      {
        path: "/",
        element: <VideoListing />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>
);
