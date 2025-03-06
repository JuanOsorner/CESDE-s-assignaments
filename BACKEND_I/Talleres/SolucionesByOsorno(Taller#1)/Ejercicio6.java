import java.util.Random;
public class Ejercicio6 {
     public static void main(String[] args){
        Random rd = new Random();
        for (int i = 1; i < 10; i++) {
            int numA = rd.nextInt(3);
            int numB = rd.nextInt(3);
            System.out.println("La jugada (Player1,player2) "+i+" fue: "+ppt(numA, numB));
        }
     }
     // 0 == Piedra, 1 == tijera, 2 == papel
     public static String ppt(int n, int m){
        String resultado="";
        if(n == m){
            resultado = "("+n+","+m+")" + "EMPATE";
        } else if((n == 0 && m == 1)||(n==1 && m == 2)||(n==2 && m ==0)){
            resultado = "("+n+","+m+")"+"  Player 1 gana";
        }else if((m == 0 && n == 1)||(m == 1 && n == 2)||(m == 2 && n == 0)){
            resultado = "("+n+","+m+")"+" Player 2 gana";
        }
        return resultado; 
     }
     //Podriamos crear una funcion que acomule puntos
}
