package FichaPratica01;

import java.util.Scanner;

public class Ex08 {public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Introduza minutos da música 1: ");
    int totalMinutos = input.nextInt();
    System.out.print("Introduza segundos da música 1: ");
    int totalSegundos = input.nextInt();
    System.out.print("Introduza minutos da música 2: ");
    totalMinutos += input.nextInt();
    System.out.print("Introduza segundos da música 2: ");
    totalSegundos += input.nextInt();
    System.out.print("Introduza minutos da música 3: ");
    totalMinutos += input.nextInt();
    System.out.print("Introduza segundos da música 3: ");
    totalSegundos += input.nextInt();
    System.out.print("Introduza minutos da música 4: ");
    totalMinutos += input.nextInt();
    System.out.print("Introduza segundos da música 4: ");
    totalSegundos += input.nextInt();
    System.out.print("Introduza minutos da música 5: ");
    totalMinutos += input.nextInt();
    System.out.print("Introduza segundos da música 5: ");
    totalSegundos += input.nextInt();
    int segundos = totalSegundos % 60;
    int minutos = totalSegundos / 60 + totalMinutos % 60;
    int horas = totalMinutos / 60;
    System.out.print("Total do Álbum: " + horas + "h " + minutos + "m " + segundos + "s");
}
}
