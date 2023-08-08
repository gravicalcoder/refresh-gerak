const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { google } = require('googleapis');
const fs = require("fs");
const formidable = require('formidable');
const credentials = require('./credentials.json');


const client_id = credentials.web.client_id;
const client_secret = credentials.web.client_secret;
const redirect_uris = credentials.web.redirect_uris;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);


const SCOPE = ['https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive']

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send(' API Running'));


app.get('/getAuthURL', (req, res) => {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPE,
    });
    console.log(authUrl);
    return res.send(authUrl);
});



app.post('/getToken', (req, res) => {
    if (req.body.code == null) return res.status(400).send('Invalid Request');
    oAuth2Client.getToken(req.body.code, (err, token) => {
        if (err) {
            console.error('Error retrieving access token', err);
            return res.status(400).send('Error retrieving access token');
        }
        res.send(token);
    });
});



app.post('/getUserInfo', (req, res) => {
    if (req.body.token == null) return res.status(400).send('Token not found');
    oAuth2Client.setCredentials(req.body.token);
    const oauth2 = google.oauth2({ version: 'v2', auth: oAuth2Client });

    oauth2.userinfo.get((err, response) => {
        if (err) res.status(400).send(err);
        console.log(response.data);
        res.send(response.data);
    })
});



app.post('/readDrive', (req, res) => {
    if (req.body.token == null) return res.status(400).send('Token not found');
    oAuth2Client.setCredentials(req.body.token);
    const drive = google.drive({ version: 'v3', auth: oAuth2Client });
    drive.files.list({
        pageSize: 20,
    }, (err, response) => {
        if (err) {
            console.log('The API returned an error: ' + err);
            return res.status(400).send(err);
        }
        const files = response.data.files;
        if (files.length) {
            console.log('Files:');
            files.map((file) => {
                console.log(`${file.name} (${file.id})`);
            });
        } else {
            console.log('No files found.');
        }
        res.send(files);
    });
});



app.post('/fileUpload', (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        if (err) return res.status(400).send(err);
        const token = JSON.parse(fields.token);
        console.log(token)
        if (token == null) return res.status(400).send('Token not found');
        oAuth2Client.setCredentials(token);
        console.log(files.file);
        const drive = google.drive({ version: "v3", auth: oAuth2Client });
        const fileMetadata = {
            name: files.file.name,
        };
        const media = {
            mimeType: files.file.type,
            body: fs.createReadStream(files.file.path),
        };
        drive.files.create(
            {
                resource: fileMetadata,
                media: media,
                fields: "id",
            },
            (err, file) => {
                oAuth2Client.setCredentials(null);
                if (err) {
                    console.error(err);
                    res.status(400).send(err)
                } else {
                    res.send('Successful')
                }
            }
        );
    });
});



app.post('/deleteFile/:id', (req, res) => {
    if (req.body.token == null) return res.status(400).send('Token not found');
    oAuth2Client.setCredentials(req.body.token);
    const drive = google.drive({ version: 'v3', auth: oAuth2Client });
    var fileId = req.params.id;
    drive.files.delete({ 'fileId': fileId }).then((response) => { res.send(response.data) })
});



/*
app.post('/download/:id', (req, res) => {
  const { data, rawJsonText } = req.body
    //if (req.body.token == null) return res.status(400).send('Token not found');
    if (rawJsonText.token == null) return res.status(400).send('Token not found');
    //oAuth2Client.setCredentials(req.body.token);
    oAuth2Client.setCredentials(rawJsonText.token);

    const drive = google.drive({ version: 'v3', auth: oAuth2Client });
    const fileId = req.params.id;
    const namaFileGlb =  data;
    //console.log(fileId)
    /*
    drive.files.get({ fileId: fileId, alt: 'media' }, { responseType: 'stream' },
        function (err, response) {
          console.log(response)
          
            response.data
            
                .on('end', () => {
                    console.log('Done');
                })
                .on('error', err => {
                    console.log('Error', err);
                })
                .pipe(res);

                
        });
        */

        //2
        /*
        drive.files.get(
          { fileId: fileId, alt: 'media' },
          { responseType: 'stream' },
          (err, response) => {
            if (err) {
              console.error('Error while downloading file:', err);
              return res.status(500).send('Error while downloading file');
            }
        
           // const dest = fs.createWriteStream("./public/rumahe/forest_house.glb");
          // const dest = fs.createWriteStream("./public/rumahe/" + namaFileGlb);
          const dest = fs.createWriteStream(`./public/rumahe/${namaFileGlb}`);
            response.data

            */
            /*
              .on('end', () => {
                console.log('File  sudah berhasil diunduh.');
              })
              .on('error', (err) => {
                console.error('Error while downloading file:', err);
                fs.unlinkSync(downloadPath); // Hapus file yang tidak lengkap jika terjadi error
              })
              
              .pipe(dest);
              */

              /*
              .on('end', () => {
                console.log('File sudah berhasil diunduh.');
                res.status(200).send('File berhasil diunduh');
              })
              .on('error', (err) => {
                console.error('Error while downloading file:', err);
                fs.unlinkSync(`./public/rumahe/${namaFileGlb}`); // Hapus file yang tidak lengkap jika terjadi error
                res.status(500).send('Error while downloading file');
              })
              .pipe(dest);
              //.pipe(res);

          }
        );
        


        

});
*/


