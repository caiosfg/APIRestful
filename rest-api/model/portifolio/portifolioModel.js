const db = require('../../base/dbConexao');

module.exports = class PortfolioModel{
    
    static getTodos(callback){
        return db.query("SELECT * FROM portifolio", callback);
    }

    static getId(id, callback){
        return db.query("SELECT * FROM portifolio WHERE idportifolio = ?", [id], callback);

    }

    static adicionar(portifolio, callback){
        return db.query("INSERT INTO portifolio (num_processo,comarca,vara,acao,data_abertura,valor_causa,escritorio,data_fim) VALUES (?,?,?,?,?,?,?,?)",
         [portifolio.num_processo,portifolio.comarca,portifolio.vara,portifolio.acao,portifolio.data_abertura,portifolio.valor_causa,portifolio.escritorio,portifolio.data_fim], callback);
    }

    static deletar(id, callback){
        return db.query("DELETE FROM portifolio WHERE idportifolio = ?", [id], callback);
   }

   static editar(portifolio, callback){
    return db.query("UPDATE portifolio SET num_processo = ?,comarca = ?,vara = ?,acao = ?,data_abertura = ?,valor_causa = ?,escritorio = ?,data_fim = ? WHERE idportifolio = ?",
     [portifolio.num_processo,portifolio.comarca,portifolio.vara,portifolio.acao,portifolio.data_abertura,portifolio.valor_causa,portifolio.escritorio,portifolio.data_fim,portifolio.idportifolio], callback);
}
};