public class Ejercicio3 {
    //Sucesion de Fubonacci
    //(*)Observacion: La sucesion de fibonacci es recursiva:
    //empezareos con condiciones iniciales 0 y 1, sumamos 0 + 1 = 1,
    //esto nos da el siguiente termino de la sucesion, luego sumamos
    // 1+1 = 2 y obtenemos el siguiente y asi de manera sucesiva.
    public static void main(String[] args){
        //Condiciones iniciales
        int x = 0, y = 1;
        System.out.println(x);
        for (int i = 2; i <= 12; i++) {
            int z = x + y; //Recordemos que en programacion = no es igual sino un simbolo de actualizar datos
            System.out.println(z);
            y = z;
            x = x + y;
            System.out.println(x);
        }
    }
}
