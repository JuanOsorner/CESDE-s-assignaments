package org.example;
import java.util.Random;
public class Main {
    //CLASE#3 (METODOS)
    //SUBPROGRAMAS == FUNCIONES (METODOS)
    //PUBLIC PARA USAR EN MAIN
    //(*)Observacion: VOID no devuelve datos
    //(*)Observacion: Siempre debe ir statix
    public static void main(String[] args) {
        //(1)Aqui llamamos nuestros metodos
        //(2)Sin argumento mensaje();
        //(3)Con argumentos mensaje(texto);
        Random rd = new Random();
        for (int i = 0; i < 9; i+=2) {
            int Ran = rd.nextInt(i+99);
            int Ran1 = rd.nextInt(i+20);
            mensaje("Ganaste",i);
            System.out.println(sumar(Ran,Ran1));
        }
    }
    //Que no hacer(****)
    //public static int main(String[] args){
    //}

    // public static void mensaje(ARGUMENTOS){
    // }
    public static void mensaje(String texto, int n){
        int suma = 0;
        for (int j = 0; j < 9; j++) {
            suma = suma + n;
        }
        System.out.println("("+texto+","+suma+")");
        //Tambien podemos llamar el metodo sumar aqui
    }
    /////////////sumar numeros aleatorios////////////////////
    public static int sumar(int x, int y){
        return x+y;
    } //SIEMPRE CUANDO SE PONE EL TIPO DE DATO SE DEBE RETORNAR
}