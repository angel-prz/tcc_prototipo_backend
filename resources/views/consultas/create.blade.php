    <!-- Knowing is not enough; we must apply. Being willing is not enough; we must do. - Leonardo da Vinci -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>Agendar consulta</h1>
    <form action="/consulta" method="POST">
        @csrf
        {{-- <input type="hidden" name="_token" value="{{csrf_token()}}"/> --}}
        <table>
            <!--   Fazer consulta no db e mostrar os pacientes cadastrados com um select *A FAZER-->                  
            <tr> 
                <td>ID Paciente:</td>
                <td><input type="text" name="id_paciente"/></td>
            </tr>
            
            <tr> 
                <td>ID Profissional:</td>
                <td><input type="text" name="id_profissional"/></td>
            </tr>

            <tr>
                <td>Data e Hora:</td>
                <td><input type="datetime-local" name="data_hora"/></td>
            </tr>
            
            <tr align="center">
                <td colspan="2"><input type="submit" value="Criar"/></td>
            </tr>
            <tr align="center">
                <td colspan="2"><a href="/users" style="display: inline">&#9664;&nbsp;Voltar</a></td>
            </tr>
            
        </table>
    </form>
</body>

</html>

