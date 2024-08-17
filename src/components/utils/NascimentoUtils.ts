export default class NascimentoUtils {
    static formatar(data: string): string {
      data = data.replace(/\D/g, '')
  
      if (data.length > 8) {
            data = data.slice(0, 8)
      }
  
      if (data.length > 4) {
            data = data.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3')
      } else if (data.length > 2) {
            data = data.replace(/(\d{2})(\d{0,2})/, '$1/$2')
      }
  
      return data
    }
  }