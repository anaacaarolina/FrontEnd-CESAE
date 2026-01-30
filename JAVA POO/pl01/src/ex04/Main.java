package ex04;

public class Main {

    public static void main(String[] args) {
        Cilindro cilindro = new Cilindro(5, 5);

        double volume = cilindro.calcularVolume();

        System.out.printf("O volume do cilindro é: %.2f\n", volume);
    }
}