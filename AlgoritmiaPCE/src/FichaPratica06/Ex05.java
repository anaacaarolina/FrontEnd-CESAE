package FichaPratica06;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Ex05 {

    public static void lerNumeros() throws FileNotFoundException {
        File ficheiro = new File("Ficheiros/exercicio5.txt");
        Scanner conteudo = new Scanner(ficheiro);

        String linha = conteudo.nextLine();
        String[] conteudoLinha = linha.split(" ");
        int soma = 0;

        for (int i = 0; i < conteudoLinha.length; i++) {
            int numero = Integer.parseInt(conteudoLinha[i]);
            soma += numero;
        }
        System.out.println("Soma: " + soma);

        conteudo.close();

    }

    public static void main(String[] args) throws FileNotFoundException {
        lerNumeros();
    }
}
