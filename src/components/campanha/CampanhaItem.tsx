import { axiosCliente } from "@/app/data/contexts/axios"
import ConfirmacaoModalCamp from "@/app/data/contexts/ConfirmacaoModalCamp"
import useLocalStorage from "@/app/data/hooks/useLocalStorage"
import { Campanha } from "@/model/campanha"
import { useEffect, useState } from "react"
import Carregando from "../shared/Carregando"
import Link from "next/link"

export default function CampanhaItem() {
    const [campanhas, setCampanhas] = useState<Campanha['Campanha']>([])
    const [loading, setLoading] = useState(true)
    const { get, set, remove } = useLocalStorage()
    const [showModal, setShowModal] = useState<boolean>(false)
    const [selectedCampanha, setSelectedCampanha] = useState<Campanha['Campanha'][0] | null>(null)

    useEffect(() => {
        if (get('campanha')) {
            remove('campanha')
        }
        if (get('comprovante')) {
            remove('comprovante')
        }
    }, [get, remove])

    useEffect(() => {
        async function getCampanhas() {
            try {
                const response = await axiosCliente.get('/campanha', {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                setCampanhas(response.data.Campanha || [])
            } catch (error) {
                console.error('Erro ao buscar Campanha:', error)
            } finally {
                setLoading(false)
            }
        }
        getCampanhas()
    }, [])

    function handleClick(campanha: Campanha['Campanha'][0]) {
        if (campanha.status === 'Fechado') {
            setSelectedCampanha(campanha)
            setShowModal(true)
        } else {
            entrar(campanha)
        }
    }

    async function entrar(campanha: Campanha['Campanha'][0]) {
        set('campanha', JSON.stringify(campanha))
    }

    if (loading) {
        return <Carregando />
    }

    return (
        <>
            <div className="flex flex-col gap-4">
                {campanhas.map((campanha) => (
                    <div
                        key={campanha.ideleicao}
                        className="rounded-xl overflow-hidden bg-zinc-800 cursor-pointer select-none border border-transparent hover:bg-zinc-700/90 active:border-zinc-500"
                        onClick={() => handleClick(campanha)}
                    >
                        <Link href={campanha.status === 'Aberta' ? "/votar" : "#"}>
                            <div className="flex flex-col p-3 gap-2">
                                    <div className="flex flex-col items-center md:items-end">
                                        <span className={`text-sm font-bold ${campanha.status === 'Aberta' ? 'text-green-500' : 'text-red-500'}`}>
                                            <span className={`inline-block w-1.5 h-1.5 mr-1 rounded-full ${campanha.status === 'Aberta' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                            {campanha.status}
                                        </span>
                                    </div>
                                <div className="flex flex-grow justify-items-end">
                                    <span className="text-xl font-black">Nome da campanha:</span>
                                    <span className="text-lg text-zinc-200 py-0.5 px-2">{campanha.eleicao}</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-lg font-bold">Sobre</span>
                                    <span className="text-sm text-wrap max-w-96 font-bold text-zinc-200">{campanha.detalhes}</span>
                                </div>
                                <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-5">
                                    <div className="flex flex-col gap-1 items-center md:items-start">
                                        <span className="text-xs text-zinc-400 flex-1">Hora de inicio: {campanha.horaini?.toString() || 'N/a'}</span>
                                        <span className="text-xs text-zinc-400 flex-1">Data de inicio: {campanha.dataini?.toString() || 'N/a'}</span>
                                    </div>
                                    <div className="flex flex-col gap-1 items-center md:items-end">
                                        <span className="text-xs text-zinc-400 flex-1">Hora de término: {campanha.horafinal?.toString() || 'N/a'}</span>
                                        <span className="text-xs text-zinc-400 flex-1">Data de término: {campanha.datafinal?.toString() || 'N/a'}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {showModal && selectedCampanha && (
                <ConfirmacaoModalCamp
                    campanha={selectedCampanha}
                    onConfirm={() => setShowModal(false)}
                    onCancel={() => setShowModal(false)}
                />
            )}
        </>
    )
}
