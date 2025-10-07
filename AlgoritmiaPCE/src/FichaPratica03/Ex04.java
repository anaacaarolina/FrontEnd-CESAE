package FichaPratica03;

import java.util.Scanner;

public class Ex04 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int num2 = 0;
        System.out.print("Introduza um número: ");

        for(int num1 = input.nextInt(); num2 <= num1; ++num2) {
            System.out.println(num2);
        }

    }
}
