import java.util.Scanner;
import java.util.Random;
public class Ejercicio2 {
    //Primera idea: Vamos a crear una funcion que tome la palabra ingresada
    // y este haga permutaciones con sus letras. Luego veremos que mas hacer para arrojar si las palabras
    // son o no anagramas
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Ingrese una palabra: ");
        String texto = sc.next();
        System.out.println(permutacion(texto));
    }
    public static char[] permutacion(String palabra){
        Random rd = new Random();
        int tamaño = palabra.length();
        char[] V = new char[tamaño]; //El tamaño es fijo (Esto puede ser una limitacion)
        for (int i = 0; i < V.length; i++) {
            int Num = rd.nextInt(100);
            char L = palabra.charAt(Num%tamaño); //Muestra la letra en la posicion i
            if(!contieneL(V,L,i)){
                V[i] = palabra.charAt(Num%tamaño); //Asi llenamos un vector letra por letra
            //Num%tamaño es un numero menor a tamaño entonces nunca se saldra del rango
            }
        }
        return V;
    }
    //Vamos a crear una funcion que detecte cuando una letra esta en el Array
    public static boolean contieneL(char[] array, char letra, int act){
        for(int j = 0; j < act; j++){
            if(array[j] == letra){
                return true;
            }
        }
        return false;
    }
}
