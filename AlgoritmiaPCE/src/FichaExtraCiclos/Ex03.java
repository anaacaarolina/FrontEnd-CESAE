package FichaExtraCiclos;

public class Ex03 {
    public static void main(String[] args) {
        int numero1 = 1;

        for(int numero2 = 1; numero1 <= 10; ++numero1) {
            System.out.println("\nTabuada do " + numero1);

            while(numero2 <= 10) {
                int operacao = numero1 * numero2;
                System.out.println(numero1 + " x " + numero2 + " = " + operacao);
                ++numero2;
            }

            numero2 = 1;
        }

    }
}
