const RequestHandler = require('./requestHandler');

// Input dari file external
const baseUrl = 'http://localhost:5000/download/';
const url = '12scQFm2otAt7HrkRPxqvIYhyNIr8ss-Z';
const data = 'suburban_shabby_house_low_poly.glb';

// Membuat instance class dan mengirimkan permintaan
//new RequestHandler(baseUrl + url, data).sendData();
new RequestHandler(url, data).sendData();
