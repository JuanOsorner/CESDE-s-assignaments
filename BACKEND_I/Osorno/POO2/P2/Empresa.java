public class Empresa {
    public Empresa(){
    }
    public class Empleado{
        private String nombre;
        private float salario;
        //Cuando creamos asi los constructores no es necesario hacer uso de getters and setters
        public Empleado(String nombre, float salario){
            this.nombre = nombre;
            this.salario = salario;
            if(salario > 100.123) {
                System.out.println("El nombre del empleado es: " + nombre);
            }else{
                System.out.println("El salario es: "+salario);
            }
        }
        public void mostrarInf(String nombre, float salario){
            System.out.println("El empleado con nombre: "+nombre+"\nSalario: "+salario);
        }
    }
    public static class Departamento{
        private String nombreDepartamento;
        private float presupuesto;
        public Departamento(String nombreDepartamento,float presupuesto){
            this.nombreDepartamento = nombreDepartamento;
            this.presupuesto = presupuesto;
        }
        public void inform(String nombreDepartamento,float presupuesto){
            System.out.println("El departamento: "+nombreDepartamento
                    +"\nCon presupuesto: "+presupuesto);
        }
    }
}
