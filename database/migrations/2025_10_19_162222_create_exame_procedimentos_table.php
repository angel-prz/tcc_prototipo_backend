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
        Schema::create('exame_procedimentos', function (Blueprint $table) {
            $table->id();
            $table->string('exame')->nullable();
            $table->string('tipo_exame')->nullable();
            $table->string('quantidade')->nullable();
            $table->foreignId('atendimento_id')->references('id')->on('atendimentos')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exame_procedimentos');
    }
};
