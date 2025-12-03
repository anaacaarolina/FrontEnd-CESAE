package FichaPratica06;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Ex04 {

    public static void lerCSV() throws FileNotFoundException {
        File ficheiro = new File("Ficheiros/exercicio4.csv");
        Scanner conteudo = new Scanner(ficheiro);

        while (conteudo.hasNextLine()) {
            String linha = conteudo.nextLine();
            String[] conteudoLinha = linha.split(",");

            for (int i = 0; i < conteudoLinha.length; i++) {
                System.out.println(conteudoLinha[i]);
            }
        }
        conteudo.close();
    }

    public static void main(String[] args) throws FileNotFoundException {
        lerCSV();
    }
}
