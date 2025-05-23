import java.util.Random;
public class test {
    public static void main(String[] args){
        //Crearemos una funcion que tome una palabra y la permute
        String palabra = "amor";
        System.out.println(permutaciones(palabra));
    }
    public static char[] permutaciones(String S){
        Random rd = new Random();
        int tamaño = S.length();
        char b = '.';
        char [] V = new char[tamaño];
        for (int j = 0; j < V.length; j++) {
            int enteroA = rd.nextInt(9); 
            char a = S.charAt(enteroA%tamaño);
            if(b == a){
                a = S.charAt((enteroA+1)%tamaño);
                V[j] = a;
                b = a;
            } else {
                V[j] = a;
                b = a;
            }
        }
        return V;
    }
    //Tomemos la letra a y la palabra amor, si a esta en amor, elegir otra letra distinta. 
}
