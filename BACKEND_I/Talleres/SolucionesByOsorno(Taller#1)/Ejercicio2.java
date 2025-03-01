import java.util.Random;
public class Ejercicio2 {
    //Primera idea: Vamos a crear una funcion que tome la palabra ingresada
    // y este haga permutaciones con sus letras. Luego veremos que mas hacer para arrojar si las palabras
    // son o no anagramas
    public static void main(String[] args){
        String texto = "amor";
        char[] W = new char[4];
        //Mientras tanto creare este ciclo para llenar el vector W con la palabra amor
        for (int i = 0; i < W.length; i++) {
            W[i] = texto.charAt(i);
        }
        System.out.println(permutacion(texto));
        System.out.println(W);
    }
    //Hasta el momento el unico problema es que quizas no tome nunca la posicion de una letra
    //problemas de aleoriedad (HAY QUE REGAÑAR OBLIGAR AL NIÑO)
    public static char[] permutacion(String palabra){
        Random rd = new Random();
        int tamaño = palabra.length();
        char[] V = new char[tamaño];
        for (int i = 0; i < V.length+1; i++) {
            int Num = rd.nextInt(100);
            char L = palabra.charAt(Num%tamaño);
            if(!contieneL(V,L,i)){
                V[i] = L;
            }  
        }
        return V;
    }
    //(**)Creamos una funcion que recorra el vector antes de i y mande booleanos
    //Esto es una buena idea cuando necesitemos hacer uso de condicionales (LLAMAR FUNCIONES BOOLEANAS)
    public static boolean contieneL(char[] array, char letra, int n){
        for(int j = 0; j < n; j++){
            if(array[j] == letra){
                return true; 
            }
        }
        return false;
    }
    //Crearemos otra funcion que compare dos vectores y mire si a uno le falta una o no otra letra
    //Esta funcion compara si le faltan
    public static boolean comparacion(char[] A, char[] B){
        return false;
    }
}
