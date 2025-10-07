package FichaPratica03;

import java.util.Scanner;

public class Ex13 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Introduza um número de início: ");
        int inicio = input.nextInt();
        System.out.print("Introduza um número de fim: ");

        for(int fim = input.nextInt(); inicio <= fim; inicio += 5) {
            while(inicio % 5 != 0) {
                ++inicio;
            }

            System.out.println(inicio);
        }

    }
}
