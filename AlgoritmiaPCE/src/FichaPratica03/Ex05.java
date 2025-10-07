package FichaPratica03;

import java.util.Scanner;

public class Ex05 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int iteracoes = 0;
        System.out.print("Introduza um número: ");
        int num = input.nextInt();
        input.nextLine();
        System.out.print("Introduza uma mensagem: ");

        for(String mensagem = input.nextLine(); iteracoes < num; ++iteracoes) {
            System.out.println(mensagem);
        }

    }
}
