package FichaPratica06;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Ex05 {

    static void main() throws FileNotFoundException {

        //Caminho , qual é o ficheiro

        File ficheiro05 = new File("FichaPratica06/Ficheiros/exercicio_05_1999.txt");

        //Leitor
        Scanner leitor = new Scanner(ficheiro05);

        //Varivel para guardar o valor da soma
        int soma = 0;

        while(leitor.hasNextInt()){
            soma += leitor.nextInt();

        }
        System.out.println("A soma do ficheiro 5 é de: " + soma);

        leitor.close();

    }
}
