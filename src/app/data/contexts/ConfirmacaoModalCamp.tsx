import { Campanha } from "@/model/campanha"

interface ConfirmacaoModalCampProps {
    campanha: Campanha['Campanha'][0]
    onConfirm: () => void
    onCancel: () => void
}

export default function ConfirmacaoModalCamp({ campanha, onConfirm, onCancel }: ConfirmacaoModalCampProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-zinc-800 p-6 rounded shadow-lg text-center">
                <span>A campanha: </span>
                <span className="font-bold">{campanha.eleicao}</span>
                <span> está fechada e não pode ser selecionada.</span>
                <div className="flex justify-center gap-4 mt-4">
                    <button
                        onClick={onConfirm}
                        className="
                            bg-green-600 text-white font-semibold text-base md:text-lg
                            py-2 px-4 rounded-md hover:bg-green-700 active:bg-green-800
                        "
                    >
                        Ok
                    </button>
                </div>
            </div>
        </div>
    )
}