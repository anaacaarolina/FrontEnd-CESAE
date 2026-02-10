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
        Schema::create('attack_costs', function (Blueprint $table) {
            $table->unsignedBigInteger('attackId');
            $table->unsignedBigInteger('typeId');
            $table->integer('quantity')->nullable();

             $table->foreign('attackId')
                    ->references('id')
                    ->on('attacks')
                    ->onDelete('cascade');
                    
            $table->foreign('typeId')
                ->references('id')
                ->on('energy_types')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attack_costs');
    }
};
