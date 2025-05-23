package org.example.modelo;

public class Propietario {
    private String idprop;
    private String nombre;
    private String telefono;

    public Propietario() {
    }

    public Propietario(String idprop, String nombre, String telefono) {
        this.idprop = idprop;
        this.nombre = nombre;
        this.telefono = telefono;
    }

    public String getIdprop() {
        return idprop;
    }

    public void setIdprop(String idprop) {
        this.idprop = idprop;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
}
