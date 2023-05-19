"use client";
import { api } from "@/lib/api";
import Cookie from "js-cookie";
import { ImagePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const ComposeMemoryForm = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const router = useRouter();
  const onFileSelected = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;
    const previewUrl = URL.createObjectURL(files[0]);
    setPreview(previewUrl);
  };

  const onSubmitMemory = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userToken = Cookie.get("spacetimeToken");
    const formData = new FormData(e.currentTarget);
    const fileToUpload = formData.get("coverUrl");

    let coverUrl = "";

    if (fileToUpload instanceof File) {
      const uploadFormData = new FormData();
      uploadFormData.set("file", fileToUpload);
      const uploadResponse = await api.post("/api/upload", uploadFormData);
      coverUrl = uploadResponse.data;
    }

    await api.post(
      "/api/memories/compose",
      {
        content: formData.get("content") as string,
        isPublic: formData.get("isPublic") === "true",
        coverUrl,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    router.push("/");
  };

  return (
    <form className="flex flex-1 flex-col gap-2" onSubmit={onSubmitMemory}>
      <div className="flex gap-4">
        <label
          htmlFor="coverUrl"
          tabIndex={0}
          className="flex cursor-pointer items-center gap-2 text-sm text-gray-200"
        >
          <ImagePlus size={14} />
          Anexar mídia
          <input
            type="file"
            name="coverUrl"
            id="coverUrl"
            className="invisible h-0 w-0"
            accept="image/png, image/jpeg, image/jpg"
            onChange={onFileSelected}
          />
        </label>
        <label
          htmlFor="isPublic"
          className="flex cursor-pointer items-center gap-2 text-sm text-gray-200"
        >
          <input
            type="checkbox"
            name="isPublic"
            id="isPublic"
            value="true"
            className="rounded border border-gray-500 bg-gray-700 checked:bg-gray-300"
          />
          Tornar memória pública
        </label>
      </div>
      {preview && (
        <img
          src={preview}
          alt=""
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
      <textarea
        name="content"
        className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-400 focus:ring-0"
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
      />
      <button className="self-end rounded-full bg-green-500 px-5 py-3 font-alt font-bold leading-none text-black transition-colors duration-200 ease-in-out hover:bg-green-700">
        Salvar
      </button>
    </form>
  );
};

export default ComposeMemoryForm;
