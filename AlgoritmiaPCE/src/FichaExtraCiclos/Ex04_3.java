package FichaExtraCiclos;

public class Ex04_3 {
    public static void main(String[] args) {
        int rowsTotais = 5;

        for(int i = 1; i <= rowsTotais; ++i) {
            int espacos = rowsTotais - i;
            int asteriscos = i * 2 - 1;

            for(int j = 0; j < espacos; ++j) {
                System.out.print(" ");
            }

            for(int j = 0; j < asteriscos; ++j) {
                System.out.print("*");
            }

            System.out.println();
        }

    }
}
