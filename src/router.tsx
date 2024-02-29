import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./error-page";
import MainLayout from "./layout/MainLayout";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout><App/></MainLayout>,
      errorElement: <ErrorPage />,
    },
  ]);