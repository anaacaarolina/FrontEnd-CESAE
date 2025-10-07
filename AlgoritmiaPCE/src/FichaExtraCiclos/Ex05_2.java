package FichaExtraCiclos;

public class Ex05_2 {
    public static void main(String[] args) {
        int rowsTotais = 5;

        for(int i = 1; i <= rowsTotais; ++i) {
            int espacos = rowsTotais - i;
            int numeros = i * 2 - 1;

            for(int j = 0; j < espacos; ++j) {
                System.out.print(" ");
            }

            for(int j = 0; j < numeros; ++j) {
                System.out.print(i);
            }

            System.out.println();
        }

    }
}
