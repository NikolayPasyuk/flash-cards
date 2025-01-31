import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { NewPassword } from "../../ components/auth/new-password";
import { useNewPasswordMutation } from "../../services/auth/auth-endpoints.ts";

export const NewPasswordPage = () => {
  const { token } = useParams();
  const [createNewPassword] = useNewPasswordMutation();
  const navigate = useNavigate();
  const createNewPasswordHandle = (password: string) => {
    if (token) {
      return createNewPassword({ token, password })
        .unwrap()
        .then(() => {
          toast.success("Password successfully changed");
          navigate("/login");
        })
        .catch(() => toast.error("error"));
    }
  };

  return <NewPassword onSubmit={createNewPasswordHandle} />;
};
