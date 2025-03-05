import java.util.Random;
public class Ejercicio6 {
     public static void main(String[] args){
        Random rd = new Random();
        for (int i = 0; i < 9; i++) {
            int numA = rd.nextInt(2);
            int numB = rd.nextInt(2);
            System.out.println("La jugada (Player1,player2) "+i+" fue: "+ppt(numA, numB));
        }
     }
     public static String ppt(int n, int m){
        String resultado;
        if(n == 0 && m == 0){
            resultado = "("+n+","+m+")" + "EMPATE";
        } else {
            resultado = "POR AHORA CUALQUIER OTRA COSA";
        }
        return resultado; 
     }
}
