"use client"
import { useEffect, useState } from "react"
import { axiosCliente } from "@/app/data/contexts/axios"
import { useRouter } from "next/navigation"
import useLocalStorage from "@/app/data/hooks/useLocalStorage"

import Carregando from "../shared/Carregando"
import Opcao from "../shared/Opcao"
import ConfirmacaoModal from "@/app/data/contexts/ConfirmacaoModal"
import ResponseModal from "@/app/data/contexts/ResponseModal"
import { useAuth } from "@/app/data/contexts/AuthContext"
import { Chapa } from "@/model/chapa"

export default function ChapaItem() {
  const [chapas, setChapas] = useState<Chapa["Chapa"][]>([])
  const [loading, setLoading] = useState(true)
  const { get, set } = useLocalStorage()
  const { user } = useAuth()
  const router = useRouter()

  const [responseMessage, setResponseMessage] = useState<string | null>(null)
  const [showResponse, setShowResponse] = useState(false)
  const [selectedChapa, setSelectedChapa] = useState<Chapa["Chapa"] | null>(
    null,
  )
  const [showConfirmation, setShowConfirmation] = useState(false)

  useEffect(() => {
    async function getChapas() {
      try {
        const campanhaJson = get("campanha")
        const campanha = campanhaJson ? JSON.parse(campanhaJson) : null
        const token = campanha?.token || ""
        const idEleicao = campanha?.ideleicao || ""

        if (!token) {
          throw new Error("Token da campanha não encontrado")
        }

        const response = await axiosCliente.get("/campanha/chapa", {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
            ideleicao: idEleicao,
          },
        })

        setChapas(response.data.Chapa || [])
      } catch (error) {
        console.error("Erro ao buscar Chapa:", error)
      } finally {
        setLoading(false)
      }
    }
    getChapas()
  }, [get])

  const handleConfirm = async () => {
    if (selectedChapa) {
      setLoading(true)
      try {
        const campanhaJson = get("campanha")
        const campanha = campanhaJson ? JSON.parse(campanhaJson) : null
        const token = campanha?.token || ""
        const idAssociado = user?.Associado[0]?.idassociado || 0

        const response = await axiosCliente.post(
          "/campanha/votar",
          {
            idchapa: selectedChapa.idchapa,
            idassociado: idAssociado,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          },
        )
        const data = response.data

        if (data.mensagem === "Você já votou nesta eleição.") {
          setResponseMessage(data.mensagem)
          setShowResponse(true)
        } else {
          set("comprovante", JSON.stringify(data))
          router.push("/votar/sucesso")
        }
      } catch (error) {
        console.error("Erro ao confirmar seleção:", error)
        setResponseMessage(
          "Ocorreu um erro ao processar seu voto. Por favor, tente novamente.",
        )
        setShowResponse(true)
      } finally {
        setLoading(false)
        setShowConfirmation(false)
        setSelectedChapa(null)
      }
    }
  }

  const handleCancel = () => {
    setShowConfirmation(false)
    setSelectedChapa(null)
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
        className={`button ${selectedChapa ? " text-white font-semibold text-base md:text-lg bg-green-500 hover:bg-green-700 active:bg-green-800" : "bg-gray-500 text-gray-700 font-semibold text-base md:text-lg cursor-not-allowed"}`}
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
        <ResponseModal message={responseMessage} />
      )}

      {loading && <Carregando />}
    </div>
  )
}
