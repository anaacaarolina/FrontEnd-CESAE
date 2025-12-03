package FichaPratica06;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;

public class Ex03 {


    public static void copiarConteudo() throws FileNotFoundException {
        File fileOrigem = new File("Ficheiros/hello.txt");
        File fileDestino = new File("Ficheiros/exercicio3.txt");

        Scanner conteudo = new Scanner(fileOrigem);
        PrintWriter escrever = new PrintWriter(fileDestino);

        String linha = conteudo.nextLine();

        escrever.println(linha);

        conteudo.close();
        escrever.close();
    }

    public static void main(String[] args) throws FileNotFoundException {
        copiarConteudo();
    }
}
