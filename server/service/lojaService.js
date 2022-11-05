const lojaData = require("../data/lojaData")

exports.getLoja = () => {
    return lojaData.getLoja()
}

exports.saveLoja = async (loja) => {
    const buscaLoja = await lojaData.getLojaByName(loja.nome)
    if (buscaLoja) {
        throw new Error("loja já existe")
    } else {
        return lojaData.saveLoja(loja)
    }
}

exports.deleteLoja = async (id) => {
    const buscaLoja = await lojaData.getLojaById(id)
    if (!buscaLoja) {
        throw new Error("loja não existe")
    } else {
        return lojaData.deleteLoja(id);
    }
}

exports.updateLoja = async (id, loja) => {
    const buscaLoja = await lojaData.getLojaById(id)
    if (!buscaLoja) {
        throw new Error("loja não existe")
    } else {
        return lojaData.updateLoja(id, loja)
    }
}