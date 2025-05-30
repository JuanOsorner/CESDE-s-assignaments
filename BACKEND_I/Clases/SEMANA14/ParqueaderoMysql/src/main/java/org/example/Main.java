package org.example;

import org.example.datos.VehiculoCrud;
import org.example.modelo.Vehiculo;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Generar la conexion al servidor y su base de datos
        VehiculoCrud ovh = new VehiculoCrud(); //RECORDAR QUE AL NO DEFINIR SIEMPRE SE TIENE EL VACIO
        //Definir variable de tipo connection
        Connection cnx = null;
        //VAMOS A VERIFICAR LA CONEXION (SOLO PARA PROBAR)
        try{
            cnx = ovh.conectar();
            //MARCAMOS UN ERROR DE SQLException
            if(cnx != null && !cnx.isClosed()){ //NO ESTA CERRADA LA CONEXION
                //System.out.println("CONECTADO");
                //Menu para el CRUD de Vehiculo (UNA FORMA DE HACERLO)
                Integer opcion = 0;
                do{
                    System.out.println("\n CRUD de Vehiculo \n");
                    System.out.println("1. Agregar vehiculo: ");
                    System.out.println("2. Consultar por placa: ");
                    System.out.println("3. Actualizar: ");
                    System.out.println("4. Eliminar: ");
                    System.out.println("5. Listar: ");
                    System.out.println("6. Finalizar: ");
                    System.out.println("Opción");
                    opcion = sc.nextInt();
                    sc.nextLine(); //PARA EVITAR PROBLEMAS
                    switch (opcion){
                        case 1:
                            //Pedir los datos de los vehiculos
                            System.out.println("Ingrese nro placa: ");
                            String Aplaca = sc.nextLine();
                            System.out.println("Ingrese LA MARCA: ");
                            String Amarca = sc.nextLine();
                            System.out.println("Ingrese el precio: ");
                            Integer Aprecio = sc.nextInt();
                            //Invocar el metodo del crud (ACCEDEMOS A Vehiculo desde el crud)
                            //Sobre el main molestamos el crud
                            ovh.agregarVehiculo(new Vehiculo(Aplaca,Amarca,Aprecio));
                            System.out.println("Exito");
                            break;
                        case 2:
                            System.out.println("Numero de placa a buscar: ");
                            String findNroplaca = sc.nextLine();
                            //Invocar el metodo buscarVehiculoxPlaca
                            if(!ovh.buscarVehiculoxPlaca(findNroplaca).isEmpty()){
                                //Recorrer la lista que devolvio el metodo
                                ovh.buscarVehiculoxPlaca(findNroplaca).forEach(vehiculo ->
                                        System.out.println(vehiculo.getNroplaca()+"-"+vehiculo.getMarca()+"-"+vehiculo.getPrecio()));
                                //BUSCAR SOBRE ESTA PARTE DEL CODIGO
                            }else{
                                System.out.println("Numero de placa INEXISTENTE. Intentelo con otra");
                            }
                            break;
                        case 3:
                            System.out.println("Ingrese el numero de placa: ");
                            String actnumeroPlaca = sc.nextLine();
                            if(!ovh.buscarVehiculoxPlaca((actnumeroPlaca)).isEmpty()){
                                System.out.println("Ingrese la nueva placa");
                                String actmarca = sc.nextLine();
                                System.out.println("Ingrese el nuevo precio");
                                Integer actPrecio = sc.nextInt();
                                sc.nextLine();
                                Vehiculo Vehiculo  = new Vehiculo(actnumeroPlaca, actmarca, actPrecio);
                                ovh.actualizarVehiculo(Vehiculo);
                                System.out.println("Vehculo actualizado correctamente");
                            }else{
                                System.out.println("Numero de placa NO EXISTE.");
                            }
                            break;
                    }
                } while(opcion !=6);
            }
        } catch(SQLException e){ //SE PUEDE PONER e O BIEN error (LA VARIABLE QUE SE QUIERA)
            System.out.println("ERROR EN LA CONEXION CON MySQL");
        }

    }
}