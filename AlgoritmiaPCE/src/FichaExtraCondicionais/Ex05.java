package FichaExtraCondicionais;

import java.util.Scanner;

public class Ex05 {public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    int numero = 31;
    System.out.print("Adivinhe o número (1 a 100): ");
    int tentativa = input.nextInt();
    if (tentativa == numero) {
        System.out.println("Boa! Ganhaste o jogo!");
    } else if (tentativa < numero) {
        System.out.println("Muito baixo");
        System.out.print("Adivinhe o número: ");
        tentativa = input.nextInt();
        if (tentativa == numero) {
            System.out.println("Boa! Ganhaste o jogo!");
        } else if (tentativa < numero) {
            System.out.println("Muito baixo\nFicaste sem tentativas");
        } else {
            System.out.println("Muito alto\nFicaste sem tentativas");
        }
    } else {
        System.out.println("Muito alto");
        System.out.print("Adivinhe o número: ");
        tentativa = input.nextInt();
        if (tentativa == numero) {
            System.out.println("Boa! Ganhaste o jogo!");
        } else if (tentativa < numero) {
            System.out.println("Muito baixo\nFicaste sem tentativas");
        } else {
            System.out.println("Muito alto\nFicaste sem tentativas");
        }
    }

}
}
