import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import BigGoalPage from "./pages/BigGoalPage";
import SmallGoalPage from "./pages/SmallGoalPage";
import ShowFlowerPage from "./pages/ShowFlowerPage";
import FillFlowerPage from "./pages/FillFlowerPage";
import StoragePage from "./pages/StoragePage";
import App from "./App";

const routes = [
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "",
        element : <ShowFlowerPage/>,
      },
      {
        path : "fill",
        element : <FillFlowerPage/>,
      },
    ],
  },
  {
    path : "/big",
    element : <BigGoalPage/>,
    children : [
      {
        path : "small",
        element : <SmallGoalPage/>,
      },
    ]
  },
  {
    path : "storage",
    element : <StoragePage/>,
  },
  {
    path : "login",
    element : <LoginPage/>,
  },
  {
    path : "signup",
    element : <SignupPage/>,
  },
];

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
