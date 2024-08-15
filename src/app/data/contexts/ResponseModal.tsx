'use client'
interface ResponseModalProps {
    message: string
    onClose: () => void
}

export default function ResponseModal({ message, onClose }: ResponseModalProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
            <div className="bg-zinc-800 p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-semibold mb-4">Resposta</h2>
                <p className="mb-4">{message}</p>
                <button
                    onClick={onClose}
                    className="button bg-green-500 text-white"
                >
                    Fechar
                </button>
            </div>
        </div>
    )
}