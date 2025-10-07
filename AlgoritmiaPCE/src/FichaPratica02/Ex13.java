package FichaPratica02;

import java.util.Scanner;

public class Ex13 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Introduza horas: ");
        int horas = input.nextInt();
        System.out.print("Introduza minutos: ");
        int minutos = input.nextInt();
        if (horas == 12) {
            System.out.print(horas + ":" + minutos + " PM");
        } else if (horas == 24) {
            horas -= 12;
            System.out.print(horas + ":" + minutos + " AM");
        } else if (horas >= 13) {
            horas -= 12;
            System.out.print(horas + ":" + minutos + " PM");
        } else {
            System.out.print(horas + ":" + minutos + " AM");
        }

    }
}
