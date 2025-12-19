package FichaPratica06;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Ex04 {

    static void main() throws FileNotFoundException {


        File ficheiro04 = new File("FichaPratica06/Ficheiros/exercicio_04.csv");

        Scanner leitor = new Scanner(ficheiro04);

        while(leitor.hasNextLine()){
            String linha = leitor.nextLine();
            System.out.println(linha);

        }


        leitor.close();
    }
}
