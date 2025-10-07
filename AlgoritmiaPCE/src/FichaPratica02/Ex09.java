package FichaPratica02;

import java.util.Scanner;

public class Ex09 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Introduza um número: ");
        int num1 = input.nextInt();
        System.out.print("Introduza um número: ");
        int num2 = input.nextInt();
        System.out.print("Introduza um número: ");
        int num3 = input.nextInt();
        if (num1 > num2 && num1 > num3) {
            System.out.print("Maior: " + num1);
        } else if (num2 > num1 && num2 > num3) {
            System.out.print("Maior: " + num2);
        } else {
            System.out.print("Maior: " + num3);
        }

    }
}
