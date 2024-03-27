import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../src/index.css";
import Signup from "./routes/Signup.jsx";
import Signin from "./routes/Signin.jsx";
import Profile from "./routes/Profile.jsx";
import Home from "./routes/Home.jsx";
import { Provider } from "react-redux";
import VotingStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile", element: <Profile /> },
      { path: "/signin", element: <Signin /> },
    ],
  },
  { path: "/signup", element: <Signup /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={VotingStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
