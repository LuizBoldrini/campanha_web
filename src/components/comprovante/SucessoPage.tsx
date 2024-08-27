"use client"
import { useEffect, useState } from "react"
import useLocalStorage from "@/app/data/hooks/useLocalStorage"
import { useRouter } from "next/navigation"
import Carregando from "../shared/Carregando"
import { Comprovante } from "@/model/comprovante"
import { gerarPDF } from "@/components/utils/pdfGenerator"

export default function SucessoPage() {
  const [comprovante, setComprovante] = useState<Comprovante | null>(null)
  const [loading, setLoading] = useState(false)
  const { get } = useLocalStorage()
  const router = useRouter()

  useEffect(() => {
    const storedComprovante = get("comprovante")
    if (storedComprovante) {
      setComprovante(JSON.parse(storedComprovante))
    }
  }, [get])

  const handleNavigate = (path: string) => {
    setLoading(true)
    setTimeout(() => {
      router.push(path)
    }, 500)
  }

  if (!comprovante) {
    return <Carregando />
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-950 py-10">
      <div className="flex flex-col items-center bg-zinc-900 rounded-lg w-96 lg:w-90 p-4">
        <div className="flex gap-2 p-4 border-b border-zinc-800 w-full">
          <div className="flex flex-col">
            <span className="font-bold text-zinc-300 leading-6">
              Voto Confirmado com Sucesso!
            </span>
            <span className="text-xs text-zinc-500 leading-3">
              Detalhes do Comprovante
            </span>
          </div>
        </div>
        <div className="flex flex-col p-5 gap-6 border-b border-zinc-800 w-full">
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase text-zinc-400">Nome</span>
            <span className="text-sm text-white">
              {" "}
              {comprovante.Comprovante[0]?.nome}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase text-zinc-400">Email</span>
            <span className="text-sm text-white break-all">
              {comprovante.Comprovante[0]?.email}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase text-zinc-400">Matrícula</span>
            <span className="text-sm text-white break-all">
              {comprovante.Comprovante[0]?.matricula}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase text-zinc-400">Eleição</span>
            <span className="text-sm text-white break-all">
              {comprovante.Comprovante[0]?.eleicao}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase text-zinc-400">Chave</span>
            <span className="text-sm text-white break-all">
              {comprovante.Comprovante[0]?.chave}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase text-zinc-400">Data</span>
            <span className="text-sm text-white">
              {comprovante.Comprovante[0]?.data?.toString()}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase text-zinc-400">Hora</span>
            <span className="text-sm text-white">
              {comprovante.Comprovante[0]?.hora?.toString()}
            </span>
          </div>
        </div>
        <div className="flex gap-5 pt-8">
          <button
            onClick={() => gerarPDF(comprovante)}
            className="
                        bg-green-600 text-white font-semibold text-base md:text-lg
                        py-2 px-4 rounded-md hover:bg-green-700 active:bg-green-800   
                    "
          >
            Baixar Comprovante
          </button>
          <button
            onClick={() => handleNavigate("/campanha")}
            className="
                    bg-zinc-600 text-white font-semibold text-base md:text-lg
                    py-2 px-4 rounded-md hover:bg-zinc-700 active:bg-zinc-800
                "
          >
            Campanhas Disponíveis
          </button>
        </div>
      </div>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <Carregando />
        </div>
      )}
    </div>
  )
}
