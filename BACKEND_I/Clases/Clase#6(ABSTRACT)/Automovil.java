public class Automovil extends Vehiculo {
    private boolean coupe;
    public Automovil(){
    }
    public boolean getCoupe() {
        return coupe;
    }
    public void setCoupe(boolean coupe) {
        this.coupe = coupe;
    }
    @Override //Polimorfismo
    public Integer Comprar(String placa, Integer precio){
        //NO OLVIDAR EL OPERADOR TERNARIO
        return precio>90000000 ? 2000000 : 0;
    }
    @Override
    public Integer Comprar(String placa){
        //return placa.charAt(placa.length()-1)=='8' ? 8000000 : 0;
        return placa.endsWith("8") ? 8000000 : 0;
    }
    @Override
    public void Vender(String placa,Integer precio,String fecha){
        System.out.println("Vehiculo con placa: "+placa+"\nPrecio: "+precio+"\nFecha: "+fecha);
    }
    public void InstalarSunroof(String placa){
        if(placa.startsWith("A")||placa.startsWith("a")){
            System.out.println("El auto no se puede vender");
        }else{
            System.out.println("Se puede vender");
        }
    }
}