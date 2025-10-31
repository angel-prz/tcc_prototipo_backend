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
        Schema::create('dispensas_educacao_fisica', function (Blueprint $table) {
            $table->id();
            $table->foreignId('aluno_id')
                ->constrained()
                ->cascadeOnDelete();
            $table->foreignId('consulta_id')
                ->constrained()
                ->cascadeOnDelete();
            $table->string('turma');
            $table->text('motivo');
            $table->date('comeco');
            $table->date('fim');
            $table->integer('numero_dias');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dispensas_educacao_fisica');
    }
};
