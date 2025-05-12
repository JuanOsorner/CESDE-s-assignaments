public class Camioneta extends Vehiculo{
    private Integer tara; //ESTO ES PARA CASTEAR
    private boolean volco;
    public Camioneta(){
    }
    public Integer getTara() {
        return tara;
    }
    public void setTara(Integer tara) {
        this.tara = tara;
    }
    public boolean isVolco() {
        return volco;
    }
    public void setVolco(boolean volco) {
        this.volco = volco;
    }
    @Override
    public Integer Comprar(String placa, Integer precio){
        return precio > 20000000 ? 10500000 : 0;
    }
    @Override
    public Integer Comprar(String placa){
        return placa.equals("ABC123") ? 15000000 : 0;
    }
    @Override
    public void Vender(String placa,Integer precio,String fecha){
        if(placa.endsWith("7")&&precio<150000000){
            System.out.println("Gano el viaje a San Andres");
        }
    }
    public void repararVolco(String placa){
        System.out.println("Se repara volco de la camioneta con placa "+placa);
    }
}
