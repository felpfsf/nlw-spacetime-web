import Link from "next/link";
import { User } from "lucide-react";

const SignIn = () => {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
        <User size={20} className="text-gray-500" />
      </span>
      <p className="max-w-[140px] text-sm leading-snug text-gray-100">
        <Link
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`}
          className="underline underline-offset-2"
        >
          Crie sua conta com o github
        </Link>{" "}
        e salve suas memórias
      </p>
    </div>
  );
};

export default SignIn;
