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
        Schema::create('abilities', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cardId');
            $table->string('abilityName', 255)->nullable();
            $table->text('abilityDescription')->nullable();
            $table->string('abilityType', 50)->nullable();
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
        Schema::dropIfExists('abilitiess');
    }
};
