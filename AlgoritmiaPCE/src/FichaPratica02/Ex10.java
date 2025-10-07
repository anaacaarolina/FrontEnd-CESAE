package FichaPratica02;

import java.util.Scanner;

public class Ex10 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Introduza um número: ");
        double num1 = input.nextDouble();
        System.out.print("Introduza um número: ");
        double num2 = input.nextDouble();
        System.out.print("Introduza um operador (+ - * /): ");
        String operador = input.next();
        double soma = num1 + num2;
        double subtracao = num1 - num2;
        double multiplicacao = num1 * num2;
        double divisao = num1 / num2;
        switch (operador) {
            case "+" -> System.out.print(soma);
            case "-" -> System.out.print(subtracao);
            case "*" -> System.out.print(multiplicacao);
            case "/" -> System.out.println(divisao);
            default -> System.out.print("Erro: o operador é inválido");
        }

    }
}
