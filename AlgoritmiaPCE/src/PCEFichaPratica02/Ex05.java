package PCEFichaPratica02;

import java.util.Scanner;

public class Ex05 {
    static int maior(int[] vetor) {
        int maiorNumero = -99999;

        for (int i = 0; i < vetor.length; i++) {
            if (vetor[i] >= maiorNumero) {
                maiorNumero = vetor[i];
            }
        }
        return maiorNumero;
    }

    static int menor(int[] vetor) {
        int menorNumero = 99999;

        for (int i = 0; i < vetor.length; i++) {
            if (vetor[i] <= menorNumero) {
                menorNumero = vetor[i];
            }
        }
        return menorNumero;
    }

    static boolean crescente(int[] vetor) {
        int previous = vetor[0];
        int current;
        boolean eCrescente = true;
        for (int i = 0; i < vetor.length; i++) {
            current = vetor[i];
            if (current < previous) {
                eCrescente = false;
            }
            previous = vetor[i];
        }
        if (eCrescente == false) {
            return false;
        } else return true;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Introduza um tamanho para o array: ");
        int tamanho = input.nextInt();
        int[] vetor = new int[tamanho];
        for (int i = 0; i < tamanho; i++) {
            System.out.print("Introduza um número para a posição " + (i + 1) + ": ");
            vetor[i] = input.nextInt();
        }
        int opcao;
        System.out.print("Selecione uma opção: \n1. Maior Elemento\n2. Menor Elemento\n3. Crescente ou Não Crescente\n");
        opcao = input.nextInt();
        switch (opcao) {
            case 1:
                System.out.print("O maior elemento é " + maior(vetor));
                break;
            case 2:
                System.out.print("O menor elemento é: " + menor(vetor));
            case 3:
                if (crescente(vetor)) {
                    System.out.print("É crescente");
                }else {
                    System.out.print("Não é crescente");
                }
        }
    }


}
