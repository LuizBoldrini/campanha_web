'use client'
import { useEffect, useState } from "react"
import { axiosCliente } from "@/app/data/contexts/axios"
import useLocalStorage from "@/app/data/hooks/useLocalStorage"
import { Chapa } from "@/model/chapa"
import Carregando from "../shared/Carregando"
import Opcao from "../shared/Opcao"
import ConfirmacaoModal from "@/app/data/contexts/ConfirmacaoModal"
import { useAuth } from "@/app/data/contexts/AuthContext"
import ResponseModal from "@/app/data/contexts/ResponseModal"

export default function ChapaItem() {
    const [chapas, setChapas] = useState<Chapa['Chapa'][]>([])
    const [loading, setLoading] = useState(true)
    const { get } = useLocalStorage()
    const { user } = useAuth()

    const [responseMessage, setResponseMessage] = useState<string | null>(null)
    const [showResponse, setShowResponse] = useState(false)
    const [selectedChapa, setSelectedChapa] = useState<Chapa['Chapa'] | null>(null)
    const [showConfirmation, setShowConfirmation] = useState(false)

    useEffect(() => {
        async function getChapas() {
            try {
                const campanhaJson = get('campanha')
                const campanha = campanhaJson ? JSON.parse(campanhaJson) : null
                const token = campanha?.token || ''
                const idEleicao = campanha?.ideleicao || ''

                if (!token) {
                    throw new Error('Token da campanha não encontrado')
                }

                const response = await axiosCliente.get('/campanha/chapa', {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": token,
                        "ideleicao": idEleicao
                    }
                })

                setChapas(response.data.Chapa || [])
            } catch (error) {
                console.error('Erro ao buscar Chapa:', error)
            } finally {
                setLoading(false)
            }
        }
        getChapas()
    }, [get])

    const handleConfirm = async () => {
        if (selectedChapa) {
            try {
                const campanhaJson = get('campanha')
                const campanha = campanhaJson ? JSON.parse(campanhaJson) : null
                const token = campanha?.token || ''
                const idAssociado = user?.Associado[0]?.idassociado || 0
                
                const response = await axiosCliente.post('/campanha/votar', {
                    idchapa: selectedChapa.idchapa,
                    idassociado: idAssociado
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": token,
                    }
                })
                const data = response.data
                
                if(data.mensagem === 'Você já votou nesta eleição.') {
                    console.log(data.mensagem)
                    setResponseMessage(data.mensagem)
                    setShowResponse(true)
                }

            } catch (error) {
                console.error('Erro ao confirmar seleção:', error)
            } finally {
                setShowConfirmation(false)
                setSelectedChapa(null)
            }
        }
    }

    const handleCancel = () => {
        setShowConfirmation(false)
        setSelectedChapa(null)
    }

    const handleResponseClose = () => {
        setShowResponse(false)
        setResponseMessage(null)
    }

    if (loading) {
        return <Carregando />
    }

    return (
        <div className="flex flex-col items-center py-10 gap-5 border-solid">
            <div className="grid grid-cols md:grid-cols-2 gap-6 justify-items-center">
                {chapas.map((chapa) => (
                    <Opcao
                        key={chapa.idchapa}
                        chapa={chapa}
                        onClick={setSelectedChapa}
                        selecionado={chapa.idchapa === selectedChapa?.idchapa}
                    />
                ))}
            </div>

            <button
                onClick={() => setShowConfirmation(true)}
                disabled={!selectedChapa}
                className={`button ${selectedChapa ? 'bg-green-500 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
            >
                Confirmar Seleção
            </button>

            {showConfirmation && selectedChapa && (
                <ConfirmacaoModal
                    chapa={selectedChapa}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
            
            {showResponse && responseMessage && (
                <ResponseModal
                    message={responseMessage}
                    onClose={handleResponseClose}
                />
            )}
        </div>
    )
}
