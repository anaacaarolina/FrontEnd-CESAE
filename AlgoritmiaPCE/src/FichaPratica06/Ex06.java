package FichaPratica06;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Ex06 {
    static void main()throws FileNotFoundException {
        //Caminho do ficheiro
        File ficheiro06 = new File("FichaPratica06/Ficheiros/exercicio_06.txt");
        Scanner leitor = new Scanner(ficheiro06);

        String nomeDaPessoaMaisVelha = " ";
        int idadeDaPessoaMaisVelha = 0;

        while(leitor.hasNextLine()){

            String[] linha = leitor.nextLine().split(",");

            String nomes = linha[0];
            int idade = Integer.parseInt(linha[1]);


            //Check da pessoa mais velha
            if(idade > idadeDaPessoaMaisVelha){
                idadeDaPessoaMaisVelha = idade;
                nomeDaPessoaMaisVelha = nomes;
            }


        }

        System.out.println("A pessoa mais velha é: " + nomeDaPessoaMaisVelha + " e tem " + idadeDaPessoaMaisVelha + " anos.");
    }
}