//3
app.use(bodyParser.json());

app.post('/download/:id', (req, res) => {

  const dataFromClient = req.body;
 // console.log(dataFromClient);
 // console.log(" ");
  //console.log(dataFromClient.data);

 // console.log(bodyParser.json(dataFromClient.rawJsonText));

  const jsonObject = JSON.parse(dataFromClient.rawJsonText);

 // console.log(" ");

 // console.log(jsonObject);
  /*
  const { data, rawJsonText } = req.body
  */
  
    if (jsonObject.token == null) return res.status(400).send('Token not found');
    

    oAuth2Client.setCredentials(jsonObject.token);
    //console.log()
    const drive = google.drive({ version: 'v3', auth: oAuth2Client });
    const fileId = req.params.id;
    const namaFileGlb =  dataFromClient.data;
    //console.log(fileId)


        drive.files.get(
          { fileId: fileId, alt: 'media' },
          { responseType: 'stream' },
          (err, response) => {
            if (err) {
              console.error('Error while downloading file:', err);
              return res.status(500).send('Error while downloading file');
            }
        
         
          const dest = fs.createWriteStream(`./public/character/${namaFileGlb}`);
            response.data

       
              .on('end', () => {
                console.log('File sudah berhasil diunduh.');
                res.status(200).send('File berhasil diunduh');
              })
              .on('error', (err) => {
                console.error('Error while downloading file:', err);
                fs.unlinkSync(`./public/rumahe/${namaFileGlb}`); // Hapus file yang tidak lengkap jika terjadi error
                res.status(500).send('Error while downloading file');
              })
              .pipe(dest);
              //.pipe(res);

          }
        );
        
       
});

app.post('/downloadBushes/:id', (req, res) => {

  const dataFromClient = req.body;
  const jsonObject = JSON.parse(dataFromClient.rawJsonText);


    if (jsonObject.token == null) return res.status(400).send('Token not found');
    

    oAuth2Client.setCredentials(jsonObject.token);

    const drive = google.drive({ version: 'v3', auth: oAuth2Client });
    const fileId = req.params.id;
    const namaFileGlb =  dataFromClient.data;
 


        drive.files.get(
          { fileId: fileId, alt: 'media' },
          { responseType: 'stream' },
          (err, response) => {
            if (err) {
              console.error('Error while downloading file:', err);
              return res.status(500).send('Error while downloading file');
            }
        
         
          const dest = fs.createWriteStream(`./public/bushes/${namaFileGlb}`);
            response.data

       
              .on('end', () => {
                console.log('File sudah berhasil diunduh.');
                res.status(200).send('File berhasil diunduh');
              })
              .on('error', (err) => {
                console.error('Error while downloading file:', err);
                fs.unlinkSync(`./public/rumahe/${namaFileGlb}`); // Hapus file yang tidak lengkap jika terjadi error
                res.status(500).send('Error while downloading file');
              })
              .pipe(dest);
              //.pipe(res);

          }
        );
        
       
});

app.post('/downloadRumahe/:id', (req, res) => {

  const dataFromClient = req.body;
  const jsonObject = JSON.parse(dataFromClient.rawJsonText);


    if (jsonObject.token == null) return res.status(400).send('Token not found');
    

    oAuth2Client.setCredentials(jsonObject.token);

    const drive = google.drive({ version: 'v3', auth: oAuth2Client });
    const fileId = req.params.id;
    const namaFileGlb =  dataFromClient.data;
 


        drive.files.get(
          { fileId: fileId, alt: 'media' },
          { responseType: 'stream' },
          (err, response) => {
            if (err) {
              console.error('Error while downloading file:', err);
              return res.status(500).send('Error while downloading file');
            }
        
         
          const dest = fs.createWriteStream(`./public/rumahe/${namaFileGlb}`);
            response.data

       
              .on('end', () => {
                console.log('File sudah berhasil diunduh.');
                res.status(200).send('File berhasil diunduh');
              })
              .on('error', (err) => {
                console.error('Error while downloading file:', err);
                fs.unlinkSync(`./public/rumahe/${namaFileGlb}`); // Hapus file yang tidak lengkap jika terjadi error
                res.status(500).send('Error while downloading file');
              })
              .pipe(dest);
              //.pipe(res);

          }
        );
        
       
});

