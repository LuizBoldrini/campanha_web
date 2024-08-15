'use client'
import Titulo from "../shared/Titulo"
import ChapaItem from "./ChapaItems"

export default function NossasChapas() {
    return (
        <div className="flex flex-col gap-5 px-40 pt-4 bg-zinc-800 rounded-lg">
            <Titulo 
                tag="Candidatos disponíveis"
                principal="Selecione o seu candidato de preferência"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-2">
                <ChapaItem />
            </div>

        </div>
    )
}