<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>Inserir novo Usuario</h1>
    <form action="/user" method="POST">
        @csrf
        {{-- <input type="hidden" name="_token" value="{{csrf_token()}}"/> --}}
        <table>
            <tr>
                <td>Nome:</td>
                <td><input type="text" name="name"/></td>
            </tr>
            <tr>
                <td>Email:</td>
                <td><input type="text" name="email"/></td>
            </tr>
            <tr>
                <td>Senha:</td>
                <td><input type="password" name="password"/></td>
            </tr>
            <tr>
                <td>Data de Nascimento:</td>
                <td><input type="date" name="data_nascimento"/></td>
            </tr>
            <tr>
                <td>Sexo:</td>
                <td><input type="text" name="sexo"/></td>
            </tr>
            <tr>
                <td>Telefone:</td>
                <td><input type="texxt" name="numero_telefone"/></td>
            </tr>
            <tr>
                <td>Tipo de Usuario:</td>
                <td>
                    <input type="radio" name ="paciente" id="paciente" valor="paciente">
                    <label for="paciente">Paciente</label><br>

                    <input type="radio" name ="profissionalSaude" id="profissionalSaude" valor="profissionalSaude">
                    <label for="profissionalSaude">Profissional da Saude</label><br>
                </td>
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