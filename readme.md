curl -H "Content-Type: application/json" -X POST -d "{\"username\":\"test\",\"password\":\"test\"}" http://localhost:8080/api/account

curl -H "Content-Type: application/json" -X POST -d "{\"username\":\"test\",\"password\":\"test\"}" http://localhost:8080/api/session

{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJlZGUwMzkyODYzZDg4NzcxOWFhNDMzNWYxNjAwMWI1OSIsInVzZXJuYW1lIjoidGVzdCIsImRhdGVDcmVhdGVkIjoxNDMwOTUyMzgyMTgyLCJpYXQiOjE0MzEzOTU1MzMsImV4cCI6MTQzMTQxMzUzM30.aqqOb2lxaCj7i2UY6l0JQUVpib-UW1H32WlvBix6Kgs"}

curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJlZGUwMzkyODYzZDg4NzcxOWFhNDMzNWYxNjAwMWI1OSIsInVzZXJuYW1lIjoidGVzdCIsImRhdGVDcmVhdGVkIjoxNDMwOTUyMzgyMTgyLCJpYXQiOjE0MzEzOTU1MzMsImV4cCI6MTQzMTQxMzUzM30.aqqOb2lxaCj7i2UY6l0JQUVpib-UW1H32WlvBix6Kgs" http://localhost:8080/api/replay