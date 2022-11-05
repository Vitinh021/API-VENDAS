const bd = require("../_infra/database")

exports.getVendaByDate = (data) => {
    return bd.query("select * from base.venda where date(data) >= $1 and date(data) <= $2;", [data.inicio, data.fim])
}

exports.getVendaPage = (limit, offset) => {
    return bd.query("select * from base.venda order by date(data) desc limit $1 offset $2", [limit, offset])
}

exports.countRecords = () => {
    return bd.query("select count(vendaid) from base.venda")
}

exports.getVendaById = (id) => {
    return bd.oneOrNone("select * from base.venda where vendaid = $1", [id])
}

exports.saveVenda = (venda) => {
    return bd.one("insert into base.venda (numcartao, valbruto, numparcela, bandeira, modalidadeid, lojaid) values ($1, $2, $3, $4, $5, $6) returning *",
        [venda.numcartao, venda.valbruto, venda.numparcela, venda.bandeira, venda.modalidadeid, venda.lojaid])
}

exports.deleteVenda = (id) => {
    return bd.none("delete from base.venda where vendaid = $1", [id])
}