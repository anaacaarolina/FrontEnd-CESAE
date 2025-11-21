package PCEFichaPratica02;

import java.util.Scanner;

public class Ex08 {

    static int somarMatrizes(int[][] matriz1, int[][] matriz2, int linhas, int colunas) {
       int [][] matrizSoma = new int [linhas][colunas];



        return 1;
    }

    static int somatorioMatrizes(int[][] matriz1, int[][] matriz2) {
        return 1;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Introduza o número de linhas da Matriz 1: ");
        int linhasMatriz1 = input.nextInt();
        System.out.print("Introduza o número de colunas da Matriz 1: ");
        int colunasMatriz1 = input.nextInt();
        int[][] matriz1 = new int[linhasMatriz1][colunasMatriz1];

        for (int i=0; i<matriz1.length; i++){
            for (int j=0; j<matriz1[i].length;j++){
                System.out.print("Insira um número na matriz["+i+"]["+j+"]: ");
                matriz1[i][j]=input.nextInt();
            }
        }

        System.out.print("Introduza o número de linhas da Matriz 2: ");
        int linhasMatriz2 = input.nextInt();
        System.out.print("Introduza o número de colunas da Matriz 2: ");
        int colunasMatriz2 = input.nextInt();
        int[][] matriz2 = new int[linhasMatriz2][colunasMatriz2];

        for (int i=0; i<matriz2.length; i++){
            for (int j=0; j<matriz2[i].length;j++){
                System.out.print("Insira um número na matriz["+i+"]["+j+"]: ");
                matriz2[i][j]=input.nextInt();
            }
        }
        System.out.println(somarMatrizes(matriz1,matriz2, linhasMatriz1,colunasMatriz1));
    }

}
