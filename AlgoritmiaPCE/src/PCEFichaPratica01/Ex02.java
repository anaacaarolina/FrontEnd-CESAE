package PCEFichaPratica01;

import java.util.Scanner;

public class Ex02 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int[] comissoes = new int[12];
        int totalComissoes = 0;
        String[] meses = new String[]{"Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"};

        for (int i = 0; i < comissoes.length; ++i) {
            System.out.print("Insira o valor das comissões do mês de " + meses[i] + ": ");
            comissoes[i] = input.nextInt();
            totalComissoes += comissoes[i];
        }

        System.out.println(totalComissoes);
    }
}
