package FichaExtraCiclos;

import java.util.Scanner;

public class Ex06 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Introduza um número: ");
        int numeroInput = input.nextInt();
        int numeroMaior = numeroInput;
        int numeroMenor = numeroInput;

        while(numeroInput != 0) {
            System.out.print("Introduza um número: ");
            numeroInput = input.nextInt();
            if (numeroInput == 0) {
                break;
            }

            if (numeroInput < numeroMenor) {
                numeroMenor = numeroInput;
            }

            if (numeroInput > numeroMaior) {
                numeroMaior = numeroInput;
            }
        }

        System.out.println("Menor número: " + numeroMenor);
        System.out.println("Maior número: " + numeroMaior);
    }
}
