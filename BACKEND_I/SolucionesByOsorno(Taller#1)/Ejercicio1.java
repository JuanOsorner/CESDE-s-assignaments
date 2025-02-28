public class Ejercicio1{
    //FizzBuzz
    public static void main(String[] args){
        for (int i = 1; i <= 100; i++) {
            if(i%3==0 && i%5==0){
                System.out.println(i+"fizzbuzz \n");
            } else if(i%3==0){
                System.out.println(i+"fizz \n");
            } else if(i%5==0){
                System.out.println(i+"buzz \n");
            } else{
                System.out.println(i+"\n");
            }
        }
    }        
}