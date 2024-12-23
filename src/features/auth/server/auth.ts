import { LoginFormSchema, RegisterFormSchema } from "../schema/definitions";

interface AuthLogin {
  username: string;
  email: string;
  password: string;
}

export async function authLogin({ username, email, password }: AuthLogin) {
  const validationResult = LoginFormSchema.safeParse({
    username,
    email,
    password,
  });

  if (!validationResult.success) {
    return {
      errors: validationResult.error?.flatten().fieldErrors,
    };
  }

  const response = await fetch("https://techtest.youapp.ai/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const data = await response.json();
  localStorage.setItem("access_token", data.access_token);
  return data;
}

interface AuthRegister {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export async function authRegister({
  email,
  username,
  password,
  confirmPassword,
}: AuthRegister) {
  const validationResult = RegisterFormSchema.safeParse({
    email,
    username,
    password,
    confirmPassword,
  });

  if (!validationResult.success) {
    return {
      errors: validationResult.error?.flatten().fieldErrors,
    };
  }

  const response = await fetch("https://techtest.youapp.ai/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      username,
      password,
    }),
  });

  const data = await response.json();
  console.log(data);
  return data;
}
