import selecaoRepository from "../repositories/SelecaoRepository.js"

class SelecaoController {

    // listar tudo
    async index(req, res) {
        try {

            const resultado = await selecaoRepository.findAll()

            res.status(200).json(resultado)

        } catch (erro) {

            res.status(500).json({ erro: "Erro ao buscar seleções" })

        }
    }

    // buscar por id
    async show(req, res) {

        const id = req.params.id

        try {

            const resultado = await selecaoRepository.findById(id)

            res.status(200).json(resultado)

        } catch (erro) {

            res.status(500).json({ erro: "Erro ao encontrar seleção" })

        }

    }

    // criar
    async store(req, res) {

        const params = req.body

        try {

            const resultado = await selecaoRepository.create(params)

            res.status(201).json(resultado)

        } catch (erro) {

            res.status(500).json({ erro: "Erro ao inserir seleção" })

        }

    }

    // atualizar
    async update(req, res) {

        const id = req.params.id
        const params = req.body

        try {

            const resultado = await selecaoRepository.update(id, params)

            res.status(200).json(resultado)

        } catch (erro) {

            res.status(500).json({ erro: "Erro ao atualizar seleção" })

        }

    }

    // deletar
    async delete(req, res) {

        const id = req.params.id

        try {

            const resultado = await selecaoRepository.delete(id)

            res.status(200).json(resultado)

        } catch (erro) {

            res.status(500).json({ erro: "Erro ao deletar seleção" })

        }

    }

}

export default new SelecaoController()