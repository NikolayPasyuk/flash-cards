import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { LoginForm } from "../../ components/auth/login-form";
import {
  useLoginMutation,
  useMeQuery,
} from "../../services/auth/auth-endpoints.ts";
import { LoginArgs } from "../../services/auth/types.ts";

export const LoginPage = () => {
  const [login] = useLoginMutation();
  const { data: me, isLoading: meLoading } = useMeQuery();

  useEffect(() => {
    if (!me) return;

    navigate("/");
  }, [me]);

  const navigate = useNavigate();

  if (meLoading) {
    return <div>Loading...</div>;
  }
  const handleLogin = (args: LoginArgs) => {
    return login(args)
      .unwrap()
      .then(() => navigate("/"))
      .catch((err) => toast.error(err.data.message));
  };

  return <LoginForm onSubmit={handleLogin} />;
};
