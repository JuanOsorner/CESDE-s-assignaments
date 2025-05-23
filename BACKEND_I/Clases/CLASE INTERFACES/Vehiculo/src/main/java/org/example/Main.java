package org.example;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        Automovil a1 = new Automovil();

        a1.setPlaca("HJK787");
        a1.setMarca("Mazda 3");
        a1.setModelo("2021");
        a1.setPrecio(91000000);
        a1.setCoupe(false);

        a1.vender(a1.getPlaca(), a1.getPrecio(), "2022-06-01");
        System.out.println(a1.comprar(a1.getPlaca(),a1.getPrecio()));
        System.out.println(a1.comprar(a1.getPlaca()));
        a1.instalarSunRoof(a1.getPlaca());

        Camioneta c1 = new Camioneta("NBV789","Mazda CX30", "2021", 320000000,100,false);

        c1.vender(c1.getPlaca(),c1.getPrecio(),"2023-05-09");
        c1.financiar(c1.getPrecio());

    }
}