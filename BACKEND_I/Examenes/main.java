public class Main {
    public static void main(String[] args) {
        Inmueble inmueble = new Inmueble();
        Oficina oficina = new Oficina();
        Casa casa = new Casa();
        inmueble.setCodigo("ABC123");
        inmueble.setDireccion("calle45A");
        inmueble.setTelefono("3136901716");
        inmueble.Radicar(inmueble.getCodigo());
        inmueble.Arrendar(inmueble.getCodigo());
        System.out.println(inmueble.getDireccion());
        System.out.println(inmueble.getTelefono());
        oficina.InstalarInternet();
        casa.repararJardin();
    }
}