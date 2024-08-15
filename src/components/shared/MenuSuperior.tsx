'use client'

import Link from 'next/link'
import MenuUsuario from './MenuUsuario'
import { useAuth } from '@/app/data/contexts/AuthContext'
import Logo from './Logo'

export default function MenuSuperior() {
    const { user } = useAuth()

    return (
        <header className="self-stretch flex justify-center items-center h-[76px] bg-black/60">
            <nav className="flex items-center justify-between container  bg-black/60">
            <Logo />
                <div>
                    {user ? (
                        <MenuUsuario usuario={user} />
                    ) : (
                        <Link href="/entrar">Entrar</Link>
                    )}
                </div>
            </nav>
        </header>
    )
}
