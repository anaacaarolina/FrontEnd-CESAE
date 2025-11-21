package PCEFichaPratica01;

import java.util.Scanner;

public class Ex05 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double[] numero = new double[10];
        double totalNumeros = 0;

        for(int i = 0; i < numero.length; ++i) {
            System.out.print("Insira um valor: ");
            numero[i] = (double)input.nextInt();
            totalNumeros += numero[i];
        }

        double media = totalNumeros / (double)numero.length;
        System.out.println(media);
    }
}
