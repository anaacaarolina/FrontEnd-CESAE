package FichaPratica02;

import java.util.Scanner;

public class Ex18 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Introduza o código de funcionário: ");
        double funcionario = input.nextDouble();
        System.out.print("Introduza o cargo (E-Empregado; C-Chefe; A-Administrador): ");
        String cargo = input.next();
        System.out.print("Introduza o número de dias: ");
        double dias = input.nextDouble();
        if (cargo.equals("e") || cargo.equals("E")) {
            double vencimento = dias * (double)40.0F;
            double subsidio = dias * (double)5.0F;
            double irs;
            if (vencimento > (double)1000.0F) {
                irs = vencimento * 0.2;
            } else {
                irs = vencimento * 0.1;
            }

            double segurancaSocial = vencimento * 0.3475;
            double segSocialFunc = vencimento * 0.11;
            double segSocialEnt = vencimento * 0.2375;
            double valorTotal = vencimento + subsidio - irs - segurancaSocial;
            System.out.println("Vencimento: " + vencimento);
            System.out.println("Subsídio de alimentação: " + subsidio);
            System.out.println("IRS a entregar: " + irs);
            System.out.println("Valor a entregar à Segurança Social (total): " + segurancaSocial);
            System.out.println("Valor a entregar à Segurança Social (encargo do Funcionário): " + segSocialFunc);
            System.out.println("Valor a entregar à Segurança Social (encargo da Entitdade): " + segSocialEnt);
            System.out.println("Valor líquido a receber: " + valorTotal);
        }

        if (cargo.equals("C") || cargo.equals("c")) {
            double vencimento = dias * (double)60.0F;
            double subsidio = dias * (double)7.5F;
            double irs;
            if (vencimento > (double)1000.0F) {
                irs = vencimento * 0.2;
            } else {
                irs = vencimento * 0.1;
            }

            double segurancaSocial = vencimento * 0.3475;
            double segSocialFunc = vencimento * 0.11;
            double segSocialEnt = vencimento * 0.2375;
            double valorTotal = vencimento + subsidio - irs - segurancaSocial;
            System.out.println("Vencimento: " + vencimento);
            System.out.println("Subsídio de alimentação: " + subsidio);
            System.out.println("IRS a entregar: " + irs);
            System.out.println("Valor a entregar à Segurança Social (total): " + segurancaSocial);
            System.out.println("Valor a entregar à Segurança Social (encargo do Funcionário): " + segSocialFunc);
            System.out.println("Valor a entregar à Segurança Social (encargo da Entitdade): " + segSocialEnt);
            System.out.println("Valor líquido a receber: " + valorTotal);
        }

        if (cargo.equals("A") || cargo.equals("a")) {
            double vencimento = dias * (double)80.0F;
            double subsidio = dias * (double)7.5F;
            double irs;
            if (vencimento > (double)1000.0F) {
                irs = vencimento * 0.2;
            } else {
                irs = vencimento * 0.1;
            }

            double segurancaSocial = vencimento * 0.3;
            double segSocialFunc = vencimento * 0.9;
            double segSocialEnt = vencimento * 0.21;
            double valorTotal = vencimento + subsidio - irs - segurancaSocial;
            System.out.println("Vencimento: " + vencimento);
            System.out.println("Subsídio de alimentação: " + subsidio);
            System.out.println("IRS a entregar: " + irs);
            System.out.println("Valor a entregar à Segurança Social (total): " + segurancaSocial);
            System.out.println("Valor a entregar à Segurança Social (encargo do Funcionário): " + segSocialFunc);
            System.out.println("Valor a entregar à Segurança Social (encargo da Entitdade): " + segSocialEnt);
            System.out.println("Valor líquido a receber: " + valorTotal);
        }

    }
}
