package Heranca;

/**
 * Classe Funcionário - Superclasse para o Sistema de Gestão de Funcionários
 * 
 * Representa um funcionário comum com informações sobre o nome, salário,
 * departamento e horas de trabalho
 * 
 * Serve como base para outras subclasses especializadas (vendedor, gerente)
 * 
 * @Author Carolina Pinto
 * @version 1.0
 * 
 */

public class Funcionario {
    private String nome, departamento;
    private double salario;
    private int horas_trabalho;

    /**
     * @param nome
     * @param salario
     * @param departamento
     */
    public Funcionario(String nome, String departamento, double salario) {
        this.nome = nome;
        this.departamento = departamento;
        this.salario = salario;
        this.horas_trabalho = 0;
    }

    /**
     * Método trabalhar, que adiciona horas ao contador
     * 
     * @param horas
     */
    public void trabalhar(int horas) {
        this.horas_trabalho += horas;
        System.out.println(nome + " trabalhou " + horas + ". Total de horas: " + horas_trabalho);
    }

    public double getSalario() {
        return salario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    /**
     * Calcula o bónus do funcionário
     * Na classe superclasse, o bónus é o salário + 100 euros
     * 
     * @return Valor do bónus em euros
     */

    public double bonus() {
        return salario + 100;
    }

    @Override
    /**
     * Retorna uma representação em string do objeto Funcionario
     * 
     * @return String com informação do funcionario
     */
    public String toString() {
        return "Nome: " + nome + ". Departamento: " + departamento + ". Salário: " + salario + ". Horas: "
                + horas_trabalho;
    }
}
