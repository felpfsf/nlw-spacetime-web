"use client";
import { User } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "../assets/logo.svg";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="relative flex flex-col overflow-hidden border-r border-white/10  bg-[url(../assets/stars.svg)] bg-cover  px-[120px] py-16">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-70 blur-full" />
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        <div className="flex flex-1 flex-col items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
              <User size={20} className="text-gray-500" />
            </span>
            <p className="w-[140px] text-sm leading-snug text-gray-100">
              <Link href={"/"} className="underline underline-offset-2">Crie sua conta</Link> e salve suas memórias
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <Image src={LogoImg} alt={""} />
            <div className="max-w-[420px] space-y-1">
              <h1 className="text-[40px] font-bold leading-tight text-gray-50">
                Sua cápsula do tempo
              </h1>
              <p className="text-lg text-gray-100">
                Colecione momentos marcantes da sua jornada e compartilhe (se
                quiser) com o mundo!
              </p>
            </div>
            <Link
              href={"/"}
              className="self-start rounded-full bg-green-500 px-5 py-3 font-alt font-bold leading-none text-black transition-colors duration-200 ease-in-out hover:bg-green-700"
            >
              CADASTRAR LEMBRANÇA
            </Link>
          </div>
          <p className="text-sm text-gray-200">
            Feito com 💜 no NLW da Rocketseat
          </p>
        </div>
      </div>
      <div className="flex flex-col bg-[url(../assets/stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="max-w-[360px] text-center leading-relaxed text-gray-100">
            Você ainda não registrou nenhuma lembrança, comece a{" "}
            <Link href={"/"} className="underline underline-offset-2">
              criar agora!
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
