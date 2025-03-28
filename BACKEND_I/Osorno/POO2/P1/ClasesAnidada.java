import java.util.function.IntBinaryOperator;

public class ClaseAnidada {
    private Integer nume1;
    private Integer nume2;
    public ClaseAnidada(){

    }
    public Integer getNume1() {
        return nume1;
    }
    public void setNume1(Integer nume1) {
        this.nume1 = nume1;
    }
    public Integer getNume2() {
        return nume2;
    }
    public void setNume2(Integer nume2) {
        this.nume2 = nume2;
    }
    public static class Producto{ //STATIC SOLAPA TODA LA CLASE SIN NECESIDAD DE INSTANCIAS
        public Integer producto(Integer num2){
            Integer num1 = 0;
            for(int i = 0; i<num2;i++){
                num1 += num1;
            }
            Integer produ = num1;
            return produ;
        }
    }
    public Integer[] SumaYproducto(Integer nume1, Integer nume2) {
        Producto producto = new Producto();
        Integer[] V = new Integer[2];
        this.nume2 = nume2;
        this.nume1 = nume1;
        Integer Suma = nume1 + nume2;
        Integer Multiplicacion = producto.producto(nume1);
        V[0] = V[Suma];
        V[1] = V[Multiplicacion];
        return V;
    }
}