package org.example;

public class Automovil extends Vehiculo implements iVehiculo1{

    private Boolean coupe;

    public Automovil() {
    }

    @Override
    public void vender(String placa, Integer precio, String fecha) {
        System.out.println(precio > 90000000 ? "¡Felicidades! Se ha ganado un viaje a Jérico - Israel": "¡Felicidades! Se ha ganado un viaje a Jérico - Antioquia");
    }

    public Automovil(String placa, String marca, String modelo, Integer precio, Boolean coupe) {
        super(placa, marca, modelo, precio);
        this.coupe = coupe;
    }

    public Boolean getCoupe() {
        return coupe;
    }

    public void setCoupe(Boolean coupe) {
        this.coupe = coupe;
    }

    @Override
    public Integer comprar(String placa, Integer precio) {
        return placa.endsWith("7") && precio > 90000000 ? 5000000 : 0;
    }

    @Override
    public Integer comprar(String placa) {
        return placa.equals("ABC123") ? 10000000 : 0;
    }

    public void instalarSunRoof(String placa){
        System.out.println("Instalado techo corredizo en placa: " + placa);
    }

}
