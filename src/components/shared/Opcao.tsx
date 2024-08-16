'use client'
import { useState } from "react"
import { Chapa } from "@/model/chapa"
import { IconPhoto } from "@tabler/icons-react"

interface OpcaoProps {
    chapa: {
        idchapa?: number
        codigo?: number
        nome?: string
        candidato?: string
        candidatodesc?: string
        chapadesc?: string
        foto?: string
    }
    onClick: (chapa: Chapa['Chapa']) => void
    selecionado?: boolean
}

export default function Opcao(props: OpcaoProps) {
    const [imgError, setImgError] = useState(false)

    return (
        <div
            className={`
                flex flex-col items-center cursor-pointer select-none rounded-lg border w-[280px]
                ${props.selecionado ? 'border-green-400' : 'border-zinc-700'} overflow-hidden
            `}
            onClick={() => props.onClick(props.chapa)}
        >
            <span className=" flex flex-col p-2">{props.chapa.nome}</span>
            {imgError ? (
                <div className="flex items-center justify-center w-full h-[220px] bg-zinc-900 text-zinc-500">
                    <IconPhoto size={150} />
                </div>
            ) : (
                <img
                    src={`data:image/jpeg;base64,${props.chapa.foto}`}
                    alt={props.chapa.nome}
                    style={{ width: '240px', height: '220px', objectFit: 'cover' }}
                    onError={() => setImgError(true)}
                />
            )}
            <div
                className={`
                    py-4 w-full h-full text-center text-xs
                    ${props.selecionado ? 'text-black bg-green-400 font-semibold' : 'text-zinc-400 font-light bg-zinc-900 '}
                `}
            >
                <div className="flex flex-col items-center">
                    <span className=" flex flex-col pb-2">{props.chapa.candidato}</span>
                    <span>{props.chapa.candidatodesc}</span>
                    {props.chapa.chapadesc && <span>{props.chapa.chapadesc}</span>}
                </div>
            </div>
        </div>
    );
}
