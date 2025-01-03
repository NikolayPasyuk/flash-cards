import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { ControlledTextField } from "../../ui/controlled";
import { Typography } from "../../ui/typography";

import s from "./forgot-password.module.scss";

const schema = z.object({
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .min(5, "Email must be at least 5 characters"),
});

type Form = z.infer<typeof schema>;
type ForgotPasswordPropsType = {
  onSubmit: (email: string) => void;
};

export const ForgotPassword = ({ onSubmit }: ForgotPasswordPropsType) => {
  const { control, handleSubmit } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const handleFormSubmit = handleSubmit((data) => onSubmit(data.email));

  return (
    <Card className={s.card}>
      <Typography as={"h1"} variant={"large"}>
        Forgot your password?
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <ControlledTextField control={control} name={"email"} label={"Email"} />
        <Typography
          className={`${s.description} ${s.emailInputPrompt}`}
          variant={"body2"}
        >
          {
            "Enter your email address and we will send you further \n instructions"
          }
        </Typography>
        <Button className={s.button} type={"submit"} fullWidth>
          Send Instructions
        </Button>
      </form>
      <Typography className={s.description} variant={"body2"}>
        Did you remember your password?
      </Typography>
      <Typography variant="link1" as={Link} to="login" className={s.link}>
        Try logging in
      </Typography>
    </Card>
  );
};
