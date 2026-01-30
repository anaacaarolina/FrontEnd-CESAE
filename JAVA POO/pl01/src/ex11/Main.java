package ex11;

public class Main {
    public static void main(String[] args) {
        CarteiraDigital carteiraJoao = new CarteiraDigital("João Silva", "EUR", true);
        CarteiraDigital carteiraCarolina = new CarteiraDigital("Carolina Pinto", "EUR", true);
        CarteiraDigital carteiraRicardo = new CarteiraDigital("Ricardo Figueiredo", "EUR", true);

        carteiraJoao.adicionarSaldo(500);
        carteiraJoao.subtrairSaldo(75);
        carteiraCarolina.adicionarSaldo(120);
        carteiraCarolina.enviarDinheiro(100, carteiraRicardo);
        carteiraJoao.consultarSaldo();
        carteiraCarolina.consultarSaldo();
        carteiraRicardo.consultarSaldo();

    }
}
