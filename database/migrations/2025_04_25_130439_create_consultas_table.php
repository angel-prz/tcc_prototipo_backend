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
            $table->foreignId('profissional_id')->references('id')->on('users')->onUpdate('cascade')->nullOnDelete();
            $table->foreignId('paciente_id')->references('id')->on('users')->onUpdate('cascade')->nullOnDelete();
            $table->enum('status', ['agendada','realizada', 'cancelada'])->default('agendada');
            $table->string('observacao')->nullable();
            $table->dateTime('data_hora');
            $table->timestamps();     
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
