'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { axiosCliente } from '@/app/data/contexts/axios'
import { useAuth } from '@/app/data/contexts/AuthContext'
import useLocalStorage from '@/app/data/hooks/useLocalStorage'
import { AxiosError } from 'axios'
import Logo from '../shared/Logo'

export default function Verificacao() {
    const { user } = useAuth()
    const { get } = useLocalStorage()
    const [codigoDigitado, setCodigoDigitado] = useState('')
    const [codigoEnviado, setCodigoEnviado] = useState('')
    const [tempoRestante, setTempoRestante] = useState<number>(60)
    const [mensagemErro, setMensagemErro] = useState<string | null>(null)
    const [podeReenviar, setPodeReenviar] = useState<boolean>(false)
    const router = useRouter()

    const enviarCodigoVerificacao = async () => {
    try {
        const campanhaJson = get('campanha')
        const campanha = campanhaJson ? JSON.parse(campanhaJson) : null
        const token = campanha?.token || ''
        const idAssociado = user?.Associado[0]?.idassociado || 0

        const response = await axiosCliente.post('/campanha/verificacao', {
            idAssociado: idAssociado,
            whatsapp: user?.Associado[0]?.whatsapp || ''
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
            }
        })

        const data = response.data

        if (data.erro === 'false') {
            setCodigoEnviado(data.code)
            setTempoRestante(60)
            setPodeReenviar(false)
        } else {
            setMensagemErro(data.mensagem || 'Falha no envio do código. Tente novamente.')
        }
    } catch (error) {
        if (error instanceof AxiosError) {
            if (error.response?.status === 401) {
                setMensagemErro('Não autorizado. Verifique o token.')
            } else {
                console.error('Erro ao enviar código de verificação:', error.message)
                setMensagemErro('Erro ao enviar código de verificação.')
            }
        } else {
            console.error('Erro desconhecido:', error)
            setMensagemErro('Ocorreu um erro inesperado. Tente novamente.')
        }
    }
}

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            enviarCodigoVerificacao()
        }, 1000)

        return () => clearTimeout(timeoutId)
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            setTempoRestante((prev) => {
                if (prev === 1) {
                    setPodeReenviar(true)
                    clearInterval(timer)
                }
                return prev > 0 ? prev - 1 : 0
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])



    const verificarCodigo = () => {
        if (codigoDigitado === codigoEnviado) {
            router.push('/votar')
        } else {
            setMensagemErro('Código incorreto. Tente novamente.')
        }
    }

    return (
        <div className="flex justify-center items-center h-screen relative">
            <div
                className="
                flex flex-col justify-center items-center gap-10 
                absolute top-0 left-0 w-full h-full
                bg-black/80 md:bg-transparent md:bg-gradient-to-r from-black/30 via-black/90 to-black/30"
            >
            <Logo />
            <div className="flex flex-col w-full max-w-lg bg-zinc-800 p-10 rounded border border-zinc-700 shadow-lg">
                <div className="flex flex-col gap-3">
                    <span className="text-center text-white">Digite o Código de verificação enviado pelo WhatsApp</span>
                    <input
                        type="text"
                        value={codigoDigitado}
                        onChange={(e) => setCodigoDigitado(e.target.value)}
                        className="bg-zinc-900 px-4 py-2 rounded text-white"
                        placeholder="Código de verificação"
                        maxLength={6}
                        disabled={tempoRestante === 0}
                    />
                    {mensagemErro && <p className="text-red-500 text-xs">{mensagemErro}</p>}
                    <div className="flex gap-5">
                        <button
                            onClick={verificarCodigo}
                            disabled={codigoDigitado.length !== 6 || tempoRestante === 0}
                            className={`
                                button bg-green-600 flex-1 hover:bg-green-700 active:bg-green-800  ${
                                    codigoDigitado.length !== 6 || tempoRestante === 0 ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                        >
                            Confirmar Código
                        </button>
                    </div>
                </div>

                <span className="text-zinc-400 text-center text-xs mt-4">
                    Caso não tenha recebido o código pelo WhatsApp, clique em Reenviar Código.
                </span>
                {podeReenviar ? (
                    <button
                        onClick={enviarCodigoVerificacao}
                        className="button bg-zinc-600 mt-2 hover:bg-zinc-700 active:bg-zinc-800"
                    >
                        Reenviar Código
                    </button>
                ) : (
                    <p className="text-gray-400 mt-4 text-center">Reenvio disponível em {tempoRestante}s</p>
                )}
            </div>
        </div>
    </div>
    )
}
