const request = require('superagent');
const RequestHandler = require('./requestHandler-bushes');

class Load {
  constructor() {
    this.url = 'http://localhost:5000/readDrive';
    this.requestBody = {
      "token": {
        access_token: 'ya29.a0AfB_byCUStnCjj5Br8U6KGoDU-ap3HSeAEMiz6mR-V8MC5ymfCYkHGNrzcnFKsbXNAeMxeFPiBGxzNLxYrqT8xWhiuj1ks3zN0GA34pkljHPsohVicU2Z_QMLaTDnCQC8HCwIdnvz43NTAVUqtdv4WHpYQ_MaCgYKAfMSARMSFQHsvYlszaF_JXtu8h0WLLVDItLn2Q0163',
        refresh_token: '1//06QmhtsCTDIMECgYIARAAGAYSNwF-L9Ir1nNTQN_ikF7jwmxRAaokqB1-I07vRrSQnrDhXUvqC_8jv7rCJBzxmAbgTO9N3ksPSAo',
        scope: 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.metadata.readonly',
        token_type: 'Bearer',
        id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxMWUzOWUyNzkyOGFlOWYxZTlkMWUyMTY0NmRlOTJkMTkzNTFiNDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4NDg3Mjk3MTQyODYtNm9tZmY0aTEyMDI4N2x2dWNmMjFqdnU4anEwMTgybzYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4NDg3Mjk3MTQyODYtNm9tZmY0aTEyMDI4N2x2dWNmMjFqdnU4anEwMTgybzYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDMzODEzMjA5NjI0MDI2MTI2MTYiLCJhdF9oYXNoIjoiOENacDJJUEI5R0huX005eXIwa0plZyIsIm5hbWUiOiJJd2lsbCBOZXZyZWZvcmdldCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQWNIVHRlX2Z0NDBSVXE1TjdncENsdGJpcEl6bWJUSzAzNk94SXdjOTQ0Uk91UmM9czk2LWMiLCJnaXZlbl9uYW1lIjoiSXdpbGwiLCJmYW1pbHlfbmFtZSI6Ik5ldnJlZm9yZ2V0IiwibG9jYWxlIjoiaWQiLCJpYXQiOjE2OTE0Mzk3ODIsImV4cCI6MTY5MTQ0MzM4Mn0.NhEVYjfeBf_WAtqBWb6b5EHe5-FmUYZEhBbuMYKdPNkru4_zfkJmuVvtAdKMnugU_ulhwiAx_T32hYLNzSe9OSXPmCTvue1pRvoiDRTTgn0Sxspr-r7fINNf4NZ7RtpHerJMAFobNvH5cVf2FHxW9BTKbnO3I2_NjlvyRRL1rQ8Gy2B6gpM-KnyX8u7k_5Fg-dzpAl2JQ-l-C6vXutL84bI98aAdFk9ZrZz-HedZUI_1WTpO0ZdCF2TgsQyX4WbW1znG14sXn_XjXgr4QfD8h-MCBUj1nlKCxrjuUQUHQDZeJ2juapO4x6d-cbpGHNMsxgpmytsiF0ZA4ehWADUI7g',
        expiry_date: 1691443381199
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