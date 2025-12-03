package FichaPratica06;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Ex07 {
    public static void contarPalavras() throws FileNotFoundException {
        File ficheiro = new File("Ficheiros/exercicio7.txt");
        Scanner conteudo = new Scanner(ficheiro);

        int counterLinhas = 0;
        int counterPalavras = 0;
        while (conteudo.hasNextLine()){
            String linha = conteudo.nextLine();
            counterLinhas++;

            String [] palavras = linha.split(" ");
            counterPalavras += palavras.length;

        }
        System.out.println("Linhas: "+counterLinhas);
        System.out.println("Palavras: "+counterPalavras);
    }

    public static void main(String[] args) throws FileNotFoundException{
        contarPalavras();
    }
}
