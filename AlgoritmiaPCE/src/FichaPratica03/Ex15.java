package FichaPratica03;

import java.util.Scanner;

public class Ex15 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int counter = 1;
        int fatores = 1;
        System.out.print("Introduza um número: ");
        int numero = input.nextInt();

        for(int var5 = numero; fatores < var5; ++fatores) {
            numero *= fatores;
        }

        System.out.print("Resultado: " + numero);
    }
}
