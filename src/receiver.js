const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.get('/proxy', async (req, res) => {
  try {
    const url = 'https://drive.google.com/uc?id=1SijwuPEC26pjIjXr_Gv3DfQhNzGmlvIm';
    //const url = 'https://drive.google.com/uc?id=1KpgbJAlVWvh8jK9EIV_evQO9_uePhLp2';
    const response = await fetch(url);
    const data = await response.blob();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'model/gltf+json');
    res.send(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
