import java.util.Scanner;
public class Ejercicio10 {
    //PARA ESTE ALGORITMO VAMOS A HACER USO DE LA FORMULA DE ZELLER (INVESTIGAR)
    //Consideremos int piso = (int) Math.floor(numero)
    public static void main(String[]args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Ingrese el año: ");
        int año = sc.nextInt();
        System.out.println("Ajuste \nEnero = 13 \nFebrero = 14");
        System.out.println("Ingrese el mes: ");
        int mes = sc.nextInt();
        System.out.println(ver(año, mes));
    }
    //x == año, y == mes
    public static String ver(int x, int y){
        String si = ""; //Los booleanos inicializan en null
        String no = "";
        int K = x%100;
        int J = (int) Math.floor(x/100);
        int A = (int) Math.floor((13*(y+1))/5);
        int B = (int) Math.floor(K/4);
        int C = (int) Math.floor(J/4);
        for (int i = 0; i < 7; i++) {
            int q = (i-(A + K + B + C + 5*J))%7;
            if(q != 13){
                no = "FALSO";
            }else{
                si = "Verdadero";
            }
        }
        return si + no;
    }
    //Este algoritmo tiene un defecto debe ser corregido
}
