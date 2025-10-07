package FichaPratica01;

import java.util.Scanner;

public class Ex03 { public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Introduza a largura:");
    int largura = input.nextInt();
    System.out.print("Introduza a comprimento:");
    int comprimento = input.nextInt();
    int perimetro = largura * 2 + comprimento * 2;
    int area = largura * comprimento;
    System.out.println("O perímetro do retângulo é: " + perimetro);
    System.out.println("A área do retângulo é: " + area + "m2");
}
}
