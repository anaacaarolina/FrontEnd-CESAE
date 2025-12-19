import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Ex_10 {
    static void main()throws FileNotFoundException {

        File ficheiro10 =   new File("FichaPratica06/Ficheiros/exercicio_10.csv");
        Scanner leitor = new Scanner(ficheiro10);

        String tipoProduto, produto;
        double quantidade;
        double valor, total = 0;

        //Linha para "guardar" o cabeçalho
        String linha = leitor.nextLine();

        while(leitor.hasNextLine()){
            linha = leitor.nextLine();
            String[] itensLinha = linha.split(",");
            tipoProduto = itensLinha[0];
            produto = itensLinha[1];
            quantidade = Double.parseDouble(itensLinha[2]);
            valor = Double.parseDouble(itensLinha[3]);


            total += valor * quantidade;
        }

        System.out.println("Total = " + total);

leitor.close();

    }
}