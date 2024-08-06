'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Logo from '@/components/shared/Logo'
import { Usuario } from '@/model/usuario'
import { axiosCliente } from '@/app/data/contexts/axios'
import useLocalStorage from '@/app/data/hooks/useLocalStorage'
import CpfUtils from '../utils/CpfUtils'
import NascimentoUtils from '../utils/NascimentoUtils'

export default function FormUsuario() {
    const {get, set} = useLocalStorage()
    const [usuario, setUsuario] = useState<Usuario | null>(null)
    const router = useRouter()
    const params = useSearchParams()
    
    const [cpf, setCpf] = useState('')
    const [nascimento, setNascimento] = useState('')
    
    const token = get("campanha")

    const login = async () => { 
        await axiosCliente.post('/login', {
            cpf: cpf, 
            nascimento: nascimento}, {
            headers: {
                "Content-Type": "application/json",
                "Authorization":  Object.values(token)
            }
        }).then((res) => {res.data, console.log(res.data)})
    }

    async function entrar(usuario: Usuario) {
        setUsuario(usuario)
        login()
        set('usuario', usuario)
    }

    function sair() {
        setUsuario(null)
        router.push('/')
        set('usuario', null)
    }
    
    useEffect(() => {    
    }, [])

    return (
        <div className="flex justify-center items-center h-screen relative">
            <div
                className="
                    flex flex-col justify-center items-center gap-10
                    absolute top-0 left-0 w-full h-full
                    bg-black/80 md:bg-transparent md:bg-gradient-to-r from-black/30 via-black/90 to-black/30
                "
            >
                <Logo />
                <div className="flex flex-col w-1/2 gap-5 max-w-80">
                    <div className="flex flex-col gap-4 rounded min-w-[188px]">
                        <span>CPF</span>
                        <input
                            type="text"
                            value={CpfUtils.formatar(cpf)}
                            onChange={(e) => setCpf(CpfUtils.desformatar(e.target.value))}
                            placeholder="CPF"
                            className="bg-zinc-900 px-4 py-2 rounded"
                        />
                        <span>Nascimento</span>
                        <input
                            type="text"
                            value={NascimentoUtils.formatar(nascimento.toString())}
                            onChange={(s) => setNascimento(NascimentoUtils.desformatar(s.target.value))}
                            placeholder="Data de Nascimento"
                            className="bg-zinc-900 px-4 py-2 rounded"
                        />
                        <div className="flex gap-5">
                            <button
                                onClick={() => entrar({ cpf, nascimento })}
                                className="button bg-green-600 flex-1"
                            >
                                Entrar
                            </button>
                            <button
                                onClick={() => sair()}
                                className="button flex-1"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
