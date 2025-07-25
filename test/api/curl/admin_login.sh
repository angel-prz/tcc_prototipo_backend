#!/bin/bash

# Endereço do Endpoint da API
url="http://127.0.0.1:8000/api/v1/login"

# methodo POST com os parametros de login
curl -X POST -d 'email=admin@sys.com&password=administrador' "$url"
# -H  "Authorization: Bearer YOUR_API_KEY"
