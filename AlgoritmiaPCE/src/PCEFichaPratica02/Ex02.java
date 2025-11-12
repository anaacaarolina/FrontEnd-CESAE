package PCEFichaPratica02;

import java.util.Scanner;



public class Ex02 {
    /**
     * Método para pedir ao utilizador um número maior que 0.
     * @return numero inteiro positivo
     */
    public static int lerValorUser() {
        Scanner input = new Scanner(System.in);

        int num;

        do {
            System.out.print("Introduza um número: ");
            num = input.nextInt();
        }while (num >= 0);

        return num;
    }

    /**
     * Método para imprimir Asteriscos
     * @param numeroDeAsteriscos
     */
    public static void imprimirAsteriscos(int numeroDeAsteriscos) {

        for (int i = 0; i < numeroDeAsteriscos; i++)
            System.out.print("*");
    }

    public static void main(String[] args) {

        int numero;

        numero = lerValorUser();

        imprimirAsteriscos(numero);

    }

}
