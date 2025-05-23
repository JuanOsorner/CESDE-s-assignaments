export class RELOJ{
    //LOS TICKS DEPENDEN DEL PROCESADOR
    constructor(){
        //this._contador = 110000000000; //Ajuste de los milisegundos  (PORTATIL)
        this._contador = 100000000010; //(PC DE MESA)
        this._segundos = 0;
        this._minutos = 0;
    }
    _tick(){
        while(this._contador>0){
            this._contador = this._contador - 1;
        }
    }
    _bloqueo(){
        while(this._minutos!=2){
            //Vamos aumentado los segundos y minutos despues de 1 segundo
            this._segundos = this._segundos + 1;
            if(this._segundos == 60){
                this._minutos = this._minutos + 1;
                //Reiniciamos el contador de los segundos  
                this._segundos = 0;  
            }
            //Esperamos aproximadamente un segundo (HAY QUE AJUSTAR BIEN EL TICK)
            this._tick();
        }
        return 0;   
    }
}