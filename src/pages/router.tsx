import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

import { Layout } from "../ components/layout/layout.tsx";
import { useMeQuery } from "../services/auth/auth-endpoints.ts";

import { CheckEmailPage } from "./check-email.page/check-email.page.tsx";
import Error404Page from "./error404.page/error404.page.tsx";
import { LoginPage } from "./login.page";
import { PasswordRecoveryPage } from "./password-recovery.page";
import { SignUpPage } from "./sign-up.page";

export const PATH = {
  HOME: "/",
  LOGIN: "login",
  REGISTER: "sign-up",
  RECOVERY_PASSWORD: "recover-password",
  CHECK_EMAIL: "check-email/:email?",
} as const;

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Layout />,
    errorElement: <Error404Page />,
    children: [
      {
        element: <ProtectedRoutes />,
      },
      {
        path: PATH.LOGIN,
        element: <LoginPage />,
      },
      {
        path: PATH.REGISTER,
        element: <SignUpPage />,
      },
      {
        path: PATH.RECOVERY_PASSWORD,
        element: <PasswordRecoveryPage />,
      },
      {
        path: PATH.CHECK_EMAIL,
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
