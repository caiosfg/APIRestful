import PortfolioModel from "../models/portfolio/PortfolioModel";
import PortfolioClass from "../models/portfolio/PortfolioClass";

let divMsg = window.document.getElementById("msg");
let divPortfolio = window.document.getElementById("listagem");
let divFormulario = window.document.getElementById("formulario");

let objPortfolioController;

class PortfolioController{

}

function main (){
    objPortfolioController = new PortfolioController ();
}
window.onload = main;