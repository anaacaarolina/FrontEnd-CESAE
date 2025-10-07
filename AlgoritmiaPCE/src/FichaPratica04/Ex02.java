package FichaPratica04;

import java.util.Scanner;

public class Ex02 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int opcao = 0;

        while(opcao != 4) {
            System.out.print("Escolha uma opção (1.Criar, 2. Atualizar, 3. Eliminar, 4. Sair): ");
            opcao = input.nextInt();
            switch (opcao) {
                case 1:
                    System.out.println("Escolheu a opção Criar");
                    break;
                case 2:
                    System.out.println("Escolheu a opção Atualizar");
                    break;
                case 3:
                    System.out.println("Escolheu a opção Eliminar");
                    break;
                case 4:
                    System.out.println("Escolheu a opção Sair");
                    break;
                default:
                    System.out.println("Opção inválida. Escolha outra opção");
            }
        }

    }
}
