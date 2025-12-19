package FichaPratica06;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;

//Write a program that reads the content of a txt file and copies it to another file.

public class Ex02 {

    static void main() throws FileNotFoundException {

        //Criar o novo arquivo
        File arquivo = new File ("FichaPratica06/Ficheiros/exercicio_02_Copia.txt");

        //Máquina para escrever
        PrintWriter maquinaEscrever = new PrintWriter(arquivo);

        //Inserir a mensagem
    String minhaMensagem = "Novo arquivo foi criado";

    maquinaEscrever.println(minhaMensagem);

    //Fechar a máquina de escrever
        maquinaEscrever.close();


    }
}
