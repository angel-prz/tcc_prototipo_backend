<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('profissionais', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->primary();
            $table->foreign('id')->references('id')->on('users')->constrained()->cascadeOnDelete();
            $table->enum('tipo_profissional', ['medico','odontologista', 'enfermeiro', 'tecnico_enfermeiro', 'bolsista'])->default('medico');
            $table->enum('sigla_conselho', ['CRM', 'COREN', 'CRO'])->nullable();
            $table->string('uf_conselho')->nullable();
            $table->string('numero_conselho')->nullable();
            $table->timestamps();
        });

        //Assegurar que o tipo de profissional e o conselho seja o mesmo ? fazer no formresquest ou front?
        /* DB::statement("
            ALTER TABLE profissionais
            ADD CONSTRAINT check_tipo_sigla
            CHECK (
                (tipo_profissional = 'medico' AND sigla_conselho = 'CRM') OR
                (tipo_profissional = 'odontologista' AND sigla_conselho = 'CRO') OR
                (tipo_profissional IN ('enfermeiro', 'tecnico_enfermeiro') AND sigla_conselho = 'COREN') OR
                (tipo_profissional = 'bolsista' AND sigla_conselho IS NULL)
            )
        "); */
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profissionais');
    }
};
