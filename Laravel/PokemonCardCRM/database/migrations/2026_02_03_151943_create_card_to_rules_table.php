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
        Schema::create('card_to_rules', function (Blueprint $table) {
              $table->unsignedBigInteger('cardId');
            $table->unsignedBigInteger('ruleId');

             $table->foreign('cardId')
                    ->references('id')
                    ->on('cards')
                    ->onDelete('cascade');

             $table->foreign('ruleId')
                    ->references('id')
                    ->on('rules')
                    ->onDelete('cascade');    
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('card_to_rules');
    }
};
