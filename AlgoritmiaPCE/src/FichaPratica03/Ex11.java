package FichaPratica03;

import java.util.Scanner;

public class Ex11 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int inicio = 0;
        System.out.print("Introduza um limite: ");
        int limite = input.nextInt();
        System.out.print("Introduza um salto: ");

        for(int salto = input.nextInt(); inicio < limite; inicio += salto) {
            System.out.println(inicio);
        }

    }
}
