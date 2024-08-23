'use client'
import { createContext, useState, useEffect, useContext, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { axiosCliente } from '@/app/data/contexts/axios'
import useLocalStorage from '../hooks/useLocalStorage'

const AuthContext = createContext<any>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<any>(null)
    const { get, set, remove } = useLocalStorage()
    const router = useRouter()
    
    useEffect(() => {
        const storedUser = get('usuario')
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser))
            } catch(error) {
                console.log('Erro ao realizar a conversão do usuário logado:', error)
                remove('usuario')
            }

        }
    }, [get, remove])
    
    const login = async (cpf: string, nascimento: string) => {
        try {
            const campanhaJson = get('campanha')
            const campanha = campanhaJson ? JSON.parse(campanhaJson) : null
            const token = campanha?.token || ''

            if (!token) {
                throw new Error('Token da campanha não encontrado')
            }
            
            const response = await axiosCliente.post('/login', {
                cpf,
                nascimento,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token ? Object.values(token).join('') : ''
                }
            })

            const data = response.data
            if (data.erro === 'True') {
                throw new Error(data.mensagem)
            }
            
            set('usuario', JSON.stringify(data))
            setUser(data)
            router.push('/verificar')
        } catch (error) {
            console.error('Erro ao fazer login:', error)
            throw error
        }
    }
    
    const logout = () => {
        localStorage.removeItem('usuario')
        setUser(null);
        router.push('/campanha')
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth precisa estar dentro do AuthProvider')
    }
    return context
}