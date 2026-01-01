<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //- nome da prenda (obrigatório) ---nome
        // - valor previsto (obrigatório) ---valor
        // - nome da pessoa que vai receber o presente (da tabela de users) (obrigatório) ---user_id
        // - valor gasto ---valor_gasto
        //Por defeito, quando se apaga um user é também apagada a prenda que lhe corresponde.(on delete cascade)
        //Ponto extra: deve haver uma coluna onde mostra a diferença entre o valor previsto e o gasto efectivo.


        Schema::create('gifts', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->double('valor');
            $table->unsignedBigInteger('user_id');
            $table->double('valor_gasto');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gifts');
    }
};
