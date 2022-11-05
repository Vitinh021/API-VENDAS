const express = require("express")
const lojaService = require("../service/lojaService")
const router = express.Router()

router.get("/loja", async (req, res, next) => {
    try {
        const loja = await lojaService.getLoja()
        res.status(200).json(loja)
    } catch (error) {
        next(error)
    }
})

router.post("/loja", async (req, res, next) => {
    try {
        const loja = await lojaService.saveLoja(req.body)
        res.status(201).json(loja)
    } catch (error) {
        next(error)
    }
})

router.delete("/loja/:id", async (req, res, next) => {
    try {
        await lojaService.deleteLoja(req.params.id)
        res.sendStatus(204)
    } catch (error) {
        next(error)
    }
})

router.put("/loja/:id", async (req, res, next) => {
    try {
        await lojaService.updateLoja(req.params.id, req.body)
        res.sendStatus(204)
    } catch (error) {
        next(error)
    }
})

module.exports = router