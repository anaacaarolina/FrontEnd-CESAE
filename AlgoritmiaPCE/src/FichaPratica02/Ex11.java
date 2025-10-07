package FichaPratica02;

import java.util.Scanner;

public class Ex11 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Introduza o saldo: ");
        double saldo = input.nextDouble();
        System.out.print("Introduza o valor a movimentar: ");
        double movimento = input.nextDouble();
        double saldoAtual = saldo + movimento;
        if (saldoAtual >= (double)0.0F) {
            System.out.println("Transição efetuada");
            saldo = saldoAtual;
        } else {
            System.out.println("Operação Inválida. Saldo Insuficiente.");
        }

        System.out.println("Saldo: " + saldo);
    }
}
