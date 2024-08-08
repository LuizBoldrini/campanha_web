'use client'
import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { axiosCliente } from '@/app/data/contexts/axios';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<any>(null);
    const { get, set } = useLocalStorage()
    const router = useRouter();
    
    useEffect(() => {
        const storedUser = get('usuario');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    
    const login = async (cpf: string, nascimento: string) => {
        try {
            const tokenJson = get('campanha');
            const token = tokenJson ? JSON.parse(tokenJson) : null;
            
            const response = await axiosCliente.post('/login', {
                cpf,
                nascimento,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token ? Object.values(token).join('') : ''
                }
            });
            
            const data = response.data;
            const dataObj = Object.values(data)
              if (dataObj[2] === 'True') {
                throw new Error('Falha ao fazer login. Verifique suas credenciais e tente novamente.');
              }
            setUser(data);
            set('usuario', JSON.stringify(data));
            router.push('/votar');
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            throw error;
        }
    };
    
    const logout = () => {
        localStorage.removeItem('usuario');
        setUser(null);
        router.push('/entrar');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}