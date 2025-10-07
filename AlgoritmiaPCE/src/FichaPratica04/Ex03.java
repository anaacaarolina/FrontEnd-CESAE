package FichaPratica04;

import java.util.Scanner;

public class Ex03 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int numeroTentativas = 1;
        System.out.print("Introduza um valor: ");
        int valor = input.nextInt();
        System.out.print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nIntroduza a tentativa: ");

        for(int tentativa = input.nextInt(); tentativa != valor; ++numeroTentativas) {
            if (tentativa < valor) {
                System.out.println("O valor correto é superior");
            }

            if (tentativa > valor) {
                System.out.println("O valor correto é inferior");
            }

            System.out.print("Introduza outra tentativa: ");
            tentativa = input.nextInt();
        }

        System.out.println("Acertou! :)");
        System.out.println("Número de tentativas: " + numeroTentativas);
    }
}
