export default class CpfUtils {
    static formatar(cpf: string): string {
        if (!cpf) return ''
        const numeros = this.desformatar(cpf)
        return numeros.length <= 11
            ? this.substituirNumeros(numeros, 'xxx.xxx.xxx-xx')
            : this.substituirNumeros(numeros, 'xx.xxx.xxx/xxxx-xx')
    }

    static desformatar(cpf: string): string {
        if (!cpf) return ''
        return cpf.replace(/\D/g, '').slice(0, 14)
    }

    private static substituirNumeros(cpf: string, ref: string): string {
        let formatado = cpf
            .split('')
            .reduce((cpf, numero) => {
                return cpf.replace('x', numero)
            }, ref)
            .replace(/x/g, '')
        if (cpf.length <= 3) formatado = formatado.replace('.', '').replace(' ', '')
        if (cpf.length <= 6) formatado = formatado.replace('.', '').replace(' ', '')
        if (cpf.length <= 9) formatado = formatado.replace('-', '')
        return formatado
    }
}
