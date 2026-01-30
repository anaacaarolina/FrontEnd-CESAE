package ex08;

public class Main {
    public static void main(String[] args) {

        ContaBancaria conta = new ContaBancaria("Carolina", "12345");

        String estadoConta = conta.estadoConta();

        System.out.println("O estado da conta é " + estadoConta);

        conta.depositar(500);
        boolean atividade = conta.getAtiva();

        System.out.println("====INFORMAÇÃO====");
        System.out.println("Titular: " + conta.getTitular());
        System.out.println("Número da Conta: " + conta.getNumeroConta());
        System.out.println("Saldo: " + conta.getSaldo());
        if (atividade) {
            System.out.println("A conta está ativa");
        } else {
            System.out.println("A conta está desativada");
        }
    }
}
