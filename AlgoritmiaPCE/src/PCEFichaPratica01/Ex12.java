package PCEFichaPratica01;

import java.util.Scanner;

public class Ex12 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int[][] matriz = new int[10][2];

        int[] primeiroArray = new int[10];
        int[] segundoArray = new int[10];


        System.out.print("Introduza os dez números do primeiro array separados por espaços: ");
        for (int i = 0; i < primeiroArray.length; i++) {
            primeiroArray[i] = input.nextInt();
        }
        System.out.print("Introduza os dez números do segundo array separados por espaços: ");
        for (int i = 0; i < segundoArray.length; i++) {
            segundoArray[i] = input.nextInt();
        }
        for (int i = 0; i < matriz.length; i++) {
            matriz[i][0] = primeiroArray[i];
        }
        for (int i = 0; i < matriz.length; i++) {
            matriz[i][1] = segundoArray[i];
        }
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.print(matriz[i][j] + " ");
            }
            System.out.println();
        }
    }
}
