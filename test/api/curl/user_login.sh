#!/bin/bash

# Endereço do Endpoint da API
url="http://127.0.0.1:8000/api/v1/login"

# methodo POST com os parametros de login
curl -X POST -d 'email=paciente@sys.com&password=123' "$url"
# -H  "Authorization: Bearer YOUR_API_KEY"
