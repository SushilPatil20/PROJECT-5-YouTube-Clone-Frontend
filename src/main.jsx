import React, { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import SignUp from "./components/authenticationPages/SignUp.jsx";
import Login from "./components/authenticationPages/Login.jsx";
import VideoListing from "./components/videoListongComponent/VideoListing.jsx";
import ChannelPage from "./components/ChannelPage.jsx";
import VideoManagementDashboard from "./components/videoComponents/VideoManagementDashboard.jsx";
import store from "./store/store.js";
import EditVideoData from "./components/videoComponents/EditVideoData.jsx";
const WatchPage = lazy(() =>
  import("./components/videoListongComponent/Watch.jsx")
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
      {
        path: "/channel-page",
        element: <ChannelPage />,
      },
      {
        path: "/video-management-dashboard",
        element: <VideoManagementDashboard />,
      },
      {
        path: "/video-edit-page/:videoId",
        element: <EditVideoData />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <RouterProvider router={appRouter}></RouterProvider>
  </Provider>
  // </StrictMode>
);
