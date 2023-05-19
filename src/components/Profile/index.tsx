import { getUser } from "@/lib/auth";
import Image from "next/image";

const Profile = () => {
  const { avatarUrl, name } = getUser();
  return (
    <div className="flex items-center gap-3">
      <Image
        src={avatarUrl}
        alt={`Avatar de ${name}`}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
      />
      <p className="max-w-[140px] text-sm leading-snug text-gray-100">
        Bem vindo, {name}
        <a
          href="/api/auth/logout"
          className="block underline underline-offset-2 hover:text-red-300 transition-colors duration-200 ease-in-out"
        >
          sair?
        </a>
      </p>
    </div>
  );
};

export default Profile;
