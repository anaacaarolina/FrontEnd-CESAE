package FichaPratica06;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Ex01 {
    public static void lerConteudo() throws FileNotFoundException {

        File ficheiro = new File("Ficheiros/hello.txt");
        Scanner scan = new Scanner(ficheiro);

        System.out.println(scan.nextLine());
    }

    public static void main(String[] args) throws FileNotFoundException {
        lerConteudo();
    }
}
