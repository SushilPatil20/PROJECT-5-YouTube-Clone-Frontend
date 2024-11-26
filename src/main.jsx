import React, { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import SignUp from "./components/authenticationPages/SignUp.jsx";
import Login from "./components/authenticationPages/Login.jsx";
import VideoListing from "./components/videoListongComponent/VideoListing.jsx";
import ChannelPage from "./components/channelComponents/ChannelPage.jsx";
import VideoManagementDashboard from "./components/videoComponents/VideoManagementDashboard.jsx";
import store from "./redux/store.js";
import EditVideoData from "./components/videoComponents/EditVideoData.jsx";
import ChannelManagement from "./components/channelComponents/ChannelManagement.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import CustomErrorPage from "./components/CustomErrorPage.jsx";
const WatchPage = lazy(() =>
  import("./components/videoListongComponent/Watch.jsx")
);
import AuthGuard from "./middlewares/AuthGuard.jsx";

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
        path: "/channel/:channelHandle",
        element: <ChannelPage />,
      },
      {
        path: "channel/:channelId/editing/",
        element: (
          <AuthGuard>
            <ChannelManagement />
          </AuthGuard>
        ),
      },
      {
        path: "/video-management-dashboard",
        element: (
          <AuthGuard>
            <VideoManagementDashboard />
          </AuthGuard>
        ),
      },
      {
        path: "/video/:videoId/editing",
        element: (
          <AuthGuard>
            <EditVideoData />
          </AuthGuard>
        ),
      },
    ],
    errorElement: <CustomErrorPage />,
  },
]);

let root;

if (!root) {
  root = createRoot(document.getElementById("root"));
}

root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
  </StrictMode>
);
