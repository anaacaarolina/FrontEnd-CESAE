package FichaPratica03;

import java.util.Scanner;

public class Ex08 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Introduza um número: ");
        int numero = input.nextInt();
        int anteriores = numero - 5;

        int seguintes;
        for(seguintes = numero + 5; anteriores < numero; ++anteriores) {
            System.out.println(anteriores);
        }

        System.out.println(" ");

        while(numero < seguintes) {
            ++numero;
            System.out.println(numero);
        }

    }
}
