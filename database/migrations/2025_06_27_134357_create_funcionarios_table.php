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
        Schema::create('funcionarios', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->primary();
            $table->foreign('id')->references('id')->on('pacientes')->constrained()->cascadeOnDelete();
            $table->enum('tipo_funcionario', ['terceirizado','docente', 'tecnico_administrativo'])->default('docente');
            $table->string('cargo');
            $table->string('setor')->nullable();
            $table->string('ramal')->nullable();
            $table->enum('turno', ['matutino', 'vespertino', 'noturno'])->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('funcionarios');
    }
};
