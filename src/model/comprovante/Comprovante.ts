export default interface Comprovante {
    erro?: string
    mensagem?: string
    Comprovante: {
        nome?: string
        email?: string
        matricula?: string
        eleicao?: string
        chave?: string
        data?: Date
        hora?: Date
    }[]
}
