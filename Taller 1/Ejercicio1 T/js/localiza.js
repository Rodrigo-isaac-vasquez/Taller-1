
const valormatriz = document.querySelector("#container");
valormatriz.addEventListener("submit",crear_matriz)

function crear_matriz(valor){
    valor.preventDefault();
    const fil1 = document.querySelector("#fil").value
    const colum2 = document.querySelector("#colum").value
    console.log(fil1,colum2);

var resultado = document.getElementById('resultado');
var array = [] ;

while (array.length < fil1) {
    array.push(Math.floor(Math.random()*10));
    
    resultado.textContent = array;
    
    }

}



