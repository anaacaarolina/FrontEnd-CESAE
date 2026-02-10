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
        Schema::create('card_to_types', function (Blueprint $table) {
              $table->unsignedBigInteger('cardId');
            $table->unsignedBigInteger('typeId');

             $table->foreign('cardId')
                    ->references('id')
                    ->on('cards')
                    ->onDelete('cascade');

             $table->foreign('typeId')
                    ->references('id')
                    ->on('energy_types')
                    ->onDelete('cascade');    ;
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('card_to_types');
    }
};
