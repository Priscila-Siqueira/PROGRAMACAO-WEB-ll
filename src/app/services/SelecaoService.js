import SelecaoRepository from '../repositories/SelecaoRepository.js'

class SelecaoService {
    async listarSelecoes() {
        return SelecaoRepository.findAll()
    }

    async buscarSelecaoPorId(id) {
        return SelecaoRepository.findById(id)
    }

    async buscarSelecoesPorGrupo(grupo) {
        if (!grupo || !grupo.trim()) {
            const erro = new Error('O parâmetro grupo é obrigatório.')
            erro.statusCode = 400
            throw erro
        }

        return SelecaoRepository.findByGrupo(grupo)
    }

    async criarSelecao(data) {
        this.validarPayload(data)
        return SelecaoRepository.create(data)
    }

    async atualizarSelecao(id, data) {
        this.validarPayload(data)

        const existe = await SelecaoRepository.findById(id)
        if (!existe) {
            return null
        }

        await SelecaoRepository.update(id, data)
        return SelecaoRepository.findById(id)
    }

    async removerSelecao(id) {
        const existe = await SelecaoRepository.findById(id)
        if (!existe) {
            return false
        }

        return SelecaoRepository.delete(id)
    }

    validarPayload(data) {
        if (!data || !data.selecao || !data.grupo) {
            const erro = new Error('Os campos selecao e grupo são obrigatórios.')
            erro.statusCode = 400
            throw erro
        }
    }
}

export default new SelecaoService()
