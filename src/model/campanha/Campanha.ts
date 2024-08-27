export default interface Campanha {
  erro: string
  mensagem: string
  Campanha: {
    dataini?: Date
    horaini?: Date
    datafinal?: Date
    horafinal?: Date
    token?: string
    detalhes?: string
    eleicao?: string
    ideleicao?: number
    status?: string
  }[]
}
