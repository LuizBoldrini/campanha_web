const formatarCPF = (cpf: string): string => {
    cpf = cpf.replace(/\D/g, '')
    if (cpf.length > 11) {
        cpf = cpf.substring(0, 11)
    }
    
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    
    return cpf
  }
  
  const desformatarCPF = (cpf: string): string => {
    return cpf.replace(/\D/g, '')
  }
  
  export default {
    formatar: formatarCPF,
    desformatar: desformatarCPF,
  }