package PCEFichaPratica01;

import java.util.Scanner;

public class Ex11 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int[][] matriz = new int[3][3];

        int maiorNumero = -999999, menorNumero = 999999;

        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.print("Insira um número na matriz[" + i + "][" + j + "]: ");
                matriz[i][j] = input.nextInt();

                if (matriz[i][j] > maiorNumero) {
                    maiorNumero = matriz[i][j];
                }
                if (matriz[i][j] < menorNumero) {
                    menorNumero = matriz[i][j];
                }
            }
        }
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.print(matriz[i][j]+" ");
            }
            System.out.println("");
        }
        System.out.println("Maior número: " + maiorNumero);
        System.out.println("Menor número: " + menorNumero);
    }
}
