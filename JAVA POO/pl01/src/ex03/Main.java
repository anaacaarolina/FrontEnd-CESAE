package ex03;

public class Main {
    public static void main(String[] args) {
        Triangulo triangulo1 = new Triangulo(1, 2);
        Triangulo triangulo2 = new Triangulo(3, 3);

        double area1 = triangulo1.calcularAreaTriangulo();
        double area2 = triangulo2.calcularAreaTriangulo();

        if (area1 > area2) {
            System.out.println("A área do triangulo 1 é maior. É " + area1);
        } else if (area2 > area1) {
            System.out.println("A área do triangulo 2 é maior. É " + area2);
        } else {
            System.out.println("Os triangulos têm a mesma área");
        }
    }
}
