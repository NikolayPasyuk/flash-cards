import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

import { Layout } from "../ components/layout/layout.tsx";
import { useMeQuery } from "../services/auth/auth-endpoints.ts";

import { CheckEmailPage } from "./check-email.page/check-email.page.tsx";
import Error404Page from "./error404.page/error404.page.tsx";

export const PATH = {
  HOME: "/",
  CHECK_EMAIL: "check-email/:email?",
} as const;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error404Page />,
    children: [
      {
        element: <ProtectedRoutes />,
      },
      {
        path: "check-email/:email?",
        element: <CheckEmailPage />,
      },
    ],
  },
]);

function ProtectedRoutes() {
  const { data, isLoading } = useMeQuery();

  if (isLoading) return <div>Loading...</div>;

  return data ? <Outlet /> : <Navigate to="/login" />;
}
