package FichaExtraCondicionais;

import java.util.Scanner;

public class Ex04 { public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Introduza uma letra: ");
    String letra = input.next();
    if (!letra.equals("a") && !letra.equals("e") && !letra.equals("i") && !letra.equals("o") && !letra.equals("u")) {
        System.out.println("A letra é uma consoante");
    } else {
        System.out.println("A letra é uma vogal");
    }

}
}
