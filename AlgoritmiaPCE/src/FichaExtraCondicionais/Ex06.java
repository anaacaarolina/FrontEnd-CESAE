package FichaExtraCondicionais;

import java.util.Scanner;

public class Ex06 {public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    boolean bissexto = false;
    System.out.print("Insira o ano: ");
    int ano = input.nextInt();
    if (ano % 400 == 0) {
        System.out.print("É bissexto");
    } else if (ano % 4 == 0 && ano % 100 != 0) {
        System.out.println("É bissexto");
    } else {
        System.out.println("Não é bissexto");
    }

}
}
