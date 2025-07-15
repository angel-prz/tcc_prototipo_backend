    <!-- Act only according to that maxim whereby you can, at the same time, will that it should become a universal law. - Immanuel Kant -->
    <!-- Knowing is not enough; we must apply. Being willing is not enough; we must do. - Leonardo da Vinci -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Registrar Horario</title>
</head>

<body>
    <h1>Registrar Horario</h1>
    <form action="/horario_profissional" method="POST">
        @csrf
        {{-- <input type="hidden" name="_token" value="{{csrf_token()}}"/> --}}
        <table>
            <tr>
                <td>
                    <label for="profissional_id">Profissional:</label>
                    <select name="profissional_id" id="profissional_id" required>
                        @foreach ($profissionais as $profissional)
                            <option value="{{ $profissional->id }}">{{ $profissional->name }}</option>
                        @endforeach
                    </select>
                </td>
            </tr>

            <tr>
                <td>Dia:</td>
                <td><input type="text" name="dia_semana"/></td>
            </tr>
            <tr>
                <td>Horario de Entrada:</td>
                <td><input type="time" name="entrada"/></td>
            </tr>

            <tr>
                <td>Horario de Saida:</td>
                <td><input type="time" name="saida"/></td>
            </tr>

            <tr align="center">
                <td colspan="2"><input type="submit" value="Criar"/></td>
            </tr>
            <tr align="center">
                <td colspan="2"><a href="/horarios_profissional" style="display: inline">&#9664;&nbsp;Voltar</a></td>
            </tr>

        </table>
    </form>
</body>

</html>

