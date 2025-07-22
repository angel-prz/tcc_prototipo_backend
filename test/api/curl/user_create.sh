#!/bin/bash

# Set the API endpoint
url="http://127.0.0.1:8000/users"

# Define the form data to send in the body (key=value format)
form_data="email=john.doe@example.com&name=JoaoDie&password=123&data_nascimento=1976-09-30&sexo=M&endereco=Avenida+dos+lagos&naturalidade=Pelotas&fone_celular=72181242&fone_fixo=218472112&tipo_usuario=admin"

# Send POST request with x-www-form-urlencoded data
curl -X POST "$url" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "$form_data"
