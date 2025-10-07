package FichaPratica02;

import java.util.Scanner;

public class Ex06 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Introduza um número: ");
        int num1 = input.nextInt();
        System.out.print("Introduza um número: ");
        int num2 = input.nextInt();
        if (num1 > num2) {
            System.out.print(num1 + "   " + num2);
        } else {
            System.out.print(num2 + "   " + num1);
        }

    }
}
