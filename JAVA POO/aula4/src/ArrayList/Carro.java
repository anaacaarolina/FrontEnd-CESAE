package ArrayList;

public class Carro {
    private String marca;
    private String modelo;
    private int velocidadeMaxima;
    private int velocidadeAtual;

    /**
     * @param marca            - Marca do Carro
     * @param modelo           - Modelo do Carro
     * @param velocidadeMaxima - Velocidade máxima do carro
     */
    public Carro(String marca, String modelo, int velocidadeMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }

    public String getMarca() {
        return marca;
    }

    public String getModelo() {
        return modelo;
    }

    public int getVelocidadeMaxima() {
        return velocidadeMaxima;
    }

    public int getVelocidadeAtual() {
        return velocidadeAtual;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public void setVelocidadeMaxima(int velocidadeMaxima) {
        this.velocidadeMaxima = velocidadeMaxima;
    }

    public void setVelocidadeAtual(int velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual;
    }

    public void acelerar(int incremento) {
        if (incremento <= 0) {
            System.out.println("Incremento inválido");
        } else if (incremento > velocidadeMaxima) {
            System.out.println("Acelerou até ao máximo!");
            System.out.println("Velocidade atual: " + velocidadeMaxima);
        } else {
            velocidadeAtual += incremento;
            System.out.println("Velocidade atual: " + velocidadeAtual);
        }
    }

    public void travar(int decremento) {
        if (decremento <= 0) {
            System.out.println("Decremento inválido");
        } else {
            int novaVelocidade = this.velocidadeAtual - decremento;
            if (novaVelocidade > 0) {
                System.out.println("A velocidade atua é: " + novaVelocidade);
            } else {
                System.out.println("Travou completamente");
            }
        }
    }

    /**
     * Retorna uma representação em string do objeto Carro
     * 
     * @return String com informação do carro
     */
    @Override
    public String toString() {
        return "Marca: " + marca + ". Modelo:  " + modelo + ". Velocidade Máxima: " + velocidadeMaxima
                + "km/h. Velocidade Atual: " + velocidadeAtual + "km/h.";
    }
}
