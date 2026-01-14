package ex03;

public class area {
    public static void main(String[] args) {
        //Crie um programa que calcule a área de um retângulo. 
        //Declare variáveis para a base e a altura, e imprima o resultado

        double baseRetangulo=2, alturaRetangulo=5;
        double areaRetangulo = baseRetangulo*alturaRetangulo;

        System.out.println("A área de um retângulo com "+baseRetangulo+"cm de base e "+alturaRetangulo+"cm de altura é "+areaRetangulo+"cm.");

        double baseTriangulo = 5;
        double alturaTriangulo = 10;
        double areaTriangulo = (baseTriangulo*alturaTriangulo)/2;

        System.out.println("A área de um triangulo com "+baseTriangulo+"cm de base e "+alturaTriangulo+"cm de altura é "+areaTriangulo+"cm.");

        double raioCirculo = 2;
        double areaCirculo = Math.PI*(raioCirculo*raioCirculo);

        System.out.println("A área de um circulo com "+raioCirculo+"cm de raio é "+areaCirculo+"cm.");
    }
}
