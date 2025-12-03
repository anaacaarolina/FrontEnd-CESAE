package FichaPratica06;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Ex08 {

    public static void specificWord() throws FileNotFoundException {
        File ficheiro = new File("Ficheiros/exercicio7.txt");
        Scanner conteudo = new Scanner(ficheiro);
        String linha = conteudo.nextLine();
        String[] partes = linha.split(" ");
        String[] arrayPalavra = new String[partes.length] ;

        while(conteudo.hasNextLine()){
            if (partes.equals("turma")){
                arrayPalavra.
            }
        }
    }
    public static void main(String[] args) throws FileNotFoundException{
        specificWord();
    }
}
