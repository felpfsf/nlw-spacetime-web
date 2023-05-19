import EmptyMemories from "@/components/EmptyMemories";
import { api } from "@/lib/api";
import { cookies } from "next/headers";

export default async function Home() {
  const isAuthenticated = cookies().has("spacetimeToken");
  if (!isAuthenticated) {
    return <EmptyMemories />;
  }

  const token = cookies().get("spacetimeToken")?.value;

  const response = await api.get("/api/memories/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const memories = response.data;
  console.log(response.data)
  console.log(token)

  return <div>{JSON.stringify(memories)}</div>;
}
