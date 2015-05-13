curl -H "Content-Type: application/json" -X POST -d "{\"username\":\"test\",\"password\":\"test\"}" http://localhost:8080/api/account

curl -H "Content-Type: application/json" -X POST -d "{\"username\":\"test\",\"password\":\"test\"}" http://localhost:8080/api/session

{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJlZGUwMzkyODYzZDg4NzcxOWFhNDMzNWYxNjAwMWM3YiIsImlhdCI6MTQzMTQ4MTE5OSwiZXhwIjoxNDMxNTI0Mzk5fQ.ng2NcnGbpMNeUV8oHOLXx7XlqQf2qwp34ePGDNGdR8c"}

curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJlZGUwMzkyODYzZDg4NzcxOWFhNDMzNWYxNjAwMWM3YiIsImlhdCI6MTQzMTQ4MTE5OSwiZXhwIjoxNDMxNTI0Mzk5fQ.ng2NcnGbpMNeUV8oHOLXx7XlqQf2qwp34ePGDNGdR8c" http://localhost:8080/api/replay