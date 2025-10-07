package FichaExtraCondicionais;

import java.util.Scanner;

public class Ex02 {public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Introduza o seu peso (em Kg): ");
    double peso = (double)input.nextInt();
    if (peso >= (double)0.0F) {
        double pesoLua = peso * 0.16;
        System.out.print("Peso na lua: " + pesoLua);
    } else {
        System.out.print("O peso é inválido.");
    }

}
}
