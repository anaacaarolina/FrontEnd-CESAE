package FichaPratica02;

import java.util.Scanner;

public class Ex17 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Introduza o salário: ");
        double saldoMedio = (double)input.nextInt();
        double valorCredito1 = saldoMedio * 0.2;
        double valorCredito2 = saldoMedio * 0.3;
        double valorCredito3 = saldoMedio * 0.4;
        if (saldoMedio <= (double)2000.0F) {
            System.out.println("Nenhum crédito");
        } else if (saldoMedio <= (double)4000.0F) {
            System.out.println("Valor do Crédito: " + valorCredito1);
        } else if (saldoMedio <= (double)6000.0F) {
            System.out.println("Valor do Crédito: " + valorCredito2);
        } else {
            System.out.println("Valor do Crédito: " + valorCredito3);
        }

    }
}
