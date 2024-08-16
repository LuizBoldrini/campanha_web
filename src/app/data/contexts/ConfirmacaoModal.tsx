'use client'
import { Chapa } from "@/model/chapa"

interface ConfirmacaoModalProps {
    chapa: Chapa['Chapa']
    onConfirm: () => void
    onCancel: () => void
}

export default function ConfirmacaoModal({ chapa, onConfirm, onCancel }: ConfirmacaoModalProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-zinc-800 p-6 rounded shadow-lg text-center">
                <span>Você deseja confirmar a seleção do candidato(a) {chapa.candidato}?</span>
                <div className="flex justify-center gap-4 mt-4">
                    <button
                        onClick={onConfirm}
                        className="
                            bg-gradient-to-r from-green-500 to-green-600
                            text-white font-semibold text-base md:text-lg
                            py-2 px-4 rounded-md hover:from-green-600 hover:to-green-700
                        "
                    >
                        Confirmar
                    </button>
                    <button
                        onClick={onCancel}
                        className="
                            bg-gradient-to-r from-red-500 to-red-600
                            text-white font-semibold text-base md:text-lg
                            py-2 px-4 rounded-md hover:from-red-600 hover:to-red-700
                        "
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}