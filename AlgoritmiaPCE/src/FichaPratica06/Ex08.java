package FichaPratica06;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;

public class Ex08 {

    static void main() throws FileNotFoundException {

        File ficheiro08 = new File("FichaPratica06/Ficheiros/exercicio_08.txt");
        Scanner leitor = new Scanner(ficheiro08);

        //Novo ficheiro
        File novoFicheiro08 = new File("FichaPratica06/Ficheiros/exercicio_08_COPY.txt");

        PrintWriter maquinaEscrever = new PrintWriter(novoFicheiro08);

        String palavraChave = "turma";

        while(leitor.hasNextLine()){
            String linha = leitor.nextLine();
            String[] ArrayPalavras =  linha.split(" ");

            for(int i = 0; i < ArrayPalavras.length; i++){
              if(ArrayPalavras[i].equals(palavraChave)){
                  System.out.println(linha); //Só na consola para verificar
                  maquinaEscrever.println(linha);
              }
            }

        }

        leitor.close();
        maquinaEscrever.close();


    }
}
