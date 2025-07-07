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
        Schema::create('alunos', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->primary();
            $table->foreign('id')->references('id')->on('pacientes')->constrained()->cascadeOnDelete();
            $table->string('turma');
            $table->string('matricula');
            $table->unique('matricula');
            $table->string('campus');
            $table->string('curso');
            $table->string('semestre');
            $table->year('ano');
            $table->string('fone_responsavel');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alunos');
    }
};
