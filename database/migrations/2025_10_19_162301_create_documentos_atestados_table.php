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
        Schema::create('documentos_atestados', function (Blueprint $table) {
            $table->id();
            $table->string('tipo_documento');
            $table->string('texto');
            $table->string('periodo');
            $table->foreignId(column: 'atendimento_id')->references('id')->on('atendimentos')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('documentos_atestados');
    }
};
