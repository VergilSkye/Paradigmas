import { http } from './config'

export default {
    listar:() => {
        return http.get('usuario')
    },
    registrar:(credentials) => {
        return http.post('usuario', credentials)
    },
    atualizar:(credentials) => {
        return http.put('usuario', credentials)
    },
    apagar:(credentials) => {
        http.delete('usuario', { data: credentials })
    }
}