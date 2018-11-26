import { http } from './config'

export default {
  listar:() => {
    return http.get('animals')
  },
  salvar:(animal) => {
    return http.post('animals', animal)
  },
  atualizar:(animal) => {
    return http.put('animals', animal)
  },
  apagar:(animal) => {
    http.delete('animals', { data: animal })
  }
}