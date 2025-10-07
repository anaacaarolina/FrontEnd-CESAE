package PCEFichaPratica01;

import java.util.Arrays;
import java.util.Scanner;

public class Ex07 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int[] numero = new int[10];
        int maiorNumero = -9999999;
        int maiorNumeroPar = maiorNumero;

        for(int i = 0; i < numero.length; ++i) {
            System.out.print("Insira um número: ");
            numero[i] = input.nextInt();
            if (numero[i] >= maiorNumero) {
                maiorNumero = numero[i];
            }

            if (maiorNumero % 2 == 0) {
                maiorNumeroPar = maiorNumero;
            }
        }

        System.out.println("O maior número é: " + maiorNumeroPar);
        System.out.println(Arrays.toString(numero));
    }
}
