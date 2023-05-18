import Image from "next/image";
import Link from "next/link";
import LogoImg from "../../assets/logo.svg";

const Hero = () => {
  return (
    <div className="flex flex-col gap-5">
      <Image src={LogoImg} alt={""} />
      <div className="max-w-[420px] space-y-1">
        <h1 className="text-[40px] font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg text-gray-100">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <Link
        href={"/"}
        className="self-start rounded-full bg-green-500 px-5 py-3 font-alt font-bold leading-none text-black transition-colors duration-200 ease-in-out hover:bg-green-700"
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  );
};

export default Hero;
