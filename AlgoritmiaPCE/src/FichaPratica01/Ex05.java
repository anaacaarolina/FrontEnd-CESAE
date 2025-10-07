package FichaPratica01;

import java.util.Scanner;

public class Ex05 {public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Introduza um valor: ");
    double num1 = input.nextDouble();
    System.out.print("Introduza outro valor: ");
    double num2 = input.nextDouble();
    System.out.print("Introduza outro valor: ");
    double num3 = input.nextDouble();
    double media = (num1 + num2 + num3) / (double)3.0F;
    double mediaPonderada = num1 * 0.2 + num2 * 0.3 + num3 * (double)0.5F;
    System.out.println("Média: " + media);
    System.out.println("Média: " + mediaPonderada);
}
}
