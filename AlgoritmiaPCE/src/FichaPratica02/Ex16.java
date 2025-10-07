package FichaPratica02;

import java.util.Scanner;

public class Ex16 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Introduza um valor (múltiplo de 5): ");
        int valor = input.nextInt();
        int notas = valor / 200;
        System.out.println("Notas de 200: " + notas);
        valor %= 200;
        notas = valor / 100;
        System.out.println("Notas de 100: " + notas);
        valor %= 100;
        notas = valor / 50;
        System.out.println("Notas de 50: " + notas);
        valor %= 50;
        notas = valor / 20;
        System.out.println("Notas de 20: " + notas);
        valor %= 20;
        notas = valor / 10;
        System.out.println("Notas de 10: " + notas);
        valor %= 10;
        notas = valor / 5;
        System.out.println("Notas de 5: " + notas);
    }
}
