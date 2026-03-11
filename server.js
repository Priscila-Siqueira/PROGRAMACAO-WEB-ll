import express from "express"
import routes from "./src/routes.js"

const app = express()

app.use(express.json())
app.use(routes)

const port = 3000

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

