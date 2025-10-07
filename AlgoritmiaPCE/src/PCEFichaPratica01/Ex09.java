package PCEFichaPratica01;

import java.util.Scanner;

public class Ex09 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int [][] matriz = new int[5][5];
        int total;
        total=0;

        for (int i=0; i< matriz.length; i++){
            for (int j=0; j<matriz[i].length; j++){
                System.out.print("Insira um número na matriz["+i+"]["+j+"]: ");
                matriz[i][j]=input.nextInt();
                total+=matriz[i][j];
            }
        }
        System.out.println(total);
    }
}
