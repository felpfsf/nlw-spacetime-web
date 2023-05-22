import EmptyMemories from "@/components/EmptyMemories";
import MemoryCard, { MemoryProps } from "@/components/MemoryCard";
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

  const memories: MemoryProps[] = response.data;
  console.log(memories);

  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => (
        <MemoryCard key={memory.id} {...memory} />
      ))}
    </div>
  );
}
