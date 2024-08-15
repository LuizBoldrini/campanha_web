'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Logo from '@/components/shared/Logo'
import { useAuth } from '@/app/data/contexts/AuthContext'
import CpfUtils from '../utils/CpfUtils'
import NascimentoUtils from '../utils/NascimentoUtils'

export default function FormUsuario() {
  const { login } = useAuth()
  const [cpf, setCpf] = useState('')
  const [nascimento, setNascimento] = useState('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const router = useRouter()

  const handleLogin = async () => {
    try {
      await login(cpf, nascimento)
      setErrorMessage(null)
    } catch (error) {
      setErrorMessage('Falha ao fazer login. Verifique suas credenciais e tente novamente.')
    }
  }

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
              onChange={(e) => setNascimento(e.target.value)}
              placeholder="Data de Nascimento"
              className="bg-zinc-900 px-4 py-2 rounded"
            />
            {errorMessage && (
              <span className='text-red-500 text-xs'>{errorMessage}</span>
            )}
            <div className="flex gap-5">
              <button
                onClick={handleLogin}
                className="button bg-green-600 flex-1"
              >
                Entrar
              </button>
              <button
                onClick={() => router.push('/')}
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