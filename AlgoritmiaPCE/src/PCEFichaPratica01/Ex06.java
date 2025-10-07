package PCEFichaPratica01;

import java.util.Scanner;

public class Ex06 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int[] numero = new int[10];
        int previous = -9999;
        boolean crescente = true;

        for(int i = 0; i < numero.length; ++i) {
            System.out.print("Introduza um número: ");
            numero[i] = input.nextInt();
            int current = numero[i];
            if (previous >= current) {
                crescente = false;
            }

            previous = current;
        }

        if (crescente) {
            System.out.println("A ordem é crescente");
        } else {
            System.out.println("A ordem não é crescente");
        }

    }
}
