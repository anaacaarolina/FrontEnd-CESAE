package PCEFichaPratica01;

import java.util.Arrays;
import java.util.Scanner;

public class Ex04 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int[] numero = new int[10];
        int menorNumero = 9999999;

        for(int i = 0; i < numero.length; ++i) {
            System.out.print("Insira um número: ");
            numero[i] = input.nextInt();
            if (numero[i] <= menorNumero) {
                menorNumero = numero[i];
            }
        }

        System.out.println("O menor número é: " + menorNumero);
    }
}
