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
                        className="button bg-green-600"
                    >
                        Confirmar
                    </button>
                    <button
                        onClick={onCancel}
                        className="button bg-red-500"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}