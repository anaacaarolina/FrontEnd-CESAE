package PCEFichaPratica01;

import java.util.Arrays;
import java.util.Scanner;

public class Ex08 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int [][] matriz = new int[3][3];

        for (int i = 0; i<matriz.length; i++){
            for (int j=0; j<matriz[i].length; j++){
                System.out.print("Insira um número na matriz["+i+"]["+j+"]: ");
                matriz[i][j]=input.nextInt();
            }
        }
        System.out.println(Arrays.toString(matriz[0]));
        System.out.println(Arrays.toString(matriz[1]));
        System.out.println(Arrays.toString(matriz[2]));
    }
}
