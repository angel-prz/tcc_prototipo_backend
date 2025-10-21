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
        Schema::create('prescricao_medicamentos', function (Blueprint $table) {
            $table->id();
            $table->string('medicamento');
            $table->string('dosagem');
            $table->string('frequencia');
            $table->string('duracao');
            $table->string('instrucoes_adicionais');
            $table->foreignId('atendimento_id')->references('id')->on('atendimentos')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('prescricao_medicamentos');
    }
};
