package ex08;

public class ContaBancaria {
    private String titular;
    private String numeroConta;
    private double saldo;
    private boolean ativa;

    /**
     * @param titular     Titular da conta
     * @param numeroConta Número da conta
     * @param saldo       Saldo da conta
     * @param ativa       Se a conta está ativa ou não
     */

    public ContaBancaria(String titular, String numeroConta) {
        this.titular = titular;
        this.numeroConta = numeroConta;
        this.saldo = 0;
        this.ativa = true;
    }

    public String getTitular() {
        return titular;
    }

    public String getNumeroConta() {
        return numeroConta;
    }

    public double getSaldo() {
        return saldo;
    }

    public boolean getAtiva() {
        return ativa;
    }

    public String estadoConta() {
        if (saldo > 0) {
            return "Conta Positiva";
        } else if (saldo == 0) {
            return "Conta a Zero";
        } else {
            return "Conta Negativa";
        }
    }

    public void depositar(double valor) {
        if (ativa) {
            saldo += valor;
        }
    }
}
