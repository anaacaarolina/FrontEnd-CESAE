package FichaPratica02;

import java.util.Scanner;

public class Ex15 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Introduza um número: ");
        int num1 = input.nextInt();
        System.out.print("Introduza um número: ");
        int num2 = input.nextInt();
        System.out.print("Introduza um número: ");
        int num3 = input.nextInt();
        System.out.print("Intrdouza a ordem (C ou D): ");
        String ordem = input.next();
        if (ordem.equals("C") || ordem.equals("c")) {
            if (num1 > num2 && num2 > num3) {
                System.out.print(num3 + " " + num2 + " " + num1);
            } else if (num1 > num3 && num3 > num2) {
                System.out.print(num2 + " " + num3 + " " + num1);
            } else if (num2 > num1 && num1 > num3) {
                System.out.print(num3 + " " + num1 + " " + num2);
            } else if (num2 > num3 && num3 > num1) {
                System.out.print(num1 + " " + num3 + " " + num2);
            } else if (num3 > num2 && num2 > num1) {
                System.out.print(num1 + " " + num2 + " " + num3);
            } else {
                System.out.print(num2 + " " + num1 + " " + num3);
            }
        }

        if (ordem.equals("D") || ordem.equals("d")) {
            if (num1 < num2 && num2 < num3) {
                System.out.print(num3 + " " + num2 + " " + num1);
            } else if (num1 < num3 && num3 < num2) {
                System.out.print(num2 + " " + num3 + " " + num1);
            } else if (num2 < num1 && num1 < num3) {
                System.out.print(num3 + " " + num1 + " " + num2);
            } else if (num2 < num3 && num3 < num1) {
                System.out.print(num1 + " " + num3 + " " + num2);
            } else if (num3 < num2 && num2 < num1) {
                System.out.print(num1 + " " + num2 + " " + num3);
            } else {
                System.out.print(num2 + " " + num1 + " " + num3);
            }
        }

    }
}
