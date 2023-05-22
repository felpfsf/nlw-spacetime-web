import ComposeMemoryForm from "@/components/ComposeMemoryForm";
import { ChevronLeft } from "lucide-react";

const Compose = () => {
  return (
    <article className="flex flex-1 flex-col gap-4 p-16">
      <a
        href="/"
        className="flex items-center gap-2 text-sm text-gray-200 underline-offset-2 hover:text-gray-100 hover:underline"
      >
        <ChevronLeft size={16} className="text-gray-200" />
        voltar à Timeline
      </a>
      <ComposeMemoryForm />
    </article>
  );
};

export default Compose;
