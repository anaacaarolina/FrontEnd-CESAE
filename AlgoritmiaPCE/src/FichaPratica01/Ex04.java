package FichaPratica01;

import java.util.Scanner;

public class Ex04 {  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Introduza o raio: ");
    double raio = input.nextDouble();
    double area = raio * raio * 3.14;
    double circunferencia = 6.28 * raio;
    System.out.println("A área da circunferência é: " + area + "m2");
    System.out.println("O perímetro da circunferência é: " + circunferencia + "m");
}
}
