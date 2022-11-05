const bd = require("../_infra/database")

exports.getLoja = () => {
    return bd.query("select * from base.loja")
}

exports.getLojaById = (id) => {
    return bd.oneOrNone("select * from base.loja where lojaid = $1", [id])
}

exports.getLojaByName = (nome) => {
    return bd.oneOrNone("select * from base.loja where nome = $1", [nome])
}

exports.saveLoja = (loja) => {
    return bd.one("insert into base.loja (nome) values ($1) returning *", [loja.nome])
}

exports.deleteLoja = (id) => {
    return bd.none("delete from base.loja where lojaid=$1", [id])
}

exports.updateLoja = (id, loja) => {
    return bd.none("update base.loja set nome = $1 where lojaid = $2", [loja.nome, id])
}