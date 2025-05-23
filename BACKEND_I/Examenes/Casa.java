public class Casa extends Inmueble{
    private byte nroHabitaciones;
    public Casa(){

    }
    public void repararJardin(){
        System.out.println("\nReparando");
    }
    public byte getNroHabitaciones() {
        return nroHabitaciones;
    }
    public void setNroHabitaciones(byte nroHabitaciones) {
        this.nroHabitaciones = nroHabitaciones;
    }
}