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
                flex flex-col items-center cursor-pointer select-none rounded-lg border w-[220px] h-[280px]
                ${props.selecionado ? 'border-green-400' : 'border-zinc-700'} overflow-hidden
            `}
            onClick={() => props.onClick(props.chapa)}
        >
            {imgError ? (
                <div className="flex items-center justify-center w-full h-full bg-zinc-900 text-zinc-500">
                    <IconPhoto size={150} />
                </div>
            ) : (
                <img
                    src={`data:image/jpeg;base64,${props.chapa.foto}`}
                    alt={props.chapa.nome}
                    style={{ width: '220px', height: '220px', objectFit: 'cover' }}
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
                    <span>{props.chapa.candidato}</span>
                    <span>{props.chapa.nome}</span>
                </div>
            </div>
        </div>
    );
}
