package FichaPratica03;

import java.util.Scanner;

public class Ex12 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int counter1 = 0;
        int counter2 = 0;
        int counter3 = 0;
        int counter4 = 0;
        System.out.print("Introduza um número (até 100 inclusive): ");

        for(int num = input.nextInt(); num > 0; num = input.nextInt()) {
            if (num <= 25) {
                ++counter1;
            } else if (num <= 50) {
                ++counter2;
            } else if (num <= 75) {
                ++counter3;
            } else if (num <= 100) {
                ++counter4;
            }

            System.out.print("Introduza um número (até 100 inclusive): ");
        }

        System.out.println("[00,25]: " + counter1);
        System.out.println("[26,50]: " + counter2);
        System.out.println("[51,75]: " + counter3);
        System.out.println("[76,100]: " + counter4);
    }
}
