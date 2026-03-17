import conexao from '../database/index.js'

class SelecaoRepository {
    async findAll() {
        const sql = 'SELECT * FROM dbselecao.dbcopa'
        const [rows] = await conexao.query(sql)
        return rows
    }

    async findById(id) {
        const sql = 'SELECT * FROM dbselecao.dbcopa WHERE id = ?'
        const [rows] = await conexao.query(sql, [id])
        return rows[0] ?? null
    }

    async create(data) {
        const sql = 'INSERT INTO dbselecao.dbcopa SET ?'
        const [result] = await conexao.query(sql, [data])
        return {
            id: result.insertId,
            ...data
        }
    }

    async update(id, data) {
        const sql = 'UPDATE dbselecao.dbcopa SET ? WHERE id = ?'
        const [result] = await conexao.query(sql, [data, id])
        return result.affectedRows > 0
    }

    async delete(id) {
        const sql = 'DELETE FROM dbselecao.dbcopa WHERE id = ?'
        const [result] = await conexao.query(sql, [id])
        return result.affectedRows > 0
    }
}

export default new SelecaoRepository()
