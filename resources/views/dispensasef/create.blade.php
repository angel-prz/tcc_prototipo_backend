    <!-- Knowing is not enough; we must apply. Being willing is not enough; we must do. - Leonardo da Vinci -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dispensa de Educacao Fisica</title>
</head>

<body>
<h1>Registrar dispensa de educacao fisica</h1>
    <form action="/dispensaef" method="POST">
        @csrf
        {{-- <input type="hidden" name="_token" value="{{csrf_token()}}"/> --}}
    <table>
            <tr>
                <label for="aluno_id">Aluno:</label>
                <select name="aluno_id" id="aluno_id" required>
                    @foreach ($consultas as $consulta)
                        <option value="{{ $consulta->paciente->id }}">
                            {{ $consulta->paciente->user->name }}
                        </option>
                    @endforeach
                </select>
            </tr>
            <tr>
                <label for="consulta_id">Consulta:</label>
                <select name="consulta_id" id="consulta_id" required>
                    @foreach ($consultas as $consulta)
                        <option value="{{ $consulta->id }}">
                            {{ $consulta->id }}
                        </option>
                    @endforeach
                </select>
            </tr>
            <tr>
                <td>Turma:</td>
                <td><input type="text" name="turma"/></td>
            </tr>
            <tr>
                <td>Motivo:</td>
                <td><input type="text" name="motivo"/></td>
            </tr>
            <tr>
                <td>Fomeco:</td>
                <td><input type="date" name="comeco"/></td>
            </tr>
            <tr>
                <td>Fim:</td>
                <td><input type="date" name="turma"/></td>
            </tr>
            <tr>
                <td>Numero de dias:</td>
                <td><input type="number" name="numero_dias"/></td>
            </tr>

            <tr align="center">
                <td colspan="2"><input type="submit" value="Criar"/></td>
            </tr>
            <tr align="center">
                <td colspan="2"><a href="/dispensasef" style="display: inline">&#9664;&nbsp;Voltar</a></td>
            </tr>
    </table>
    </form>
    <script>
    const consultas = @json($consultas);

    document.getElementById('aluno_id').addEventListener('change', function () {
        const pacienteId = this.value;
        const consultaSelect = document.getElementById('consulta_id');

        // Clear previous options
        consultaSelect.innerHTML = '<option value="">Selecione uma consulta</option>';

        // Filter consultas by selected paciente_id
        consultas.forEach(consulta => {
            if (consulta.paciente.id == pacienteId) {
                const option = document.createElement('option');
                option.value = consulta.id;
                option.text = `Consulta #${consulta.id} - ${consulta.data}`;
                consultaSelect.appendChild(option);
            }
        });
    });
</script>
</body>
</html>
