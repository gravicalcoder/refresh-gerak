const request = require('superagent');
const RequestHandler = require('./requestHandler-character');

class Load {
  constructor() {
    this.url = 'http://localhost:5000/readDrive';
    this.requestBody = {
      "token": {
        access_token: 'ya29.a0AfB_byAhRLsZMkVAhJKksB-F43SpBT7yzP47Mft6I3O18KDD2Z2m2XgDkSJMZ5qMZsCO_78ubSzPohbXCMuVXsGRBRfIV7Pqr0FvbbByt2uksLko0y3jjvQd2cv62Yz404dJ0MtMjqbmgyxTJfEfApz_wQh5aCgYKAZgSARMSFQHsvYlsbN8Ui-iEFKDbOiXp1Hvzeg0163',
  refresh_token: '1//06igVi6IR9XwSCgYIARAAGAYSNwF-L9IrJg4vKkvYxhxCirAypK39Ei3qBoW26zHjvw57u-1fm4EkH0lDLRSvWHae4neqYvvzlHk',
  scope: 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.file',
  token_type: 'Bearer',
  id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxMWUzOWUyNzkyOGFlOWYxZTlkMWUyMTY0NmRlOTJkMTkzNTFiNDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4NDg3Mjk3MTQyODYtNm9tZmY0aTEyMDI4N2x2dWNmMjFqdnU4anEwMTgybzYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4NDg3Mjk3MTQyODYtNm9tZmY0aTEyMDI4N2x2dWNmMjFqdnU4anEwMTgybzYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDE0NTc3ODIwNDU3MDQxNzQyMjEiLCJhdF9oYXNoIjoiSkdHaVprUTBIS0VzZUxpNkFpR3JNZyIsIm5hbWUiOiJhc2VwIHN1bXBlbmEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0ZU41TnQxMDRkbjBDUnc2WVRXNTlxeHlHY0NWVUlUSm45T2ZKR1RUcVBnPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6ImFzZXAiLCJmYW1pbHlfbmFtZSI6InN1bXBlbmEiLCJsb2NhbGUiOiJpZCIsImlhdCI6MTY5MTQzOTE3MCwiZXhwIjoxNjkxNDQyNzcwfQ.bm4t_qVxjDccyYzH8Kr-9f-T31APOIM6O3NguPFoPqaXXk4ScUiIG3IvpR2S30qQbEt8FpnD4PloH4_9Qn1vP6EBJHs_nHNRbdwgnN1DEE3V7Vc21w9-dpbvr4zL53ejHqy-A8SGTyhaW3dPdenS1nLKN3196AXlHDQiKfSs63UIkTOarPCOe3wHw_UHgTjk9qZAeDD9eGkmo4ISXOZjogQmWsZNd0rU834BGczOuk-32pXz27jawqwIg7ouoYtYt2XHwo30IfUR3Cp_8f5PVEvA_wJNl5EqZuqwpXpBHHO_XjMOT1hH9SuT7HJ7hXrif948P6CP1Ish-yYAjSK-Tw',
  expiry_date: 1691442769063
      },
    };
  }

  
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async synchronousLoop(isiJson) {
    for (const item of isiJson) {
      const url = item.id;
      const data = item.name;

      new RequestHandler(url, data).sendData();
      await this.delay(1000); // Wait for 1 second before the next iteration
    }
  }

  start() {
    const rawJsonText = JSON.stringify(this.requestBody);
    request
      .post(this.url)
      .set('Content-Type', 'application/json')
      .send(rawJsonText)
      .then(response => {
        console.log('Response:', response.body);
        this.synchronousLoop(response.body);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }
}

module.exports = Load;