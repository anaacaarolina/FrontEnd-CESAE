package PCEFichaPratica01;

import java.util.Scanner;

public class Ex10 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int[][] matriz = new int[3][5];

        int counter=0, numeroComparado;

        for (int i=0; i<matriz.length; i++){
            for (int j=0; j<matriz[i].length;j++){
                System.out.print("Insira um número na matriz["+i+"]["+j+"]: ");
                matriz[i][j]=input.nextInt();
            }
        }
        System.out.print("Insira um número a comparar: ");
        numeroComparado= input.nextInt();
        for (int i=0; i<matriz.length; i++){
            for (int j=0; j<matriz[i].length;j++){
                if (numeroComparado==matriz[i][j]){
                    counter++;
                }
            }
        }
        System.out.println("O número "+numeroComparado+" aparece "+counter+" vezes na matriz");
    }
}
