package PCEFichaPratica02;

import java.util.Scanner;

public class Ex03 {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int numero, opcao;

        while (true) {
            System.out.print("Introduza um número: ");
            numero = input.nextInt();
            while (true) {
                System.out.print("Escolha uma opção: \n1. Par ou Ímpar\n2. Positivo ou Negativo\n3. Primo ou não Primo\n4. Perfeito ou Não Perfeito\n5. Triangular ou Não Triangular\n6. Trocar de Número\n");
                opcao = input.nextInt();
                if (opcao == 6)
                    break;
                switch (opcao) {
                    case 1:
                        if (par(numero)) {
                            System.out.print("Par\n\n");
                        } else {
                            System.out.println("Ímpar\n\n");
                        }
                        break;
                    case 2:
                        if (positivo(numero)) {
                            System.out.print("Positivo\n\n");
                        } else {
                            System.out.println("Negativo\n\n");
                        }
                        break;
                    case 3:
                        if (primo(numero)) {
                            System.out.print("Primo\n\n");
                        } else {
                            System.out.println("Não Primo\n\n");
                        }
                        break;
                    case 4:
                        if (perfeito(numero)) {
                            System.out.print("Perfeito \n\n");
                        } else {
                            System.out.println("Não Perfeito \n\n");
                        }
                        break;
                    case 5:
                        if (triangular(numero)) {
                            System.out.print("Triangular\n\n");
                        } else {
                            System.out.println("Não Triangular\n\n");
                        }
                        break;
                }
            }
        }
    }


    static boolean par(int numero) {
        if (numero % 2 == 0) {
            return true;
        } else return false;
    }

    static boolean positivo(int numero) {
        if (numero >= 0) {
            return true;
        } else return false;
    }

    static boolean primo(int numero) {
        for (int divisor = 2; divisor < numero; divisor++) {
            if (numero % divisor == 0) {
                System.out.print(divisor);
                return false;
            }
        }
        return true;
    }

    static boolean perfeito(int numero) {
        int soma = 0;
        for (int i = 1; i <= numero / 2; i++) {
            if (numero % i == 0) {
                soma += i;
                if (soma >= numero)
                    break;
            }
        }
        if (soma == numero) {
            return true;
        } else return false;
    }

    static boolean triangular(int numero) {
        int soma = 0;
        for (int i = 1; i <= numero; i++) {
            soma += i;
            if (soma >= numero)
                break;
        }
        if (soma == numero) {
            return true;
        } else return false;
    }
}