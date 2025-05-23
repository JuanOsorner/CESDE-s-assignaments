function tick(){
    let contador = 200000678;
    while(contador>0){
        contador--;
    }
}
let segundos = 0;
let minutos = 0;
while(minutos!=2){
    segundos = segundos + 1;
    console.log("Segundo "+segundos);
    if(segundos == 60){
        minutos = minutos + 1;
        segundos = 0;
        console.log("\nMinuto "+minutos);
    }
    tick();
}