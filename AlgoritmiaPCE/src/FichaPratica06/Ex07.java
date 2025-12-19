package FichaPratica06;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Ex07 {
    static void main() throws FileNotFoundException {
        File ficheiro07 = new File("FichaPratica06/Ficheiros/exercicio_07.txt");
        Scanner ler = new Scanner(ficheiro07);

        int contadorLinhas = 0, contadorPalavras = 0;
        String linha = " ";

        while(ler.hasNextLine()) {
            contadorLinhas++;
            linha = ler.nextLine();
            String[] palavras = linha.split(" ");
            contadorPalavras += palavras.length;
        }


        System.out.println("Total de palavras: " + contadorPalavras);
        System.out.println("Total de Linhas: " + contadorLinhas);

        ler.close();

    }
}
