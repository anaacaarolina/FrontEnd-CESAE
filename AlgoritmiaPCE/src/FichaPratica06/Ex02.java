package FichaPratica06;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;

//Write a program that reads the content of a txt file and copies it to another file.

public class Ex02 {

    public static void criarArquivo()throws FileNotFoundException {
        String conteudo = "Hello! Adoro Programar em JAVA!";

        File ficheiro = new File("Ficheiros/hello.txt");
        PrintWriter printWriter = new PrintWriter(ficheiro);

        printWriter.println(conteudo);
        printWriter.close();
    }

    public static void main(String[] args)throws FileNotFoundException {
        criarArquivo();

    }
}
