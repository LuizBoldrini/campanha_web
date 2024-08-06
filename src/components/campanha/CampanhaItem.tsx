'use client'
import { axiosCliente } from "@/app/data/contexts/axios";
import useLocalStorage from "@/app/data/hooks/useLocalStorage";
import { Campanha } from "@/model/campanha";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CampanhaItem() {
    const [campanhas, setCampanhas ] = useState<Campanha | null>(null);
    const {get, set} = useLocalStorage()
    
    const getCampanha = async () => {
        await axiosCliente.get('/campanha').then((res) => setCampanhas(res.data))
    }

    async function entrar(campanha: Campanha) {
        set('campanha', campanha)
    }

    useEffect(() => {
        getCampanha()
    }, [])
    
    return (
        <div
            className=" rounded-xl overflow-hidden bg-zinc-800 cursor-pointer select-none hover:bg-zinc-700/90"
        >
            <Link href="/votar" onClick={() => entrar({token: campanhas?.token})}>
            
                <div className="flex flex-col p-4 gap-2">
                    <div className="flex flex-grow justify-items-end">
                        <span className="text-xl font-black">Nome da campanha: </span>
                        <span className="text-lg text-zinc-200 py-0.5 px-2">{campanhas?.eleicao}</span>

                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-lg font-bold">Sobre</span>
                        <span className="text-sm text-wrap max-w-96 font-bold text-zinc-200">{campanhas?.detalhes}</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-5">
                        <div className="flex flex-col gap-1 items-center md:items-start">
                            <span className="text-xs text-zinc-400 flex-1">Hora de inicio: {campanhas?.horaini?.toString()}</span>
                            <span className="text-xs text-zinc-400 flex-1">Data de inicio: {campanhas?.dataini?.toString()}</span>

                        </div>
                        <div className="flex flex-col gap-1 items-center md:items-end">
                            <span className="text-xs text-zinc-400 flex-1">Hora de término: {campanhas?.horafinal?.toString()}</span>
                            <span className="text-xs text-zinc-400 flex-1">Data de término: {campanhas?.datafinal?.toString()}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}