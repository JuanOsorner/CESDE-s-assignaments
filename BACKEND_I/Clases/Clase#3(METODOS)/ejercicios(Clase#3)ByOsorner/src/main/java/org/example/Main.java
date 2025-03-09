package org.example;
import java.util.Arrays;
import java.util.Random;
public class Main {
    public static void main(String[] args) {
        Random rd = new Random();
        double n = rd.nextDouble(100);
        double m = rd.nextDouble(100);
        int a = rd.nextInt(10);
        //Para imprimir un vector
        System.out.println("[SUMA,RESTA,MULTIPLICAION,DIVISION.EXPONENCIACION,RADICACION] = "+Arrays.toString(operacion(n,m,a)));
    }
    public static double[] operacion(double x, double y,int b) {
        double[] V = new double[6];
        V[0] = x + y;
        V[1] = x - y;
        V[2] = x * y;
        V[3] = (y != 0) ? x / y : 0; //MEJOR
        V[4] = Math.pow(x,2);
        V[5] = (b!=0) ? Math.pow(x, (double) 1 /b) : 0; //OJO
        return V;
    }
}