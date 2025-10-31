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
        Schema::create('saude_medica', function (Blueprint $table) {
            $table->id();
            $table->foreignId('paciente_id')->references('id')->on('pacientes')->onUpdate('cascade')->onDelete('cascade');
            $table->string('alergias')->nullable();
            $table->string('ulcera')->nullable();
            $table->string('cirurgias')->nullable();
            $table->string('tonturas_convulsoes_desmaios')->nullable();
            $table->string('medicacao')->nullable();
            $table->string('problema_cardiaco')->nullable();
            $table->string('problema_coagulacao')->nullable();
            $table->string('febre_reumatica')->nullable();
            $table->string('psicopatias')->nullable();
            $table->string('medico')->nullable();
            $table->string('hepatite')->nullable();
            $table->string('diabete')->nullable();
            $table->string('problemas_respiratorios')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('saude_medica');
    }
};
