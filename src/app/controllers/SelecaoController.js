import SelecaoService from '../services/SelecaoService.js'

class SelecaoController {
    async index(req, res) {
        try {
            const selecoes = await SelecaoService.listarSelecoes()
            return res.status(200).json(selecoes)
        } catch (erro) {
            console.error('Erro ao buscar seleções:', erro)
            return res.status(500).json({ erro: 'Erro ao buscar seleções' })
        }
    }

    async show(req, res) {
        try {
            const selecao = await SelecaoService.buscarSelecaoPorId(req.params.id)

            if (!selecao) {
                return res.status(404).json({ erro: 'Seleção não encontrada' })
            }

            return res.status(200).json(selecao)
        } catch (erro) {
            console.error('Erro ao buscar seleção por id:', erro)
            return res.status(500).json({ erro: 'Erro ao buscar seleção' })
        }
    }

    async store(req, res) {
        try {
            const novaSelecao = await SelecaoService.criarSelecao(req.body)
            return res.status(201).json(novaSelecao)
        } catch (erro) {
            console.error('Erro ao criar seleção:', erro)
            return res.status(erro.statusCode || 500).json({ erro: erro.message || 'Erro ao inserir seleção' })
        }
    }

    async update(req, res) {
        try {
            const selecaoAtualizada = await SelecaoService.atualizarSelecao(req.params.id, req.body)

            if (!selecaoAtualizada) {
                return res.status(404).json({ erro: 'Seleção não encontrada' })
            }

            return res.status(200).json(selecaoAtualizada)
        } catch (erro) {
            console.error('Erro ao atualizar seleção:', erro)
            return res.status(erro.statusCode || 500).json({ erro: erro.message || 'Erro ao atualizar seleção' })
        }
    }

    async delete(req, res) {
        try {
            const removido = await SelecaoService.removerSelecao(req.params.id)

            if (!removido) {
                return res.status(404).json({ erro: 'Seleção não encontrada' })
            }

            return res.status(204).send()
        } catch (erro) {
            console.error('Erro ao deletar seleção:', erro)
            return res.status(500).json({ erro: 'Erro ao deletar seleção' })
        }
    }
}

export default new SelecaoController()
