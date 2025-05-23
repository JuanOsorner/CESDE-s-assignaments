package org.example.datos;

import org.example.modelo.Vehiculo;

import java.sql.Connection;  // Importa Connection desde java.sql
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class VehiculoCrud {
    // Credenciales para tener acceso a MySQL y la BD dbparquea
    private final String url = "jdbc:mysql://localhost:3306/dbparquea";
    private final String user = "root";
    private final String password = "";

    // Método para realizar la conexión con base a las credenciales
    public Connection conectar() throws SQLException {
        return DriverManager.getConnection(url, user, password);
    }

    // Métodos para el CRUD del vehículo
    public void agregarVehiculo(Vehiculo vehiculo) {
        String sql = "INSERT INTO vehiculo (nroplaca, marca, precio) VALUES (?, ?, ?)";

        try (Connection conn = conectar(); PreparedStatement stmt = conn.prepareStatement(sql)) {
            // Aquí, usas el objeto 'vehiculo' para acceder a sus métodos
            stmt.setString(1, vehiculo.getNroplaca());  // 'vehiculo' es el objeto
            stmt.setString(2, vehiculo.getMarca());
            stmt.setInt(3, vehiculo.getPrecio());
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
