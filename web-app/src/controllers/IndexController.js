import PortfolioModel from "../models/portfolio/PortfolioModel";

let divPortfolio = window.document.getElementById("div-portfolio");
let objIndexController;

class IndexController{
    getTodosIndex(divPortfolio){
        let promise = new Promise(function(resolve, reject){
            let promiseFetch = PortfolioModel.getTodos();
            
            promiseFetch.then(response =>{
        resolve(response);
    });

})

promise.then(response =>{
    let dados = "";

    for(const servico of response.dados){
        dados += `<div class="card text-white bg-primary">
        <div class="card-header">
        <h5 class="card-title">${servico.idportifolio}</h5>
        </div>
        <div class="card-body">
          <p class="card-text">${servico.num_processo}</p>
          <p class="card-text">${servico.comarca}</p>
          <p class="card-text">${servico.vara}</p>
          <p class="card-text">${servico.acao}</p>
          <p class="card-text">${servico.data_abertura}</p>
          <p class="card-text">${servico.valor_causa}</p>
          <p class="card-text">${servico.escritorio}</p>
          <p class="card-text">${servico.data_fim}</p>
        </div>
      </div><br>`;
    }

    divPortfolio.innerHTML = dados;
}).catch(response => console.log("erro catch:", response));
}
}

function main(){
    objIndexController = new IndexController();
    objIndexController.getTodosIndex(divPortfolio);
}

window.onload = main;