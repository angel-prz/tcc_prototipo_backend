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
        Schema::create('consultas', function (Blueprint $table) {
            $table->id();
            /* $table->id_paciente();
            $table->id_profissional(); */
            $table->foreignId('id_profissional')->references('id')->on('users')->onUpdate('cascade')->nullOnDelete();
            $table->foreignId('id_paciente')->references('id')->on('users')->onUpdate('cascade')->nullOnDelete();
            //$table->enum('tipo_consulta', ['presencial','teleconsulta'])->default('presencial');
            $table->enum('status', ['agendada','realizada', 'cancelada'])->default('agendada');
            $table->string('observacao')->nullable();
            $table->dateTime('data_hora');
            $table->timestamps();
            /* $table->string('sintomas')->nullable();
            $table->string('diagnostico')->nullable();
            $table->string('prescricao')->nullable();
            $table->string('receituario')->nullable();
            $table->string('laudo')->nullable();
            $table->string('atestado')->nullable();
            $table->string('exame')->nullable();
            $table->string('exame_resultado')->nullable(); */
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('consultas');
    }
};
