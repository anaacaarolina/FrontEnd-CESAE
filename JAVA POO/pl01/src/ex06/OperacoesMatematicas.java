package ex06;

public class OperacoesMatematicas {

    public void potencia(double base, double expoente) {
        double resultadoPotencia = Math.pow(base, expoente);
        System.out.println(base + " elevado a " + expoente + " é: " + resultadoPotencia);
    }

    public void raizQuadrada(double numero) {
        double resultadoRaiz = Math.sqrt(numero);
        System.out.println("A raíz quadrada de " + numero + " é: " + resultadoRaiz);
    }

    public void media(double x, double y, double z) {
        double resultadoMedia = (x + y + z) / 3;
        System.out.println("O resultado da média dos números " + x + ", " + y + " e " + z + " é: " + resultadoMedia);
    }
}
