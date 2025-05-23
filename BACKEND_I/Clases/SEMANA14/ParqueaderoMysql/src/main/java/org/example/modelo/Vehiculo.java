package org.example.modelo;

public class Vehiculo {
    private String nroplaca;
    private String marca;
    private Integer precio;

    public Vehiculo() {
    }

    public Vehiculo(String nroplaca, String marca, Integer precio) {
        this.nroplaca = nroplaca;
        this.marca = marca;
        this.precio = precio;
    }

    public String getNroplaca() {
        return nroplaca;
    }

    public void setNroplaca(String nroplaca) {
        this.nroplaca = nroplaca;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public Integer getPrecio() {
        return precio;
    }

    public void setPrecio(Integer precio) {
        this.precio = precio;
    }
}


