'use client'
import { IconDashboard } from '@tabler/icons-react'
import Link from 'next/link'

export default function TituloSlogan() {
    return (
        <div className="relative h-[700px]">
            <div
                className="
                    flex flex-col items-center
                    absolute top-0 left-0 w-full h-full
                    bg-black/80 md:bg-transparent md:bg-gradient-to-r from-black/30 via-black/90 to-black/30
                "
            >
                <div className="container flex-1 flex flex-col justify-center items-center gap-5 z-50">
                    <IconDashboard size={200} stroke={0.4} className="text-zinc-500"/>
                    <h1 className="flex flex-col items-center">
                        <span className="text-gradient text-5xl sm:text-5xl md:text-7xl lg:text-7xl font-black pb-1">
                            Votação online
                        </span>
                    </h1>
                    <p className="w-96 text-center text-zinc-450 text-base sm:text-lg font-extralight">
                        Realize sua votação de forma segura e rápida!
                    </p>
                    <Link
                        href="/campanha"
                        className="
                            bg-gradient-to-r from-green-500 to-green-600
                            text-white font-semibold text-base md:text-lg
                            py-2 px-4 rounded-md hover:from-green-600 hover:to-green-700
                        "
                    >
                        Votar Agora
                    </Link>
                </div>
            </div>
        </div>
    )
}
