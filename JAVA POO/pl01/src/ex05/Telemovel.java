package ex05;

public class Telemovel {
    private String marca;
    private String modelo;
    private int bateria;
    private boolean ligado;

    /**
     * @param marca   Marca do telemóvel
     * @param modelo  Modelo do telemóvel
     * @param bateria Bateria do telemóvel, valor entre 0 e 100
     * @param ligado  Se o telemóvel está ou não ligado
     */

    public Telemovel(String marca, String modelo, int bateria) {
        this.marca = marca;
        this.modelo = modelo;
        this.bateria = bateria;
    }

    public void ligar() {
        if (bateria == 0) {
            ligado = false;
            System.out.println("O telemóvel não tem bateria");
        } else {
            ligado = true;
            System.out.println("O telemóvel está ligado");
        }
    }

    public void desligar() {
        ligado = false;
        System.out.println("O telemóvel está desligado");
    }

    public void usarTelemovel(int minutos) {
        if (ligado) {
            for (int i = minutos; i <= 0; i--) {
                bateria--;
            }
        } else {
            System.out.println("O telemóvel está desligado");
        }
        System.out.println("O telemóvel ficou com " + bateria + "% de bateria");
    }

    public String getmarca() {
        return marca;
    };

    public String getmodelo() {
        return modelo;
    };

    public int getbateria() {
        return bateria;
    };

    public boolean getligado() {
        return ligado;
    };
}
