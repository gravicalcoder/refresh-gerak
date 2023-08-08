const request = require('superagent');

class RequestHandler {
  constructor(baseUrl, data) {
    this.completeUrl = 'http://localhost:5000/downloadVehicle/'+baseUrl;
    this.requestBody = {
      token: {
        access_token: 'ya29.a0AfB_byD4uS6d1uhXw5pgg6qrO3lgrV2zIpWg6IcL1fOLoZgyA6WxUSC91i2RjUNvLhN5DzD8ZDYvZ9-CFEoSg8U8CTzGU1y8w3SbTSeLq6Iemz4VdUinAUnz4eGZu4cVA5PoPJ1r70JPzjoyVldUbuXQ-qx6aCgYKAUESARISFQHsvYlsr0hLYiyzaW2fB4mScx4hPw0163',
        refresh_token: '1//06U4Hq7uJxFNMCgYIARAAGAYSNwF-L9IrXQl93rccGccrzrsoqjLHOk5rHzxf7-gWbbAQBXEQ3WrNx2OzFEBQtzrVHpfdu2arNkE',
        scope: 'https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive',
        token_type: 'Bearer',
        id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxMWUzOWUyNzkyOGFlOWYxZTlkMWUyMTY0NmRlOTJkMTkzNTFiNDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4NDg3Mjk3MTQyODYtNm9tZmY0aTEyMDI4N2x2dWNmMjFqdnU4anEwMTgybzYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4NDg3Mjk3MTQyODYtNm9tZmY0aTEyMDI4N2x2dWNmMjFqdnU4anEwMTgybzYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTc5NzUzMTkwMjQzNjUxNTU1MjAiLCJhdF9oYXNoIjoiWHl2MV83TnBwdkRQakx4QlFlWjJFZyIsIm5hbWUiOiJBa3VnYWsgQmF3YWFsYSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQWNIVHRmWUlUZHU5d2RkSU1FVkhNYWZ6b0dtWEdaWWNQUHN4aFZmWVhZdjRkcFM9czk2LWMiLCJnaXZlbl9uYW1lIjoiQWt1Z2FrIiwiZmFtaWx5X25hbWUiOiJCYXdhYWxhIiwibG9jYWxlIjoiaWQiLCJpYXQiOjE2OTE0Mzk1MDQsImV4cCI6MTY5MTQ0MzEwNH0.kVCm5_KphqsfYDiKi_LLkyLVyCOrMQ5gyPVz02QRWMwzCMlgHAIvHtmfY7E78wddd8QuZMc1-VtcU0t8OjkuOVjyfNOA0WTrgHARSB9y6p92He0AERQQMIt17jkCXmAwg-9oLvWZnTpD79H4Gm1qvkkWxKk0zP76TWnYUS-kUhCG65SrbZjIW6cmIjemuTLLyTvdR4_SQqNbloSjtFMBHznAZ2T4HXB__lO7HVhTcV3hRYIMrOzkpl_o25iHgW53b8P9JB3Jt6VtsRv0_7Pv4hFa9kdDUb7hYHUzWSKUN-6eZpO-FJbnedGuwdIaYGLvwLZf7fhG60E5h2njteqS7w',
        expiry_date: 1691443103987
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