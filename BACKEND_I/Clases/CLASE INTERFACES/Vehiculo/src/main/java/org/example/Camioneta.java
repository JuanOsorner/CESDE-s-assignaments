package org.example;

public class Camioneta extends Vehiculo implements iVehiculo1, iVehiculo2{
    private Integer tara;
    private Boolean volco;
    public Camioneta(){

    }

    @Override
    public void vender(String placa, Integer precio, String fecha) {
        System.out.println(precio > 200000000 ? "Descuento de 50.000.000" : "No tiene descuento");
    }

    public Camioneta(String placa, String marca, String modelo, Integer precio, Integer tara, Boolean volco) {
        super(placa, marca, modelo, precio);
        this.tara = tara;
        this.volco = volco;
    }

    public Integer getTara() {
        return tara;
    }

    public void setTara(Integer tara) {
        this.tara = tara;
    }

    public Boolean getVolco() {
        return volco;
    }

    public void setVolco(Boolean volco) {
        this.volco = volco;
    }


    @Override
    public Integer comprar(String placa, Integer precio) {
        return precio > 500000000 ? 100000000 : 0;
    }

    @Override
    public Integer comprar(String placa) {
        return placa.startsWith("C") ? 500000 : 0;
    }

    @Override
    public void financiar(Integer precio) {
        System.out.println(precio>300000000 ? "Se debe financiar esta camioneta con placa: " + this.getPlaca(): "");
    }

    public void repararVolco(String placa){
        System.out.println("Se repara volco a camioneta con placa: "+ placa);
    }


}
