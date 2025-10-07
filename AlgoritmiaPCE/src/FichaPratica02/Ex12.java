package FichaPratica02;

import java.util.Scanner;

public class Ex12 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Escolha uma opção: ");
        int opcao = input.nextInt();
        switch (opcao) {
            case 1 -> System.out.print("Criar");
            case 2 -> System.out.print("Atualizar");
            case 3 -> System.out.print("Eliminar");
            case 4 -> { }
            default -> System.out.print("A opção não é válida.");
        }

    }
}
