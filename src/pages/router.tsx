import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

import { Layout } from "../ components/layout/layout.tsx";
import { useMeQuery } from "../services/auth/auth-endpoints.ts";

import { CheckEmailPage } from "./check-email.page/check-email.page.tsx";
import Error404Page from "./error404.page/error404.page.tsx";
import { LearnPage } from "./learn-page/learn-page.tsx";
import { LoginPage } from "./login.page";
import { NewPasswordPage } from "./new-password.page/new-password.page.tsx";
import { PasswordRecoveryPage } from "./password-recovery.page";
import { ProfilePage } from "./profile.page";
import { SignUpPage } from "./sign-up.page";

export const PATH = {
  HOME: "/",
  LEARN: "learn/:deckId",
  PROFILE: "profile",
  LOGIN: "login",
  REGISTER: "sign-up",
  RECOVERY_PASSWORD: "recover-password",
  CHECK_EMAIL: "check-email/:email?",
  CREATE_NEW_PASSWORD: "new-password/:token",
} as const;

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Layout />,
    errorElement: <Error404Page />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: PATH.LEARN,
            element: <LearnPage />,
          },
          {
            path: PATH.PROFILE,
            element: <ProfilePage />,
          },
        ],
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
      {
        path: PATH.CREATE_NEW_PASSWORD,
        element: <NewPasswordPage />,
      },
    ],
  },
]);

function ProtectedRoutes() {
  const { data, isLoading } = useMeQuery();

  if (isLoading) return <div>Loading...</div>;

  return data ? <Outlet /> : <Navigate to="/login" />;
}
