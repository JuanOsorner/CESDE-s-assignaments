ic class Main {
    public static void main(String[] args) {
       Empresa em = new Empresa(); //Instanciamos
       //Asi instanciamos una clase anidada
       Empresa.Empleado empl = em.new Empleado("Juan",123.34f);
       empl.mostrarInf("Juan",12333.0003f);
       //Asi se instancia una clase static anidada
       Empresa.Departamento departamento = new Empresa.Departamento("BLABLA",1345.23f);
       departamento.inform("dsdsds",123323.323f);
    }
