package ex03;

import java.util.Scanner;

public class Menu {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int opcao;

        do{
            System.out.println("Escolha uma opção: (0, 1, 2 ou 3)");
            opcao = input.nextInt();
            
            switch (opcao) {
                case 1->System.out.println("Escolheu o 1");
                case 2->System.out.println("Escolheu o 2");
                case 3->System.out.println("Escolheu o 3");
                case 0->System.out.println("A sair...");
            }

        }
        while(true);
    }
    
}
