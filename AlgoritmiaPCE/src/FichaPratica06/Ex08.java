package FichaPratica06;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;

public class Ex08 {

    public static void specificWord() throws FileNotFoundException {
        File ficheiroInput = new File ("Ficheiros/exercicio7.txt");
        File ficheiroOutput = new File("Ficheiros/exercicio8.txt");

        Scanner conteudo = new Scanner(ficheiroInput);
        PrintWriter writer = new PrintWriter(ficheiroOutput);

        String palavra = "turma";

        while (conteudo.hasNextLine()){
            String linha = conteudo.nextLine();
            String [] palavras = linha.split("\\s+");

            for (String p:palavras){
                if (p.equals(palavra)){
                    writer.println(p);
                }
            }
        }
        conteudo.close();
        writer.close();

    }
    public static void main(String[] args) throws FileNotFoundException{
        specificWord();
    }
}
