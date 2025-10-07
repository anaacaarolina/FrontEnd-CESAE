package FichaPratica04;

import java.util.Scanner;

public class Ex04 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int restoDivisao = 0;
        System.out.print("Introduza um número: ");
        int numero = input.nextInt();

        for(int fatores = numero / 2 + 1; fatores >= 1; --fatores) {
            if (numero % fatores == 0) {
                ++restoDivisao;
            }
        }

        if (restoDivisao == 2) {
            System.out.println("O número é primo");
        } else {
            System.out.println("O número não é primo");
        }

    }
}
