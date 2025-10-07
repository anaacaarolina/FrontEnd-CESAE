package FichaPratica03;

import java.util.Scanner;

public class Ex10 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int pares = 2;
        System.out.print("Introduza um número: ");

        for(int numero = input.nextInt(); pares <= numero; ++pares) {
            if (pares % 2 == 0) {
                System.out.println(pares);
            }
        }

    }
}
