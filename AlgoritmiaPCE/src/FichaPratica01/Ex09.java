package FichaPratica01;

import java.util.Scanner;

public class Ex09 { public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Introduza o código de funcionário: ");
    double codigoFuncionario = input.nextDouble();
    System.out.print("Introduza o número de dias: ");
    double numDias = input.nextDouble();
    double vencimento = (double)40.0F * numDias;
    System.out.println("\nVencimento: " + vencimento);
    double subsidio = (double)5.0F * numDias;
    System.out.println("Subsídio de alimentção: " + subsidio);
    double irs = (vencimento + subsidio) * 0.1;
    System.out.println("Retenção de IRS: " + irs);
    double segurancaSocial = (vencimento + subsidio - irs) * 0.3375;
    System.out.println("Valor a entregar à Segurança Social: " + segurancaSocial);
    double segSocialFunc = (vencimento + subsidio - irs) * 0.2375;
    System.out.println("Valor a entregar à Segurança Social (encargo funcionário): " + segSocialFunc);
    double segSocialEnt = (vencimento + subsidio - irs) * 0.1;
    System.out.println("Valor a entregar à Segurança Social (encargo entidade patronal): " + segSocialEnt);
    double valorFinal = vencimento + subsidio - irs - segurancaSocial;
    System.out.println("Valor líquido a receber: " + valorFinal);
}
}
