package org.example.modelo;

import java.time.LocalDate;

public class Pago {
    private Integer id;
    private String nroplaca;
    private String idprop;
    private LocalDate fecha;
    private Integer valor;

    public Pago() {
    }

    public Pago(Integer id, String nroplaca, String idprop, LocalDate fecha, Integer valor) {
        this.id = id;
        this.nroplaca = nroplaca;
        this.idprop = idprop;
        this.fecha = fecha;
        this.valor = valor;

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNroplaca() {
        return nroplaca;
    }

    public void setNroplaca(String nroplaca) {
        this.nroplaca = nroplaca;
    }

    public String getIdprop() {
        return idprop;
    }

    public void setIdprop(String idprop) {
        this.idprop = idprop;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public Integer getValor() {
        return valor;
    }

    public void setValor(Integer valor) {
        this.valor = valor;
    }
}
