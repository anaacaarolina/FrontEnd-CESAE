package ex03;

public class Triangulo {
    private double base;
    private double altura;

    /**
     * @param base   Base do triangulo
     * @param altura Altura do triangulo
     */

    public Triangulo(double base, double altura) {
        this.base = base;
        this.altura = altura;
    }

    public double calcularAreaTriangulo() {
        double areaTriangulo = (base * altura) / 2;
        return areaTriangulo;
    }

    public double getBase() {
        return base;
    }

    public double getAltura() {
        return altura;
    }

}
