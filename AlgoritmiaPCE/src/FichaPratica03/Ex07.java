package FichaPratica03;

import java.util.Scanner;

public class Ex07 {
    public static void main(String[] args) {
        new Scanner(System.in);
        int num = 1;

        int somatorio;
        for(somatorio = 0; num <= 100; ++num) {
            System.out.println(num);
            somatorio += num;
        }

        System.out.println("Somatório: " + somatorio);
    }
}
