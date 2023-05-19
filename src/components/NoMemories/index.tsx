import Link from "next/link";

const NoMemories = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="max-w-[360px] text-center leading-relaxed text-gray-100">
        Você ainda não registrou nenhuma lembrança, comece a{" "}
        <Link href={"/memory/compose"} className="underline underline-offset-2">
          criar agora!
        </Link>
      </p>
    </div>
  );
};

export default NoMemories;
