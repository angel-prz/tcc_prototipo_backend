#!/bin/bash

# Set the API endpoint with query parameters
url="http://127.0.0.1:8000/api/v1/profissionais"

# Send GET request using curl
curl -X GET "$url"
# -H  "Authorization: Bearer YOUR_API_KEY"
