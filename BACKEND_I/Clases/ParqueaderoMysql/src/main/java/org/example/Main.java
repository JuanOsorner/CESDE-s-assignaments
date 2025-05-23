package org.example;

import org.example.datos.VehiculoCrud;
import org.example.modelo.Vehiculo;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Crear una instancia de VehiculoCrud para generar la conexión al servidor y la base de datos
        VehiculoCrud ovh = new VehiculoCrud();
        // Definir variable de tipo conexión
        Connection cnx = null;

        try {
            // Intentar conectar
            cnx = ovh.conectar();

            // Verificación con condicional
            if (cnx != null && !cnx.isClosed()) {
               Integer option = 0;

               do {
                   System.out.println("\n CRUD de Vehículos \n");
                   System.out.println("1. Agregar");
                   System.out.println("2. Consultar por placa");
                   System.out.println("3. Actualizar");
                   System.out.println("4. Eliminar");
                   System.out.println("5. Listar");
                   System.out.println("6. Finalizar");
                   System.out.println("\nOpción: ");
                   option = sc.nextInt();
                   sc.nextLine();
                   switch (option){
                       case 1:
                           // Petición de los datos del vehículo
                           System.out.print("Ingrese número de placa: ");
                           String anroplaca = sc.nextLine();
                           System.out.print("Marca:");
                           String amarca = sc.nextLine();
                           System.out.print("Precio:");
                           Integer aprecio = sc.nextInt();
                           // Invocar el método para agregar el vehículo
                           ovh.agregarVehiculo(new Vehiculo(anroplaca,amarca,aprecio));
                           System.out.println("Vehículo agregado correctamente.");
                           break;
                   }

               }
                while (option!=6);
            }
        } catch (SQLException e) {
            System.out.println("Error al conectar con la base de datos");
            e.printStackTrace();  // Es recomendable imprimir la pila de errores para debug
        } finally {
            // Asegúrate de cerrar la conexión si se abrió
            try {
                if (cnx != null && !cnx.isClosed()) {
                    cnx.close();
                    System.out.println("Conexión cerrada correctamente.");
                }
            } catch (SQLException ex) {
                System.out.println("Error al cerrar la conexión.");
                ex.printStackTrace();
            }
        }
    }
}
