import { http } from './config'

export default {
  listar:() => {
    return http.get('animal')
  },
  salvar:(animal) => {
    return http.post('animal', animal)
  },
  atualizar:(animal) => {
    return http.put('animal', animal)
  },
  apagar:(animal) => {
    http.delete('animal', { data: animal })
  }
}