import { Router } from "express"
import selecaoController from "./app/controllers/SelecaoController.js"

const routes = Router()

// listar seleções
routes.get("/selecoes", selecaoController.index)

// buscar por id
routes.get("/selecoes/:id", selecaoController.show)

// criar seleção
routes.post("/selecoes", selecaoController.store)

// atualizar seleção
routes.put("/selecoes/:id", selecaoController.update)

// deletar seleção
routes.delete("/selecoes/:id", selecaoController.delete)

export default routes