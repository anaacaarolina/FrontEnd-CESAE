package ex11;

public class CarteiraDigital {
    private String proprietario;
    private double saldo;
    private String moeda;
    private boolean ativa;

    public CarteiraDigital(String proprietario, String moeda, boolean ativa) {
        this.proprietario = proprietario;
        this.saldo = 0;
        this.moeda = moeda;
        this.ativa = ativa;
    }

    public String getProprietario() {
        return proprietario;
    }

    public double getSaldo() {
        return saldo;
    }

    public String getMoeda() {
        return moeda;
    }

    public boolean getAtiva() {
        return ativa;
    }

    public void enviarDinheiro(double valor, CarteiraDigital carteiraDestino) {
        if (!ativa || !carteiraDestino.ativa) {
            System.out.println("Uma das carteiras está inativa");
            return;
        }
        if (!moeda.equals(carteiraDestino.moeda)) {
            System.out.println("As carteiras usam moedas diferentes");
            return;
        }
        if (valor <= 0) {
            System.out.println("Valor inválido");
            return;
        }
        if (valor <= saldo) {
            saldo -= valor;
            carteiraDestino.saldo += valor;
        } else {
            System.out.println("Erro ao enviar dinheiro");
        }
    }

    public void adicionarSaldo(double valor) {
        if (valor < 0) {
            System.out.println("Não é possível adicionar saldo negatigvo");
            System.out.println("Saldo: " + saldo);
            return;
        } else if (valor == 0) {
            System.out.println("O saldo mantêm-se o mesmo");
            System.out.println("Saldo: " + saldo);
        } else {
            saldo += valor;
            System.out.println("Foi adicionado o valor de " + valor + " à conta");
            System.out.println("Saldo: " + saldo);
        }
    }

    public void subtrairSaldo(double valor) {
        if (valor < 0) {
            System.out.println("Não é possível subtrair saldo negatigvo");
            System.out.println("Saldo: " + saldo);
            return;
        } else if (valor == 0) {
            System.out.println("O saldo mantêm-se o mesmo");
            System.out.println("Saldo: " + saldo);
        } else {
            saldo -= valor;
            System.out.println("Foi subtraído o valor de " + valor + " à conta");
            System.out.println("Saldo: " + saldo);
        }
    }

    public void consultarSaldo() {
        System.out.println("\n ==== " + proprietario + " ====");
        System.out.printf("Saldo: %.2f", saldo, moeda);
    }
}
