<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>Atualizar Usuario</h1>
    <form action="{{route('user.update',$user->id)}}" method="POST">
        @csrf
        {{-- <input type="hidden" name="_token" value="{{csrf_token()}}"/> --}}
        <table>
            <tr>
                <td>Nome:</td>
                <td><input type="text" name="name" value="{{$user->name}}"/></td>
            </tr>
            <tr>
                <td>Email:</td>
                <td><input type="text" name="email" value="{{$user->email}}"/></td>
            </tr>
            <tr>
                <td>Senha:</td>
                <td><input type="password" name="password" value="{{$user->passowrd}}"/></td>
            </tr>
            <tr>
                <td>Data de Nascimento:</td>
                <td><input type="date" name="data_nascimento" value="{{$user->data_nascimento}}"/></td>
            </tr>
            <tr>
                <td>Sexo:</td>
                <td><input type="text" name="sexo" value="{{$user->sexo}}"/></td>
            </tr>
            <tr>
                <td>Telefone:</td>
                <td><input type="texxt" name="numero_telefone" value="{{$user->numero_telefone}}"/></td>
            </tr>
            <tr>
                <td>Tipo de Usuario:</td>
                <td>
                    <input type="radio" name ="paciente" id="paciente" value="paciente">
                    <label for="paciente">Paciente</label><br>

                    <input type="radio" name ="profissionalSaude" id="profissionalSaude" value="profissionalSaude">
                    <label for="profissionalSaude">Profissional da Saude</label><br>
                </td>
            </tr>
            <tr align="center">
                <td colspan="2">
                    <input type="submit" value="Salvar"/>
                    <a href="/users"><button form=cancel >Cancelar</button></a>
                </td>
            </tr>
            
        </table>
    </form>
</body>

</html>