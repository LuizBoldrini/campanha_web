"use client"
import { Suspense } from "react"
import FormUsuario from "@/components/usuario/FormUsuario"
import Carregando from "@/components/shared/Carregando"

export default function Page() {
  return (
    <Suspense fallback={<Carregando />}>
      <FormUsuario />
    </Suspense>
  )
}
