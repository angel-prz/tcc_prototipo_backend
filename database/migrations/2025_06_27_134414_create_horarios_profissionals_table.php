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
        Schema::create('horarios_profissionais', function (Blueprint $table) {
            $table->id();
            $table->foreignId('profissional_id')->references('id')->on('profissionais')->cascadeOnDelete();;
            $table->string('dia_semana');
            $table->time('entrada');
            $table->time('saida');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('horarios_profissionais');
    }
};
