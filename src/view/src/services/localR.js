import { http } from './config'

export default {
    listar:() => {
        return http.get('local')
    },
    salvar:(local) => {
        return http.post('local', local)
    },
    atualizar:(local) => {
        return http.put('local', local)
    },
    apagar:(local) => {
        http.delete('local', { data: local })
    }
}