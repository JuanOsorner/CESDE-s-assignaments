/*
    CLASES ABSTRACTAS

    (OBSERVACIONES)
    (1*)Las podemos usar como super clases: Una super plantilla que vamos a usar en otras clases.
            (*)No necesita instancias
    (2*)Podemos ahorrar codigo
    (3*)Se hace sobrescritura: 
    (*NOTACION*) @Override sirve para indicar que se hace sobreescritura
    (**-**)Beneficios:
            (*)Verificación en tiempo de compilación: El compilador verifica que realmente exista un 
            método con la misma firma en la superclase. Si no es así, se generará un error.
            (*)Claridad: Facilita la lectura del código, ya que queda explícito que el método es una 
            sobrescritura.
    (4*)USAMOS LA PALABRA ABSTRACT

    METODOS ABSTRACTOS

    "Un método abstracto es un método que no tiene implementación. Es decir, solo tiene una declaración... 
    Cuando una clase concreta extiende una clase abstracta, también debe implementar todos los métodos abstractos 
    de la clase principal." 
 */
public class Main {
    public static void main(String[] args) {
        Automovil a1 = new Automovil();
        //CREAR OBJETOS
    }
}