app.post('/downloadTrees/:id', (req, res) => {

  const dataFromClient = req.body;
  const jsonObject = JSON.parse(dataFromClient.rawJsonText);


    if (jsonObject.token == null) return res.status(400).send('Token not found');
    

    oAuth2Client.setCredentials(jsonObject.token);

    const drive = google.drive({ version: 'v3', auth: oAuth2Client });
    const fileId = req.params.id;
    const namaFileGlb =  dataFromClient.data;
 


        drive.files.get(
          { fileId: fileId, alt: 'media' },
          { responseType: 'stream' },
          (err, response) => {
            if (err) {
              console.error('Error while downloading file:', err);
              return res.status(500).send('Error while downloading file');
            }
        
         
          const dest = fs.createWriteStream(`./public/trees/${namaFileGlb}`);
            response.data

       
              .on('end', () => {
                console.log('File sudah berhasil diunduh.');
                res.status(200).send('File berhasil diunduh');
              })
              .on('error', (err) => {
                console.error('Error while downloading file:', err);
                fs.unlinkSync(`./public/rumahe/${namaFileGlb}`); // Hapus file yang tidak lengkap jika terjadi error
                res.status(500).send('Error while downloading file');
              })
              .pipe(dest);
              //.pipe(res);

          }
        );
        
       
});

app.post('/downloadVehicle/:id', (req, res) => {

  const dataFromClient = req.body;
  const jsonObject = JSON.parse(dataFromClient.rawJsonText);


    if (jsonObject.token == null) return res.status(400).send('Token not found');
    

    oAuth2Client.setCredentials(jsonObject.token);

    const drive = google.drive({ version: 'v3', auth: oAuth2Client });
    const fileId = req.params.id;
    const namaFileGlb =  dataFromClient.data;
 


        drive.files.get(
          { fileId: fileId, alt: 'media' },
          { responseType: 'stream' },
          (err, response) => {
            if (err) {
              console.error('Error while downloading file:', err);
              return res.status(500).send('Error while downloading file');
            }
        
         
          const dest = fs.createWriteStream(`./public/vehicle/${namaFileGlb}`);
            response.data

       
              .on('end', () => {
                console.log('File sudah berhasil diunduh.');
                res.status(200).send('File berhasil diunduh');
              })
              .on('error', (err) => {
                console.error('Error while downloading file:', err);
                fs.unlinkSync(`./public/rumahe/${namaFileGlb}`); // Hapus file yang tidak lengkap jika terjadi error
                res.status(500).send('Error while downloading file');
              })
              .pipe(dest);
              //.pipe(res);

          }
        );
        
       
});


/*
app.post('/download/:id', (req, res) => {
  if (req.body.token == null) return res.status(400).send('Token not found');
  oAuth2Client.setCredentials(req.body.token);
  const drive = google.drive({ version: 'v3', auth: oAuth2Client });
 // const fileId = req.params.id;
 const fileId = req.params.name;
  const filePath = `hasil/${fileId}.js`; // Nama file sesuai dengan id file dari Google Drive

  const dest = fs.createWriteStream(filePath);
  drive.files.get({ fileId: fileId, alt: 'media' }, { responseType: 'stream' },
      function (err, response) {
          response.data
        // console.log(response)
         
              .on('end', () => {
                  console.log('Done');
              })
              .on('error', err => {
                  console.log('Error', err);
                  fs.unlinkSync(filePath); // Hapus file yang tidak lengkap jika terjadi error
              })
              .pipe(dest);
              
             
      });

  res.send('File sedang didownload...'); // Memberi respons ke client bahwa file sedang didownload
});
*/


