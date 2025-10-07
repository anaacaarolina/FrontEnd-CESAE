package FichaExtraCondicionais;

import java.util.Scanner;

public class Ex03 {public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Introduza o preço: ");
    double preco = input.nextDouble();
    if (preco > (double)100.0F) {
        double desconto = preco * 0.9;
        System.out.println("Preço Final: " + desconto + " (10% de desconto)");
    } else {
        System.out.println("Preço Final: " + preco + " Sem desconto");
    }

}
}
