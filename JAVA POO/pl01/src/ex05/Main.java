package ex05;

public class Main {
    public static void main(String[] args) {
        Telemovel telemovel1 = new Telemovel("Samsung", "A70", 70);
        Telemovel telemovel2 = new Telemovel("Xiaomi", "Redmi", 32);

        telemovel1.ligar();

        telemovel2.desligar();

        telemovel1.usarTelemovel(20);
        telemovel2.usarTelemovel(20);

    }
}
