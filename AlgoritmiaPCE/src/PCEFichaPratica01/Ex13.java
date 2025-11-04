package PCEFichaPratica01;

import java.util.Scanner;

public class Ex13 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int[][] matriz = new int[4][4];
        int soma = 0;

        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.print("Insira um número na matriz[" + i + "][" + j + "]: ");
                matriz[i][j] = input.nextInt();
            }
            soma += matriz[i][i];
        }
        System.out.println("Soma: " + soma);
    }
}
