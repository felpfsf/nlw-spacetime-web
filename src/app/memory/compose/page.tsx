import { ChevronLeft, ImagePlus } from "lucide-react";

const Compose = () => {
  return (
    <article className="flex max-w-[592px] flex-1 flex-col gap-4">
      <a
        href="/"
        className="flex items-center gap-2 text-sm text-gray-200 underline-offset-2 hover:text-gray-100 hover:underline"
      >
        <ChevronLeft size={16} className="text-gray-200" />
        voltar à Timeline
      </a>
      <form className="flex flex-1 flex-col gap-2">
        <div className="flex gap-4">
          <label
            htmlFor="memory_image"
            tabIndex={0}
            className="flex cursor-pointer items-center gap-2 text-sm text-gray-200"
          >
            <ImagePlus size={14} />
            Anexar mídia
            <input
              type="file"
              name="memory_image"
              id="memory_image"
              className="hidden"
              accept="image/png, image/jpeg, image/jpg"
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
              className="rounded border border-gray-500 bg-gray-700 checked:bg-gray-300"
            />
            Tornar midia pública
          </label>
        </div>
        <textarea
          name="content"
          className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-400 focus:ring-0"
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa
          experiência que você quer lembrar para sempre."
        ></textarea>
      </form>
    </article>
  );
};

export default Compose;
