package FichaPratica06;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Ex06 {
    public static void lerNomeIdade() throws FileNotFoundException {
        File ficheiro = new File("Ficheiros/exercicio06.txt");
        Scanner conteudo = new Scanner(ficheiro);

        int idade, idadeMaior = -1;
        String nome, nomeMaior = " ";

        while (conteudo.hasNextLine()) {
            String linha = conteudo.nextLine();
            String[] partes = linha.split(",");

            nome = partes[0];
            idade = Integer.parseInt((partes[1]));

            if (idade > idadeMaior) {
                idadeMaior = idade;
                nomeMaior = nome;
            }
        }
        System.out.println("A pessoa mais velha é: " + nomeMaior);
    }

    public static void main(String[] args) throws FileNotFoundException {
        lerNomeIdade();
    }
}
