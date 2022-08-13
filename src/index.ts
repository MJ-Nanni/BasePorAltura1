import "./styles.css";

let p = document.getElementById("p")
let base = document.getElementById("base")
let altura = document.getElementById("altura")
let calcular = document.getElementById("calcular")

/*let base = document.getElementById("base")
let altura = document.getElementById("altura")*/

calcular.addEventListener("click" , () => {
let bases: number = Number(base.value);
let alturas: number = Number(altura.value);
let resultado: number = bases * alturas;

console.log (resultado);

p.innerText = "Superficie " + resultado

}