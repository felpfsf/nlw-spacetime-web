import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
dayjs.locale(ptBr);

export interface MemoryProps {
  id: string;
  coverUrl: string;
  excerpt: string;
  createdAt: string;
}

const MemoryCard = ({ coverUrl, createdAt, excerpt, id }: MemoryProps) => {
  const formatDate = (date: string) => {
    const formattedDate = dayjs(date).format("D[ de ]MMMM[, ]YYYY");
    return formattedDate;
  };
  return (
    <article className="space-y-4">
      <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
        {formatDate(createdAt)}
      </time>
      <Image
        src={coverUrl}
        alt="Imagem de capa da memória"
        width={592}
        height={280}
        className="aspect-video w-full rounded-lg object-cover"
      />
      <p className="text-lg leading-relaxed text-gray-100">{excerpt}</p>
      <Link
        href={`/memory/${id}`}
        className="flex items-center gap-2 text-sm text-gray-200 underline-offset-2 hover:text-gray-100 hover:underline"
      >
        Leia mais <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
};

export default MemoryCard;

// dayjs(createdAt).format('D[ de ]MMMM[, ]YYYY');
/**
 * const formatDate = (date: string) => {
 * const formattedDate = dayjs(date).format('D[ de ]MMMM[, ]YYYY')
 * return formattedDate
 * }
 */
