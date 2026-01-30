package ex01;

import java.util.Scanner;

public class TabuadaInput {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int numero, resultado;
        System.out.print("Introduza um número: ");
        numero=input.nextInt();
        for (int i = 1; i<=10; i++){
            resultado=i*numero;
            System.out.println(i+" * "+numero+" = "+resultado);
        }
    }
}
