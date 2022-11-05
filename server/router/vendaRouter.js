const express = require("express")
const vendaService = require("../service/vendaService")
const router = express.Router()

router.get("/venda", async (req, res, next) => {
    try {
        const venda = await vendaService.getVendaByDate(req.body)
        res.status(200).json(venda)
    } catch (error) {
        next(error)
    }
})

router.get("/vendaPage", async (req, res, next) => {
    try {
        const venda = await vendaService.getVendaPage(req.query.p, req.query.r)
        res.status(200).json(venda)
    } catch (error) {
        next(error)
    }
})

router.post("/venda", async (req, res, next) => {
    try {
        const venda = await vendaService.saveVenda(req.body)
        res.status(201).json(venda)
    } catch (error) {
        next(error)
    }
})

router.delete("/venda/:id", async (req, res, next) => {
    try {
        await vendaService.deleteVenda(req.params.id)
        res.sendStatus(204)
    } catch (error) {
        next(error)
    }
})

module.exports = router