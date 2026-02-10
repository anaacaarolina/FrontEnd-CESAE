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
        Schema::create('attacks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cardId');
            $table->string('attackName', 255)->nullable();
            $table->string('attackDamage', 50)->nullable();
            $table->text('attackDescription')->nullable();


             $table->foreign('cardId')
                    ->references('id')
                    ->on('cards')
                    ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attacks');
    }
};
