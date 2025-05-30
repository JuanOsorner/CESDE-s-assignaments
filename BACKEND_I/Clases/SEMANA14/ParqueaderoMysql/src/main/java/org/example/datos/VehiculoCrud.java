package org.example.datos;

import org.example.modelo.Vehiculo;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class VehiculoCrud {
    // Credenciales para conectarse a MySQL (bd: dbparquea en localhost:3306)
    private final String url = "jdbc:mysql://localhost:3306/dbparquea";
    private final String user = "root";
    private final String password = "";

    /**
     * Abre y devuelve una conexión a la base de datos.
     */
    public Connection conectar() throws SQLException {
        return DriverManager.getConnection(url, user, password);
    }

    /**
     * Inserta un nuevo vehículo en la tabla.
     */
    public void agregarVehiculo(Vehiculo vehiculo) {
        String sql = "INSERT INTO vehiculo (nroplaca, marca, precio) VALUES (?, ?, ?)";
        try (Connection conn = conectar();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, vehiculo.getNroplaca());
            stmt.setString(2, vehiculo.getMarca());
            stmt.setInt(3, vehiculo.getPrecio());
            stmt.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    /**
     * Busca todos los vehículos que coincidan con la placa dada.
     * @param nroplaca la placa a buscar
     * @return lista de Vehiculo
     */
    public List<Vehiculo> buscarVehiculoxPlaca(String nroplaca) {
        List<Vehiculo> resultados = new ArrayList<>();
        String query = "SELECT nroplaca, marca, precio FROM vehiculo WHERE nroplaca = ?";

        try (Connection cnx = conectar();
             PreparedStatement pstmt = cnx.prepareStatement(query)) {

            pstmt.setString(1, nroplaca);
            try (ResultSet rs = pstmt.executeQuery()) {
                while (rs.next()) {
                    Vehiculo vh = new Vehiculo(
                            rs.getString("nroplaca"),
                            rs.getString("marca"),
                            rs.getInt("precio")
                    );
                    resultados.add(vh);
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return resultados;
    }

    /**
     * Lista todos los vehículos de la tabla.
     * @return lista de Vehiculo
     */
    public List<Vehiculo> listarTodosLosVehiculos() {
        List<Vehiculo> resultados = new ArrayList<>();
        String query = "SELECT nroplaca, marca, precio FROM vehiculo";

        try (Connection cnx = conectar();
             PreparedStatement pstmt = cnx.prepareStatement(query);
             ResultSet rs = pstmt.executeQuery()) {

            while (rs.next()) {
                Vehiculo vh = new Vehiculo(
                        rs.getString("nroplaca"),
                        rs.getString("marca"),
                        rs.getInt("precio")
                );
                resultados.add(vh);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return resultados;
    }

    /**
     * Actualiza marca y precio de un vehículo identificado por su placa.
     */
    public void actualizarVehiculo(Vehiculo vehiculoActualizado) {
        String sql = "UPDATE vehiculo SET marca = ?, precio = ? WHERE nroplaca = ?";

        try (Connection conn = conectar();
             PreparedStatement psmt = conn.prepareStatement(sql)) {

            psmt.setString(1, vehiculoActualizado.getMarca());
            psmt.setInt(2, vehiculoActualizado.getPrecio());
            psmt.setString(3, vehiculoActualizado.getNroplaca());
            psmt.executeUpdate();

        } catch (SQLException err) {
            err.printStackTrace();
        }
    }

    /**
     * Elimina el vehículo con la placa indicada.
     */
    public void eliminarVehiculo(String nroplaca) {
        String sql = "DELETE FROM vehiculo WHERE nroplaca = ?";

        try (Connection cnn = conectar();
             PreparedStatement pst = cnn.prepareStatement(sql)) {

            pst.setString(1, nroplaca);
            pst.executeUpdate();

        } catch (SQLException error) {
            error.printStackTrace();
        }
    }
}



/*Por qué recibe un parámetro Vehiculo vehiculo
El método necesita la información del vehículo que se quiere agregar.

En lugar de pasar varios parámetros (placa, marca, precio), recibe un objeto completo de tipo Vehiculo.

Esto permite tener el método más limpio y escalable, porque si la clase Vehiculo cambia (por ejemplo, añade un nuevo atributo), no tienes que modificar la firma del método, solo usar el nuevo atributo dentro.

Además, respeta el principio de programación orientada a objetos: trabajar con objetos completos en lugar de valores aislados.*/


