package ex04;

public class Cilindro {
    private double raio;
    private double altura;

    /**
     * @param raio   Base do Cilindro
     * @param altura Altura do Cilindro
     */

    public Cilindro(double raio, double altura) {
        this.raio = raio;
        this.altura = altura;
    }

    public double calcularVolume() {
        double volumeCilindro = Math.PI * (raio * raio) * altura;
        return volumeCilindro;
    }
}
