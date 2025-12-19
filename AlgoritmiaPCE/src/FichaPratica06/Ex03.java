package FichaPratica06;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;

public class Ex03 {

    static void main(String[] args)throws FileNotFoundException {

        //Arquivo 1 - Atual
        File arquivo1 = new File("FichaPratica06/Ficheiros/arquivo1.txt");
        //Leitor do arquivo 1
        Scanner leitor = new Scanner(arquivo1);

        //Arquivo 2 - Cópia
        File arquivo2 = new File("FichaPratica06/Ficheiros/arquivo2.txt");
        //Máquina de escrever do arquivo 2
        PrintWriter maquinaEscrever = new PrintWriter(arquivo2);

        //Ler all o conteudo do arquivo 1

        String linha;
        while(leitor.hasNextLine()){
            linha = leitor.nextLine();
            maquinaEscrever.println(linha);
        }

        //Fechar o leitor
        leitor.close();
        //Fechar a máquina
        maquinaEscrever.close();

    }
}
