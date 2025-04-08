public class Oficina extends Inmueble{
    private String salaAsamblea;
    public Oficina(){

    }
    public void InstalarInternet(){
        System.out.println("\nSe esta instalando el internet");
    }
    public String getSalaAsamblea() {
        return salaAsamblea;
    }
    public void setSalaAsamblea(String salaAsamblea) {
        this.salaAsamblea = salaAsamblea;
    }
}
