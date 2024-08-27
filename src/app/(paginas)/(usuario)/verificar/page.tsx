"use client"
import { Suspense } from "react"
import Carregando from "@/components/shared/Carregando"
import VerificarCodigo from "@/components/usuario/Verificacao"

export default function Page() {
  return (
    <Suspense fallback={<Carregando />}>
      <VerificarCodigo />
    </Suspense>
  )
}
