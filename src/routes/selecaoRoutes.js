import { Router } from 'express'
import SelecaoController from '../app/controllers/SelecaoController.js'

const router = Router()

router.get('/', (req, res) => SelecaoController.index(req, res))
router.get('/:id', (req, res) => SelecaoController.show(req, res))
router.post('/', (req, res) => SelecaoController.store(req, res))
router.put('/:id', (req, res) => SelecaoController.update(req, res))
router.delete('/:id', (req, res) => SelecaoController.delete(req, res))

export default router
