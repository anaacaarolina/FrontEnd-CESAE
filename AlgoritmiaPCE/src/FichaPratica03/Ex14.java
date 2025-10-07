package FichaPratica03;

import java.util.Scanner;

public class Ex14 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int counter = 1;
        boolean crescente = true;
        System.out.print("Quantos números deseja inserir: ");
        int iteracoes = input.nextInt();
        System.out.print("Introduza um número: ");
        int current = input.nextInt();

        for(int previous = -100; counter < iteracoes; ++counter) {
            System.out.print("Introduza um número: ");
            current = input.nextInt();
            if (previous >= current) {
                crescente = false;
            }

            previous = current;
        }

        if (!crescente) {
            System.out.println("Não crescente");
        } else {
            System.out.println("Crescente");
        }

    }
}
