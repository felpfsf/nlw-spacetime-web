import decode from "jwt-decode";
import { cookies } from "next/headers";

interface User {
  avatarUrl: string;
  name: string;
  sub: string;
}
export const getUser = () => {
  const token = cookies().get("spacetimeToken")?.value;

  if (!token) {
    throw new Error("Não autenticado");
  }

  const user: User = decode(token);

  return user;
};
