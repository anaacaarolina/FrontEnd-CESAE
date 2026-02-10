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
        Schema::create('cards', function (Blueprint $table) {
            $table->id();
            $table->string('apiId', 50)->unique();
            $table->unsignedBigInteger('setId');
            $table->string('name', 255);
            $table->string('supertype', 100)->nullable(); 
            $table->string('hp', 10)->nullable();
            $table->string('evolvesFrom', 255)->nullable();
            $table->string('number', 50)->nullable();
            $table->string('artist', 255)->nullable();
            $table->string('rarity', 50)->nullable();
            $table->text('flavorText')->nullable();
            $table->string('imageSmall', 255)->nullable(); 
            $table->string('imageLarge', 255)->nullable();
            $table->string('tcgplayerUrl', 255)->nullable();
            $table->string('cardmarketUrl', 255)->nullable();
            $table->integer('convertedRetreatCost')->nullable();
            $table->decimal('price', 10, 2)->nullable();
            $table->integer('storeTotal')->nullable();

            $table->foreign('setId')
                    ->references('id')
                    ->on('sets')
                    ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cards');
    }
};
