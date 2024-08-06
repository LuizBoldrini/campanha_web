export default class NascimentoUtils {
    static formatar(nascimento: string): string {
        if (!nascimento) return ''
        const numeros = this.desformatar(nascimento)
        return numeros.length <= 8
            ? this.substituirNumeros(numeros, 'xx/xx/xxxx')
            : this.substituirNumeros(numeros, 'xx/xx/xxxx')
    }

    static desformatar(nascimento: string): string {
        if (!nascimento) return ''
        return nascimento.replace(/\D/g, '').slice(0, 8)
    }

    private static substituirNumeros(nascimento: string, ref: string): string {
        let formatado = nascimento
            .split('')
            .reduce((nascimento, numero) => {
                return nascimento.replace('x', numero)
            }, ref)
            .replace(/x/g, '')
        if (nascimento.length <= 2) formatado = formatado.replace('/', '').replace(' ', '')
        if (nascimento.length <= 4) formatado = formatado.replace('/', '').replace(' ', '')
        return formatado
    }
}
