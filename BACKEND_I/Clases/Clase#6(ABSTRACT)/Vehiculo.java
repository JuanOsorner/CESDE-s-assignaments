//Esta clase no se puede instanciar
public abstract class Vehiculo {
    private String placa;
    private String marca;
    private String modelo;
    private Integer precio;
    public Vehiculo(){
    }
    public String getPlaca() {
        return placa;
    }
    public void setPlaca(String placa) {
        this.placa = placa;
    }
    public String getMarca() {
        return marca;
    }
    public void setMarca(String marca) {
        this.marca = marca;
    }
    public String getModelo() {
        return modelo;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
    public Integer getPrecio() {
        return precio;
    }
    public void setPrecio(Integer precio) {
        this.precio = precio;
    }
    //NO TIENEN CUERPO(*!!*)
    public abstract Integer Comprar(String placa, Integer precio);
    public abstract  void Vender(String placa, Integer precio, String fecha);
    public abstract Integer Comprar(String placa);
    //Esto lo vamos a hacer para reutilizar CODIGO