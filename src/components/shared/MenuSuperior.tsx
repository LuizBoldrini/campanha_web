"use client"

import MenuUsuario from "./MenuUsuario"
import { useAuth } from "@/app/data/contexts/AuthContext"
import Logo from "./Logo"

export default function MenuSuperior() {
  const { user } = useAuth()

  return (
    <header className="self-stretch flex justify-center items-center h-[76px] bg-black/90">
      <nav className="flex items-center justify-between container">
        <Logo />
        <div>{user ? <MenuUsuario usuario={user} /> : <></>}</div>
      </nav>
    </header>
  )
}
