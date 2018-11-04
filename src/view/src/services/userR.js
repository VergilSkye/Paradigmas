import { http } from './config'

export default {
    listar:() => {
        return http.get('usuario')
    },
    salvar:(usuario) => {
        return http.post('usuario', usuario)
    },
    atualizar:(usuario) => {
        return http.put('usuario', usuario)
    },
    apagar:(usuario) => {
        http.delete('usuario', { data: usuario })
    }
}