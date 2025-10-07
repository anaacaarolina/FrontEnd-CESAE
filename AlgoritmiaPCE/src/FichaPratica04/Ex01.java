package FichaPratica04;

import java.util.Scanner;

public class Ex01 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        boolean continuar = true;

        while(continuar) {
            System.out.print("Introduza um número: ");
            int valor1 = input.nextInt();
            System.out.print("Introduza outro número: ");
            int valor2 = input.nextInt();
            System.out.print("Introduza um operador: ");
            String operador = input.next();
            if (operador.equals("+")) {
                int operacao = valor1 + valor2;
                System.out.println(operacao);
            }

            if (operador.equals("-")) {
                int operacao = valor1 - valor2;
                System.out.println(operacao);
            }

            if (operador.equals("/")) {
                int operacao = valor1 / valor2;
                System.out.println(operacao);
            }

            if (operador.equals("*")) {
                int operacao = valor1 * valor2;
                System.out.println(operacao);
            }

            System.out.println("Deseja continuar?");
            String resposta = input.next();
            if (resposta.equals("n")) {
                continuar = false;
            }
        }

    }
}
