package FichaPratica01;

import java.util.Scanner;

public class Ex07 {public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Introduza um valor: ");
    double num1 = input.nextDouble();
    System.out.print("Introduza outro valor: ");
    double num2 = input.nextDouble();
    System.out.print("Introduza outro valor: ");
    double num3 = input.nextDouble();
    double total = (num1 + num2 + num3) * 0.9;
    System.out.print("O total é: " + total);
}
}
