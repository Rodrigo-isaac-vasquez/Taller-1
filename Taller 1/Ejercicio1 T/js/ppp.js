function generarAleatorio(minimo, maximo){
    return Math.floor(Math.random()*(maximo-minimo)+ minimo);
}

for(let i=1; i<=10; ++i){
    console.log(generarAleatorio(1,7));
}