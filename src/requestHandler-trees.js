const request = require('superagent');

class RequestHandler {
  constructor(baseUrl, data) {
    this.completeUrl = 'http://localhost:5000/downloadTrees/'+baseUrl;
    this.requestBody = {
      token: {
        access_token: 'ya29.a0AfB_byAcjgZ6482IW53wduJwbaG8_h-eyu2YLrLDLx1iOApR8Y90sT4myzIuhVuKNH0iX35Q_eF5JJsuhnaCg8vzNAhNVgPxpxhoCe5B6OgrLvJwrDxoZZ2AaHJiwXcfpshITOkX2QYnbTLQqKsplshYa1U7aCgYKAW8SARASFQHsvYlsIqLY1839l5iqtbOh0bM49Q0163',
        refresh_token: '1//06bgfLXs6phHnCgYIARAAGAYSNwF-L9Ir3cKS8DHWZN8wYigXijhTuMEGHGI5ovBNr_YmN9SCpW1K4qUHMl3eLP0xRM5-EU2jwNg',
        scope: 'https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/userinfo.profile',
        token_type: 'Bearer',
        id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxMWUzOWUyNzkyOGFlOWYxZTlkMWUyMTY0NmRlOTJkMTkzNTFiNDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4NDg3Mjk3MTQyODYtNm9tZmY0aTEyMDI4N2x2dWNmMjFqdnU4anEwMTgybzYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4NDg3Mjk3MTQyODYtNm9tZmY0aTEyMDI4N2x2dWNmMjFqdnU4anEwMTgybzYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTEyMzU1MTM1MTU3MDQzMzAxMTQiLCJhdF9oYXNoIjoiWEJKdHhqNll1UFlTdzlTOWhMc290QSIsIm5hbWUiOiJ0cmVlZCBlcG9zaXQiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0ZkUxY1RkaFFnUFBMaFJwS1JRbVRTaGNwMVJxaThiT3N6X0xrWnZ2MmpfPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6InRyZWVkIiwiZmFtaWx5X25hbWUiOiJlcG9zaXQiLCJsb2NhbGUiOiJpZCIsImlhdCI6MTY5MTQ0MTU0OCwiZXhwIjoxNjkxNDQ1MTQ4fQ.GTrcdTkej1fcoLNB6N5NnNF6p5lyJ9IpSYfdJIP1XPALj6Wq5ooBOSAvrQkV_Xf1FBSEFnRuNh98Y4OEhx1QcZOWTzfMhnDmezxnTm85iAR0ZCYsN3GV3fiT-VjTHjUp5wbMiCgXT2asVdMdK7hpPvwXNi78oLBOzXH4DcOYZaka_SCCNsN9YNBxVZvBSgvz2bCLMe8EJWJNLdzCLdIgbUW58IFedQuGddaNnZ3syuFQZbs8Zrq5OGMBv8w60Oug5USA1xqYugjCsOdoVgXGbEVCWso1LxYzEEB4ReRYG6voX0K9gAnGoqI2IS3ocqLQz3sJeKlXh-GepYk6geGOrg',
        expiry_date: 1691445147255
      },
    };
    this.data = data;
  }

  async sendData() {
    try {
      const combinedData = {
        data: this.data,
        rawJsonText: JSON.stringify(this.requestBody),
      };

      const response = await request
        .post(this.completeUrl)
        .set('Content-Type', 'application/json')
        .send(combinedData);

      console.log('Response:', response.body);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
}

module.exports = RequestHandler;