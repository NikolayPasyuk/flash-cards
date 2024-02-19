import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { ControlledCheckbox, ControlledTextField } from "../../ui/controlled";
import { Typography } from "../../ui/typography";

import s from "./login-form.module.scss";

const schema = z.object({
  email: z.string().trim().email("Invalid email address"),
  password: z.string().trim().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean(),
});

type FormType = z.infer<typeof schema>;
type Props = {
  onSubmit: (data: FormType) => void;
};
export const LoginForm = (props: Props) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const handleFormSubmitted = handleSubmit(props.onSubmit);

  return (
    <>
      <Card className={s.card}>
        <Typography variant="large" as={"h1"}>
          Sign in
        </Typography>
        <form onSubmit={handleFormSubmitted}>
          <ControlledTextField
            label="Email"
            name={"email"}
            control={control}
            containerProps={{ className: s.textField }}
          />
          <ControlledTextField
            label="Password"
            type={"password"}
            name={"password"}
            control={control}
            containerProps={{ className: s.textField }}
          />
          <ControlledCheckbox
            label={"Remember me"}
            name={"rememberMe"}
            control={control}
            className={s.checkbox}
            position={"left"}
          />

          <Typography variant="body2" className={s.forgotPassword}>
            Forgot password?
          </Typography>

          <Button type={"submit"} fullWidth>
            Submit
          </Button>
        </form>
        <Typography variant="body2" className={s.noAccount}>
          Don't have an account?
        </Typography>
        <Typography variant="link1" className={s.signUpLink}>
          Sign Up
        </Typography>
      </Card>
    </>
  );
};
