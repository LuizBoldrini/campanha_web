"use client"
import Image from "next/image"
import Link from "next/link"

export default function TituloSlogan() {
  return (
    <div className="relative h-[400px] w-full">
      <div
        className="flex flex-col items-center absolute top-0 left-0 w-full h-full pt-4
                "
      >
        <div className="container flex-1 flex flex-col justify-start items-center gap-4 z-50 py-4">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={200}
            height={200}
            className="rounded-lg"
            priority
          />
          <h1 className="flex flex-col items-center">
            <span className="text-4xl font-black">Votação online</span>
          </h1>
          <p className="w-96 text-center text-zinc-450 text-base sm:text-lg font-extralight">
            Realize sua votação de forma segura e rápida!
          </p>
          <Link
            href="/campanha"
            className="
                            bg-green-600 text-white font-semibold text-base md:text-lg
                            py-2 px-4 rounded-md hover:bg-green-700 active:bg-green-800
                        "
          >
            Votar Agora
          </Link>
        </div>
      </div>
    </div>
  )
}
