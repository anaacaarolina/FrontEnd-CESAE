package FichaPratica02;

import java.util.Scanner;

public class Ex03 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Introduza um salário: ");
        double salario = input.nextDouble();
        if (salario <= (double)15000.0F) {
            double taxa = salario * 0.2;
            System.out.print("Paga taxa de 20%: " + taxa);
        } else if (salario <= (double)20000.0F) {
            double taxa = salario * 0.3;
            System.out.print("Paga taxa de 30%: " + taxa);
        } else if (salario <= (double)25000.0F) {
            double taxa = salario * 0.35;
            System.out.println("Paga taxa de 35%: " + taxa);
        } else {
            double taxa = salario * 0.4;
            System.out.println("Paga taxa de 40%: " + taxa);
        }

    }
}
