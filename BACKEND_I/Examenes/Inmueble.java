public class Inmueble {
    private String codigo;
    private String direccion;
    private String telefono;
    public Inmueble(){

    }
    public void Radicar(String codigo){
        System.out.println("\nEsta radicando el codigo "+codigo);
    }
    public void Arrendar(String codigo){
        System.out.println("\nEsta arrendando la casa con codigo "+codigo);
    }
    public String getCodigo() {
        return codigo;
    }
    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }
    public String getDireccion() {
        return direccion;
    }
    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
    public String getTelefono() {
        return telefono;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
}
