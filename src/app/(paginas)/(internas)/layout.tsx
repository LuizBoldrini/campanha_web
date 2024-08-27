"use client"

import MenuSuperior from "@/components/shared/MenuSuperior"
import Pagina from "@/components/shared/Pagina"
import { useAuth } from "@/app/data/contexts/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Carregando from "@/components/shared/Carregando"

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = useAuth()
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted && !user) {
      router.replace("/entrar")
    }
  }, [isMounted, user, router])

  if (!isMounted || !user) {
    return <Carregando />
  }

  return (
    <div>
      <MenuSuperior />
      <Pagina>{children}</Pagina>
    </div>
  )
}
