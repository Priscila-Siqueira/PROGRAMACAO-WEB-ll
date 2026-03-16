import { Router } from 'express'
import selecaoRoutes from './routes/selecaoRoutes.js'

const router = Router()

router.get('/', (req, res) => {
    res.status(200).json({
        mensagem: 'API de seleções no ar'
    })
})

router.use('/selecoes', selecaoRoutes)

export default router
