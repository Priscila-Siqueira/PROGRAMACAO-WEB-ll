import conexao from "../database/index.js"

class SelecaoRepository {

    async executarQuery(sql, valores = []) {
        try {
            const [rows] = await conexao.query(sql, valores)
            return rows
        } catch (erro) {
            console.error("Erro na query:", erro)
            throw erro
        }
    }

    // listar tudo
    async findAll() {
        const sql = "SELECT * FROM dbselecao.dbcopa"
        return await this.executarQuery(sql)
    }

    // buscar por id
    async findById(id) {
        const sql = "SELECT * FROM dbselecao.dbcopa WHERE id=?"
        return await this.executarQuery(sql, [id])
    }

    // criar
    async create(params) {
        const sql = "INSERT INTO dbselecao.dbcopa SET ?"
        return await this.executarQuery(sql, [params])
    }

    // atualizar
    async update(id, params) {
        const sql = "UPDATE dbselecao.dbcopa SET ? WHERE id=?"
        return await this.executarQuery(sql, [params, id])
    }

    // deletar
    async delete(id) {
        const sql = "DELETE FROM dbselecao.dbcopa WHERE id=?"
        return await this.executarQuery(sql, [id])
    }

}

export default new SelecaoRepository()