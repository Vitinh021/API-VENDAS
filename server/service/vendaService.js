const vendaData = require("../data/vendaData")

exports.getVendaByDate = (data) => {
    return vendaData.getVendaByDate(data)
}

exports.getVendaPage = async (page, rec) => {
    page = parseInt(page)
    rec = parseInt(rec)
    if (!page || page == 0) page = 1
    if (!rec || rec == 0) rec = 1
    const qtd = await vendaData.countRecords()
    let nPages = parseInt(qtd[0].count / rec)
    if (qtd[0].count % rec > 0) nPages++
    if (page > nPages || page < 0) {
        throw new Error("limite de pagina/registro não suportado")
    } else {
        const offset = (page - 1) * rec
        return vendaData.getVendaPage(rec, offset)
    }
}

exports.saveVenda = (venda) => {
    return vendaData.saveVenda(venda)
}

exports.deleteVenda = async (id) => {
    const buscaVenda = await vendaData.getVendaById(id)
    if (!buscaVenda) {
        throw new Error("venda não existe")
    } else {
        return vendaData.deleteVenda(id)
    }
}
