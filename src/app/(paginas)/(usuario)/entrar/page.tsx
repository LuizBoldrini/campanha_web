"use client"
import { Suspense } from "react"
import FormUsuario from "@/components/usuario/FormUsuario"
import Carregando from "@/components/shared/Carregando"
import BloquearVoltar from "@/components/shared/BloquearVoltar"

export default function Page() {
  return (
    <Suspense fallback={<Carregando />}>
      <FormUsuario />
      <BloquearVoltar />
    </Suspense>
  )
}
