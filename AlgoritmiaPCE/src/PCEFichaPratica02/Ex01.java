package PCEFichaPratica02;

import java.util.Scanner;

public class Ex01 {
    public static void fazerBarulho(String nomeAnimal) {

        switch (nomeAnimal){
            case "Cão":
                System.out.println("Au au au");
                break;
            case "Gato":
                System.out.println("Maiu");
                break;
            case "Peixe":
                System.out.println("Glub Glub");
                break;
            case "Vaca":
                System.out.println("Muuuu");
                break;
            case "Porco":
                System.out.println("Oinc Oinc");
                break;
            default:
                System.out.println("Animal desconhecido");
        }

    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        String nomeAnimal;

        System.out.print("Introduza um animal: ");
        nomeAnimal = input.nextLine();

        fazerBarulho(nomeAnimal);


    }
}
