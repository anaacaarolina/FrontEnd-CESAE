package FichaPratica04;

import java.util.Scanner;

public class Ex04_v2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double restoDivisao = (double)0.0F;
        System.out.print("Introduza um número: ");
        double numero = input.nextDouble();

        for(double fatores = Math.floor(Math.sqrt(numero) + (double)1.0F); fatores >= (double)1.0F; --fatores) {
            if (numero % fatores == (double)0.0F) {
                ++restoDivisao;
            }
        }

        if (restoDivisao == (double)2.0F) {
            System.out.println("O número é primo");
        } else {
            System.out.println("O número não é primo");
        }

    }
}
