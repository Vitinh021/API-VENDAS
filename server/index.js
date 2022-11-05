const express = require("express")
const app = express()
app.use(express.json())
app.use(require("./router/lojaRouter"))
app.use(require("./router/vendaRouter"))

app.use((error, req, res, next) => {
    switch (error.message) {
        case "loja não existe":
            return res.status(404).send(error.message)
        case "loja já existe":
            return res.status(409).send(error.message)
        case "venda não existe":
            return res.status(404).send(error.message)
        case "limite de pagina/registro não suportado":
            return res.status(400).send(error.message)
        default:
            return res.status(500).send(error.message)
    }
})

app.listen(2000, () => {
    console.log("Servidor rodando na porta --> [2000]")
})