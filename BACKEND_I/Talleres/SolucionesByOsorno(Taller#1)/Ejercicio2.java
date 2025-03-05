import java.util.Random;
public class Ejercicio2 {
    //Primera idea: Vamos a crear una funcion que tome la palabra ingresada
    // y este haga permutaciones con sus letras. Luego veremos que mas hacer para arrojar si las palabras
    // son o no anagramas
    public static void main(String[] args){
        String texto = "amor";
        System.out.println(permutacion(texto));
    }
    //Hasta el momento el unico problema es que quizas no tome nunca la posicion de una letra
    //problemas de aleoriedad (HAY QUE REGAÑAR OBLIGAR AL NIÑO)
    public static char[] permutacion(String palabra){
        Random rd = new Random();
        int tamaño = palabra.length();
        char[] V = new char[tamaño];
        for (int i = 0; i < V.length; i++) {
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
}
