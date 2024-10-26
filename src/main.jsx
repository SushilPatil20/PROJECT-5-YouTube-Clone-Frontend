import React, { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./components/authenticationPages/SignUp.jsx";
import Login from "./components/authenticationPages/Login.jsx";
import VideoListing from "./components/videoListongComponent/VideoListing.jsx";

const WatchPage = lazy(() =>
  import("./components/videoListongComponent/Watch.jsx")
);

// import WatchPage from "./components/videoListongComponent/Watch.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App className="font-roboto" />,
    children: [
      {
        path: "/",
        element: <VideoListing />,
      },
      {
        path: "/watch/:videoId",
        element: (
          <React.Suspense fallback={<p>Loading...</p>}>
            <WatchPage />,
          </React.Suspense>
        ),
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
