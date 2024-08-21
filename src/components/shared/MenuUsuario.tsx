'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Usuario } from '@/model/usuario'
import { useAuth } from '@/app/data/contexts/AuthContext'
import { IconUser } from '@tabler/icons-react'

export interface MenuUsuarioProps {
    usuario: Usuario['Associado']
}

export default function MenuUsuario(props: MenuUsuarioProps) {
    const { logout, user } = useAuth()

    return props.usuario ? (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="flex gap-2 items-center">
                    <div className="flex flex-col items-end">
                        <span className="text-xl font-bold leading-5">{user?.Associado[0]?.nome.split(' ')[0]}</span>
                        <span className="text-xs text-zinc-400">{user?.Associado[0]?.email}</span>
                    </div>
                    <div className="flex justify-center items-center rounded-full overflow-hidden w-11 h-11 p-1 bg-zinc-700">
                        <IconUser width={40} height={40}  />
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=' bg-zinc-800'>
                <DropdownMenuItem onClick={logout} className='cursor-pointer border border-transparent hover:bg-zinc-700/90 active:border-zinc-500'>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ) : null
}
