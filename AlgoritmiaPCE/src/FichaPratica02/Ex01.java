package FichaPratica02;

import java.util.Scanner;

public class Ex01 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Introduza um número: ");
        int num1 = input.nextInt();
        System.out.print("Introduza um número: ");
        int num2 = input.nextInt();
        if (num1 > num2) {
            System.out.println("Maior: " + num1);
        } else {
            System.out.println("Maior: " + num2);
        }

    }
}
