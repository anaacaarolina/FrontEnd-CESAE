package FichaExtraCiclos;

public class Ex05_3 {
    public static void main(String[] args) {
        int rowsTotais = 5;

        for(int i = 1; i <= rowsTotais; ++i) {
            int espacos = rowsTotais - i;
            int numeros = i * 2 - 1;
            int numeroADarPrint = i;

            for(int j = 0; j < espacos; ++j) {
                System.out.print(" ");
            }

            for(int j = 1; j <= numeros; ++j) {
                System.out.print(numeroADarPrint);
                if (j < i) {
                    --numeroADarPrint;
                } else {
                    ++numeroADarPrint;
                }
            }

            System.out.println();
        }

    }
}
