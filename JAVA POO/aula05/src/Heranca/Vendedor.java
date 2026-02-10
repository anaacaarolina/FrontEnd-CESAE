package Heranca;

public class Vendedor extends Funcionario {
    private double vendas;

    /**
     * 
     * @param nome
     * @param departamento
     * @param salario
     * @param vendas
     */
    public Vendedor(String nome, String departamento, double salario, double vendas) {
        super(nome, departamento, salario);
        this.vendas = vendas;
    }

    public double registarVendas(double valor) {
        vendas += valor;
        return vendas;
    }

    public void relatorioVendas() {
        String vendedor = getNome();
        double vendas = this.vendas;
        System.out.println("Vendedor " + vendedor + " realizou " + vendas + "€ em vendas este mês");
    }

    @Override
    public double bonus() {
        double bonusVendas = (vendas * 0.05);
        return this.getSalario() + bonusVendas;
    }

    @Override
    public String toString() {
        return super.toString() + " - Vendas: " + vendas + " €.";
    }
}
