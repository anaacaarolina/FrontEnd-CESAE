package ex02;

import java.util.Scanner;

public class NumerosPares {
    public static void main(String[] args) {
        // Crie um programa que peça um número e verifique se ele é par ou ímpar utilizando if-else
        Scanner input = new Scanner(System.in);
        int numero;
        System.out.println("Introduza um número");  
        numero = input.nextInt();

        if (numero%2==0){
            System.out.println("O numero é par");
        }else{System.out.println("O número é ímpar");}
    }
}
