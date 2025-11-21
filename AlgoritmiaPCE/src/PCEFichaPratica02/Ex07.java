package PCEFichaPratica02;

import java.util.Scanner;

public class Ex07 {

    static void desenharQuadrado (String c, int linhas, int colunas){
        for (int i = 1; i <= colunas; i++){
            System.out.print(c);
        }
        System.out.println();
        for (int i = 1; i <=linhas-1;i++){
            for(int j = 1; j<=colunas;j++){
                if (j == 1 || j==colunas){
                    System.out.print(c);
                }else System.out.print(" ");
            }
            System.out.println();
        }
        for (int i = 1; i <= colunas; i++){
            System.out.print(c);
        }

    }
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Introduza um caracter: ");
        String c = input.next();
        System.out.print("Introduza o número de linhas: ");
        int linhas = input.nextInt();
        System.out.print("Introduza o número de colunas: ");
        int colunas = input.nextInt();

       desenharQuadrado(c, linhas, colunas);
    }
}
