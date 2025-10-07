package FichaPratica02;

import java.util.Scanner;

public class Ex08 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Introduza a primeira nota:");
        double nota1 = input.nextDouble();
        System.out.print("Introduza a segunda nota: ");
        double nota2 = input.nextDouble();
        System.out.print("Introduza a terceira nota: ");
        double nota3 = input.nextDouble();
        double media = nota1 * (double)0.25F + nota2 * 0.35 + nota3 * 0.4;
        if (media >= (double)9.5F) {
            System.out.print("O aluno está aprovado");
        } else {
            System.out.print("O aluno não está aprovado");
        }

    }
}
