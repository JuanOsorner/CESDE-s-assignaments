package org.example;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {

    public static float sumar (float num1, float num2){

        return num1 + num2;
    }

    public static void main(String[] args) {

        double valor1 = 23;
        double  valor2 = 0;

        System.out.println("Suma: " + operacion(valor1, valor2, "suma"));
        System.out.println("Resta: " + operacion(valor1, valor2, "resta"));
        System.out.println("Multiplicación: " + operacion(valor1, valor2, "multiplicacion"));
        System.out.println("División: " + operacion(valor1, valor2, "division"));



    }


    //Generar un método que retorne la suma o resta o multiplicación o división de 2 números cualquiera

    public static double operacion(double numb1, double numb2, String operacion) {
        switch (operacion) {
            case "suma":
                return numb1 + numb2;
            case "resta":
                return numb1 - numb2;
            case "multiplicacion":
                return numb1 * numb2;
            case "division":
                if (numb2 != 0) {
                    return numb1 / numb2;
                } else {
                    System.out.println("Error: División por cero");
                    return Double.NaN;
                }
            default:
                System.out.println("Operación no válida");
                return Double.NaN;
        }
    }

}
