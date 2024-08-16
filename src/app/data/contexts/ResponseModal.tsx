'use client'

import { useRouter } from "next/navigation"

interface ResponseModalProps {
    message: string
}

export default function ResponseModal({ message }: ResponseModalProps) {
    const router = useRouter()
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
            <div className="bg-zinc-800 p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-semibold mb-4">{message}</h2>
                <p className="mb-4">Clique em confirmar para ser redirecionado às campanhas disponíveis!</p>

                <button
                    onClick={() => router.push('/campanha')}
                    className="
                        bg-green-600 text-white font-semibold text-base md:text-lg
                        py-2 px-4 rounded-md hover:bg-green-700 active:bg-green-800
                    "
                >
                    Confirmar
                </button>
            </div>
        </div>
    )
}