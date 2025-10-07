package FichaPratica03;

import java.util.Scanner;

public class Ex06 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Introduza um número de início: ");
        int num1 = input.nextInt();
        System.out.print("Introduza um número de fim: ");

        for(int num2 = input.nextInt(); num1 <= num2; ++num1) {
            System.out.println(num1);
        }

    }
}
