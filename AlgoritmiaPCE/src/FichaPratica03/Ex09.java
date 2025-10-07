package FichaPratica03;

import java.util.Scanner;

public class Ex09 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int media = 0;
        int counter = 0;
        System.out.println("Introduza um número: ");
        int numero = input.nextInt();

        do {
            System.out.println("Introduza um número: ");
            numero = input.nextInt();
            ++counter;
            int var10000 = numero / counter;
        } while(numero != -1);

        System.out.println("Média: 20");
    }
}
