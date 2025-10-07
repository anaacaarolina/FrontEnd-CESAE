package FichaPratica01;

import java.util.Scanner;

public class Ex02 {public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Introduza um número: ");
    int num1 = input.nextInt();
    System.out.print("Introduza um número: ");
    int num2 = input.nextInt();
    int soma = num1 + num2;
    int subtracao = num1 - num2;
    int multiplicacao = num1 * num2;
    int divisao = num1 / num2;
    System.out.println("\nSoma: " + soma);
    System.out.println("Subtração: " + subtracao);
    System.out.println("Multiplicação: " + multiplicacao);
    System.out.println("Divisão: " + divisao);
}
}
