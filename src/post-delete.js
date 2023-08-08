const request = require('superagent');

const url = 'http://localhost:5000/deleteFile/1wsjK5-poJSxwhjrGyFOamYM82yOX8Gr3';

const requestBody = 
{

  
    "token":{
    access_token: 'ya29.a0AbVbY6MmGptG_pSX96qVTUrQNrRw53eZlj9b2pwQEbRxk_H21PpqzZtagxIsP1KAG1ATMOSfVssIh5GY1UhUDKWiuuN3G8NmH58TSfGPkMHg5Bi90VmFfwjvBLD5EiJ9pYAuzQQc1-o721P7lC0XSM0LXU06aCgYKAaMSARASFQFWKvPl0o4QgOhEoh0usabeTR845w0163',
    refresh_token: '1//06tF65zTN5EpMCgYIARAAGAYSNwF-L9Ir1QplVVsimWLt-uJTmh6FgR33fxB77w1LL6VtXHyQC6Xk_aUhuVbeBMN4Mc19jlKfQ8I',
    scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata.readonly',
    token_type: 'Bearer',
    id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImZkNDhhNzUxMzhkOWQ0OGYwYWE2MzVlZjU2OWM0ZTE5NmY3YWU4ZDYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4NDg3Mjk3MTQyODYtNm9tZmY0aTEyMDI4N2x2dWNmMjFqdnU4anEwMTgybzYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4NDg3Mjk3MTQyODYtNm9tZmY0aTEyMDI4N2x2dWNmMjFqdnU4anEwMTgybzYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDQ2MTc3MzY1MDA3NjQ2NDgyNDciLCJhdF9oYXNoIjoiZ1JnNm1jZUM1Ym8zbFZISWk4UElSZyIsIm5hbWUiOiJSaXMgUmV6ZXR0YSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQWNIVHRlUVV0QUJRck02ZE1EandETU1ra0tJOWRDTFQ0amJWbWVTZFduTUdNX1U9czk2LWMiLCJnaXZlbl9uYW1lIjoiUmlzIiwiZmFtaWx5X25hbWUiOiJSZXpldHRhIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2OTA4OTU1OTQsImV4cCI6MTY5MDg5OTE5NH0.mCODqLyA_5-Lfv_QRX5DQiPSznXHyJsrCV9X9BzDydxYhPk3vnZYsrIZ7U7OWj1ZcAPnKrjS2Yx19FR1XBXSw5IqDKQF3O7AexaO5fVjEqghKMjRzbJOiJ4ML2ow_UzyS6Nu4ZVa4meHrrz1mLEHQMFrp6cFCB4avym4PW0lIv7l8AZf03jmk5cdA4ZrnoYIcuSQLhNapTI6VMvtbJgulnYEi26XZnFfxX3gV8b1BlRt_vL6x_2Oi_KZqyEn0lsdKORl8J8I2BuZ_a0xBEzga3066fhPYb7i-cWRKYfk0xieCjBZsEOaq5kAm2ChDxdz85EhiHyJjG9NW-GP-budVA',
    expiry_date: 1690899193224
    }
};


  const rawJsonText = JSON.stringify(requestBody);
 //const rawJsonText = requestBody

  request
    .post(url)
    .set('Content-Type', 'application/json') // Mengatur header Content-Type menjadi application/json
    .send(rawJsonText) // Mengirimkan body request dalam bentuk raw JSON text
    .then(response => {
      console.log('Response:', response.body);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });