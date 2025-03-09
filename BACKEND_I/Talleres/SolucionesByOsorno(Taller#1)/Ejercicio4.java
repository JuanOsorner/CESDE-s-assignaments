import java.util.Random;
public class Ejercicio4 {
    //Vamos a generar un numero decimal aleatorio entre 0 y 1 para no ingresar datos.
    public static void main(String[]args){
        Random rd = new Random();
        float num = rd.nextFloat();
        System.out.println(num);
        System.out.println(conversion(num));
    } //IDEA EN PROCESO
    public static int conversion(float x){
        String texto = String.valueOf(x);
        int tamaño = texto.length() - 2;
        double N = Math.pow(10, tamaño)*x;
        int M = (int) N; //HACEMOS LA CONVERSION A ENTERO
        return M;
    }
}
