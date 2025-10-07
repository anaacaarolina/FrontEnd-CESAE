package FichaPratica01;

import java.util.Scanner;

public class Ex06 { public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Introduza um valor: ");
    int num1 = input.nextInt();
    System.out.print("Introduza outro valor: ");
    int num2 = input.nextInt();
    num1 = num2 - num1;
    num2 -= num1;
    num1 = num2 + num1;
    System.out.println("Valor 1: " + num1);
    System.out.println("Valor 2: " + num2);
}
}

