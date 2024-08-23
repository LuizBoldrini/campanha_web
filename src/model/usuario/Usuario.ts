export default interface Usuario {
    erro?: string
    mensagem?: string
    cpf: string
    Nascimento: string
    Associado: {
        codigoassociado?: string
        nome?: string
        matricula?: string
        cpf: string
        email?: string
        telefone?: string
        whatsapp?: string
        nascimento: string
        idassociado?: number
    }[]
}
