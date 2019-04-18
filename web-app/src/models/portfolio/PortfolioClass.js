export default class PortfolioClass{
    constructor(id, num_processo, comarca, vara, acao, data_abertura, valor_causa, escritorio, data_fim){
        if(id!=null) this.idportifolio = id;
        this.num_processo = num_processo;
        this.comarca = comarca;
        this.vara = vara;
        this.acao = acao;
        this.data_abertura = data_abertura;
        this.valor_causa = valor_causa;
        this.escritorio = escritorio;
        this.data_fim = data_fim;
    }
}
