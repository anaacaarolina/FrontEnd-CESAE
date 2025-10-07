package PCEFichaPratica01;

import java.util.Scanner;

public class Ex01 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int[] numeros = new int[10];

        for (int i = 0; i < numeros.length; ++i) {
            int index = i + 1;
            System.out.print("Insira um número na posição " + index + ": ");
            numeros[i] = input.nextInt();
        }

        for (int i = 0; i < numeros.length; ++i) {
            System.out.println(numeros[i]);
        }

    }
}
