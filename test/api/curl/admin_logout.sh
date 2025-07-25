#!/bin/bash

# Endereço do Endpoint da API
url="http://127.0.0.1:8000/api/v1/logout"

# methodo POST com os parametros de login
curl -X POST "$url" \
-H  "Authorization: Bearer 2|GDscIyWh1MTxbeWXH9QaK88SpsFbTI2Z95F9Jper14b0c8d1"
#-d 'email=admin@sys.com&password=administrador'
