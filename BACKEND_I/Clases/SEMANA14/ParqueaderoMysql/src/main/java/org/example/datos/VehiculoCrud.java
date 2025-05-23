package org.example.datos;

//PARA QUITAR EL ERROR EN Connection si sale rojo

import org.example.modelo.Vehiculo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
//SIMPLEMENTE ESTAMOS CREANDO UNA CLASE COMO SIEMPRE
public class VehiculoCrud {
    //(**)Credenciales para tener axceso a MySQL y la BD dbparqueadero
    //SACAMOS ESTA INFORMACION DE DEL CRUD
    //(**)Observacion: TENER CUIDADO CON EL PUERTO

    private final String url = "jdbc:mysql://localhost:3306/dbparquea"; //SOLO BD NAME
    private final String user = "root";
    private final String password = "";

    //(**)YA NOS PODEMOS CONECTAR
    //METODO PARA REALIZAR LA CONEXION CON BASE EN LAS CREDENCIALES

    public Connection conectar() throws SQLException{
        return DriverManager.getConnection(url,user,password);
    }
    // Metodos para el CRUD de Vehiculo

    //NO ES NECESARIO INSTANCIAR LOS OBJETOS, SOLO IMPORTAMOS
    public void agregarVehiculo(Vehiculo vehiculo) {
        String sql = "INSERT INTO vehiculo (nroplaca, marca, precio) VALUES (?, ?, ?)";

        //stmt es una palabra elegida por el profesor
        //(**) Esto es para llenar las tablas en la base de datos
        //PEDIR A CHATGPT QUE EXPLIQUE MEJOR ESTA PARTE DEL CODIGO
        try (Connection conn = conectar(); PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, vehiculo.getNroplaca());
            stmt.setString(2, vehiculo.getMarca());
            stmt.setInt(3, vehiculo.getPrecio());
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

/*Por qué recibe un parámetro Vehiculo vehiculo
El método necesita la información del vehículo que se quiere agregar.

En lugar de pasar varios parámetros (placa, marca, precio), recibe un objeto completo de tipo Vehiculo.

Esto permite tener el método más limpio y escalable, porque si la clase Vehiculo cambia (por ejemplo, añade un nuevo atributo), no tienes que modificar la firma del método, solo usar el nuevo atributo dentro.

Además, respeta el principio de programación orientada a objetos: trabajar con objetos completos en lugar de valores aislados.*/


