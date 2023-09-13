import { TextFieldInput, Button } from "@radix-ui/themes";
import { useSignInMutation } from "../../../api/auth/auth.queries";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signInMutation = useSignInMutation();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await signInMutation
      .mutateAsync({ username, password })
      .then(_ => navigate("/home"))
      .catch();
  };

  return (
    <div>
      <TextFieldInput
        placeholder="username"
        onChange={event => setUsername(event.target.value)}
      />
      <TextFieldInput
        placeholder="password"
        type="password"
        onChange={event => setPassword(event.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};