/*
app.post('/download/:id', (req, res) => {
    if (req.body.token == null) return res.status(400).send('Token not found');
    oAuth2Client.setCredentials(req.body.token);
    const drive = google.drive({ version: 'v3', auth: oAuth2Client });
    const fileId = req.params.id;
  
    // Request the image from Google Drive with stream responseType
    drive.files.get(
      { fileId: fileId, alt: 'media' },
      { responseType: 'stream' },
      (err, response) => {
        if (err) {
          console.error('Error:', err);
          return res.status(500).send('Error streaming image from Google Drive');
        }
  
        // Ensure the content type of the response is set to 'image/jpeg' or appropriate
        res.set('Content-Type', 'image/jpeg');
  
        // Set the 'Content-Disposition' header to 'inline'
        res.set('Content-Disposition', 'inline');
  
        // Stream the image data to the client using 'res.write()'
        response.data
          .on('data', chunk => {
            res.write(chunk);
          })
          .on('end', () => {
            console.log('Done');
            res.end(); // End the response after streaming is complete
          })
          .on('error', err => {
            console.error('Error:', err);
            res.status(500).end('Error streaming image from Google Drive');
          });
      }
    );
  });
  */



/*
const { Readable } = require('stream');

app.post('/download/:id', (req, res) => {
  if (req.body.token == null) return res.status(400).send('Token not found');
  oAuth2Client.setCredentials(req.body.token);
  const drive = google.drive({ version: 'v3', auth: oAuth2Client });
  const fileId = req.params.id;

  // Request the image from Google Drive with stream responseType
  drive.files.get(
    { fileId: fileId, alt: 'media' },
    { responseType: 'stream' },
    (err, response) => {
      if (err) {
        console.error('Error:', err);
        return res.status(500).send('Error streaming image from Google Drive');
      }

      // Ensure the content type of the response is set to 'image/jpeg' or appropriate
      res.set('Content-Type', 'image/jpeg');

      // Pipe the response stream from Google Drive to the client response
      response.data
        .on('end', () => {
          console.log('Done');
        })
        .on('error', err => {
          console.error('Error:', err);
          return res.status(500).send('Error streaming image from Google Drive');
        })
        .pipe(res);
    }
  );
});
*/


/*
const { Readable } = require('stream');


app.post('/download/:id', (req, res) => {
  if (req.body.token == null) return res.status(400).send('Token not found');
  oAuth2Client.setCredentials(req.body.token);
  const drive = google.drive({ version: 'v3', auth: oAuth2Client });
  const fileId = req.params.id;

  // Request the image from Google Drive with stream responseType
  drive.files.get(
    { fileId: fileId, alt: 'media' },
    { responseType: 'stream' },
    (err, response) => {
      if (err) {
        console.error('Error:', err);
        return res.status(500).send('Error streaming image from Google Drive');
      }

      // Ensure the content type of the response is set to 'image/jpeg' or appropriate
      res.set('Content-Type', 'image/jpeg');

      // Set the file path where you want to save the image on the server
      const filePath = './hasil'; // Change this to the desired file path

      // Create a writable stream to save the image data to the server
      const fileWriteStream = fs.createWriteStream(filePath);

      // Pipe the response stream from Google Drive to the file write stream
      response.data
        .on('end', () => {
          console.log('Done');

          // Optionally, you can send a response to the client to indicate successful download
          res.send('Image downloaded successfully.');
        })
        .on('error', err => {
          console.error('Error:', err);
          return res.status(500).send('Error streaming image from Google Drive');
        })
        .pipe(fileWriteStream);

      // Alternatively, if you want to send the image to the client as well, you can pipe it to the response object
      response.data.pipe(res);
    }
  );
});
*/

/*

app.post('/download/:id', (req, res) => {
    if (req.body.token == null) return res.status(400).send('Token not found');
    oAuth2Client.setCredentials(req.body.token);
    const drive = google.drive({ version: 'v3', auth: oAuth2Client });
    const fileId = req.params.id;
  
    // Request the image from Google Drive with stream responseType
    drive.files.get(
      { fileId: fileId, alt: 'media' },
      { responseType: 'stream' },
      (err, response) => {
        if (err) {
          console.error('Error:', err);
          return res.status(500).send('Error streaming image from Google Drive');
        }
  
        // Ensure the content type of the response is set to 'image/jpeg' or appropriate
        res.set('Content-Type', 'image/jpeg');
  
        // Set the 'Content-Length' header with the size of the image
        res.set('Content-Length', response.headers['content-length']);
  
        // Stream the image data to the client using 'res.write()'
        response.data
          .on('data', chunk => {
            res.write(chunk);
          })
          .on('end', () => {
            console.log('Done');
            res.end(); // End the response after streaming is complete
          })
          .on('error', err => {
            console.error('Error:', err);
            res.status(500).end('Error streaming image from Google Drive');
          });
      }
    );
  });
*/

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started ${PORT}`));