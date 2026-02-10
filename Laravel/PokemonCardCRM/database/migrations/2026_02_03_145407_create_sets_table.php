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
        Schema::create('sets', function (Blueprint $table) {
            $table->id();
            $table->string('apiId',50)->unique(); 
            $table->string('name',255); 
            $table->string('series',255)->nullable(); 
            $table->integer('printedTotal')->nullable();
            $table->integer('total')->nullable();
            $table->string('ptcgoCode',10)->nullable(); 
            $table->date('releaseDate')->nullable(); 
            $table->dateTime('updatedAt')->nullable();
            $table->string('symbol',255)->nullable();
            $table->string('logo',255)->nullable();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sets');
    }
};
