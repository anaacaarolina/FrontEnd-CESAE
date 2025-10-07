package FichaPratica02;

import java.util.Scanner;

public class Ex04 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Introduza o seu lugar na corrida: ");
        int lugar = input.nextInt();
        switch (lugar) {
            case 1 -> System.out.print("Ganhou 10 pontos");
            case 2 -> System.out.print("Ganhou 8 pontos");
            case 3 -> System.out.print("Ganhou 6 pontos");
            case 4 -> System.out.print("Ganhou 5 pontos");
            case 5 -> System.out.print("Ganhou 4 pontos");
            case 6 -> System.out.print("Ganhou 3 pontos");
            case 7 -> System.out.print("Ganhou 2 pontos");
            case 8 -> System.out.print("Ganhou 1 ponto");
            default -> System.out.print("Não ganhou pontos");
        }

    }
}
