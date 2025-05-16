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
        Schema::create('profissionals', function (Blueprint $table) {
            $table->id();
            /* $table->foreign('id')->references('id')->on('users')->onUpdate('cascade')->nullOnDelete(); */
            $table->enum('tipo_profissional', ['medico','odontologista', 'enfermeiro', 'tecnico_enfermeiro', 'bolsista'])->default('medico');
            $table->enum('sigla_conselho', ['CRM', 'COREN', 'CRO'])->nullable();
            $table->string('uf_conselho')->nullable();
            $table->string('numero_conselho')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profissionals');
    }
};
