import { http } from './config'

export default {
  listar:() => {
    return http.get('locals')
  },
  salvar:(local) => {
    return http.post('locals', local)
  },
  atualizar:(local) => {
    return http.put('locals', local)
  },
  apagar:(local) => {
    http.delete('locals', { data: local })
  }
}