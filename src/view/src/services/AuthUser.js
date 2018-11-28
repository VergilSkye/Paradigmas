import { http } from './config'

export default {
  listar: () => {
    return http.get('users')
  },
  registrar: (credentials) => {
    return http.post('users', credentials)
  },
  atualizar: (credentials) => {
    return http.put('users', credentials)
  },
  apagar: (credentials) => {
    http.delete('users', { data: credentials })
  },
  login: (credentials) => {
    return http.post('auth/login', credentials)
  }
}
