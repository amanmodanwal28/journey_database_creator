// main_for_Religion
const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000; 

const staticpath = path.join(__dirname, "public/main_religion")
app.use(express.static(staticpath)); 
///////////////////fileupload/////////////////data.///////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Set storage for uploaded files                                            //
const storage = multer.diskStorage({                                         //
  destination: (req, file, cb) => {                                          //
    cb(null, 'C:\\Users\\PTCS\\Desktop\\FINID\\JOURNEY_CREATER\\uploads');                  //
  },                                                                         //
  filename: (req, file, cb) => {                                             //
    // cb(null, file.originalname);                                           //
     cb(null, "station_database.xlsx");                                      //
  },                                                                         //
});                                                                          //
// Filter the uploaded files to only accept Excel files                      //
const fileFilter = (req, file, cb) => {                                      //
  // if (                                                                    //
  //   file.mimetype === 'application/vnd.ms-excel' ||file.mimetype ===      //
  //     'application/vnd.openxmlformats-officedocument.spreadsheetml.shee   //
  // ) {                                                                     //
  //   cb(null, true);                                                       //
  // }                                                                       //
  if (file) {                                                                //
  cb(null, true);                                                            //
}                                                                            //
   else {                                                                    //
    cb(new Error('Only Excel files are allowed.'));                          //
  }                                                                          //
};                                                                           //
                                                                             //
///////////////////////////////////////////////////////////////////////////////
//                    transfer node data in html                             //
///////////////////////////////////////////////////////////////////////////////
// Initialize the file upload middleware                                     //
const upload = multer({ storage, fileFilter });                              //
// Render the HTML template for file upload                                  //
app.get('/', (req, res) => {                                                 //
  res.sendFile(path.join(__dirname, 'index.html'));                         //
})                                                                         //
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//               Handle file upload when the button is clicked               //
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
app.post('/upload', upload.single('file'), (req, res) => {                   //
  // Get the file path                                                       //
  filePath = req.file.path;                                                  //
  // res.send('File uploaded successfully.');                                //
    // app.post('/upload_button', (req, res) => {                            //
    // res.send('File uploaded successfully.');                              //
    // });                                                                   //
})                                                                           //
///////////////////////////////////////////////////////////////////////////////
// this /station_download is use to download xml file from server            //
///////////////////////////////////////////////////////////////////////////////
  app.post('/station_download', (req, res) => {                              //
    try {                                                                    //
      const workbook = xlsx.readFile(filePath);                              //
      const sheetName = workbook.SheetNames[0];                              //
      const worksheet = workbook.Sheets[sheetName];                          //
      const jsonData = xlsx.utils.sheet_to_json(worksheet);                  //
      const xmlData = createXMLString(jsonData);                             //
      if (!fs.existsSync(filePath)) {                                        //
        throw new Error('File not found');                                   //
      }                                                                      //
      const filename = 'station_database.xml';                               //
      res.set('Content-Disposition', `attachment; filename="${filename}"`);  //
      res.set('Content-Type', 'application/xml');                            //
      res.send(xmlData);                                                     //
  } catch (error) {                                                          //
    console.error(error);                                                     //
    res.status(500).send('Internal server error');                           //
    }                                                                        //
    });                                                                      //
///////////////////////////////////////////////////////////////////////////////
////this /data is use to seen xml file in server                             //
///////////////////////////////////////////////////////////////////////////////
  app.post('/data', (req, res) => {                                          //
    try {                                                                    // 
        const workbook = xlsx.readFile(filePath);                            //
        const sheetName = workbook.SheetNames[0];                            //
        const worksheet = workbook.Sheets[sheetName];                        //
        const jsonData = xlsx.utils.sheet_to_json(worksheet);                //
      const xmlData = createXMLString(jsonData);                             //
      if (!fs.existsSync(filePath)) {                                        //
        throw new Error('File not found');                                   //
      }                                                                      //
      res.set('Content-Type', 'text/xml');                                   //
      res.send(xmlData);                                                     //
    }                                                                        //
    catch (error) {                                                          //
      console.error(error);                                                  //
      res.status(500).send('Internal server error');                         //
    }                                                                        //
  });                                                                        //
///////////////////////////////////////////////////////////////////////////////
//     this xml data create station database file                            //
///////////////////////////////////////////////////////////////////////////////
function createXMLString(jsonData) {                                         //
//  countKeys = Object.values(jsonData[0]).length;                           //
// console.log(`Number of keys: ${countKeys}`);                              //
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\r\n';                    //
  xml += '<STATIONS>\r\n';                                                   //
  for (let data of jsonData) {                                               //
    xml += '<SC>';                                                           // 
    for (let key in data) {                                                  //
      if (key === 'S_NO.' || key === 'English' || key === 'Hindi'            // 
        || key === 'Latitude' || key === 'Longitude' || key === 'Altitude_M'
      || key === 'Bengali'|| key === 'Hindi_Devnagri' || key === 'Regional'  ) {  //
        continue;                                                            //
      }                                                                      //
      else if(key ==='Code'){                                                //
        xml += `${data[key].trim()}\r\n`;                                           //
      }                                                                      //
      else if(key ==='English_Hex_CODE'||key==='SN_E'){                                    //
        xml += `<SN_E>${data[key]}</SN_E>\r\n`;                              //
      }                                                                      //                    
      else if(key ==='Hindi_HEX_CODE'||key==='SN_H'){                                      //
        xml += `<SN_H>${data[key]}</.trim()SN_H>\r\n`;
        // xml += `<SN_R>${data[key]}</SN_R>\r\n`;//
        // xml += `<SN_R1>${data[key]}</SN_R1>\r\n`;
        // xml += `<SN_R2>${data[key]}</SN_R2>\r\n`;
        // xml += `<SN_H_UTF8>${data[key]}</SN_H_UTF8>\r\n`;
        // xml += `<SN_R_UTF8>${data[key]}</SN_R_UTF8>\r\n`;
        // xml += `<SN_R1_UTF8>${data[key]}</SN_R1_UTF8>\r\n`;
        // xml += `<SN_R2_UTF8>${data[key]}</SN_R2_UTF8>\r\n`;
      }                                                                      //
      else if (key === 'Regional_HEX_CODE' || key === 'SN_R') {                                //
          xml += `<SN_R>${data[key]}</SN_R>\r\n`;                              //
          xml += `<SN_R1>${data[key]}</SN_R1>\r\n`;
          xml += `<SN_R2>${data[key]}</SN_R2>\r\n`;
      }
      // else if (key ==='Regional1_HEX_CODE'||key==='SN_R1') {                                //
      //   xml += `<SN_R1>${data[key]}</SN_R1>\r\n`;                              //
      // }
      // else if (key ==='Regional2_HEX_CODE'||key==='SN_R2') {                                //
      //   xml += `<SN_R2>${data[key]}</SN_R2>\r\n`;                              //
      // }
      else if (key ==='Hindi_UTF8_CODE'||key==='SN_H_UTF8' || key === 'TRAIN_NAME_H_UTF8') {                                //
        xml += `<SN_H_UTF8>${data[key]}</SN_H_UTF8>\r\n`;                              //
        xml += `<SN_R_UTF8>${data[key]}</SN_R_UTF8>\r\n`;
        xml += `<SN_R1_UTF8>${data[key]}</SN_R1_UTF8>\r\n`;
        xml += `<SN_R2_UTF8>${data[key]}</SN_R2_UTF8>\r\n`;
      }
      // else if (key ==='Regional_UTF8_CODE'||key==='SN_R_UTF8'|| key === 'TRAIN_NAME_R_UTF8') {                                //
      //   xml += `<SN_R_UTF8>${data[key]}</SN_R_UTF8>\r\n`;                              //
      // }
      // else if (key ==='Regional1_UTF8_CODE'||key==='SN_R1_UTF8'|| key === 'TRAIN_NAME_R1_UTF8') {                                //
      //   xml += `<SN_R1_UTF8>${data[key]}</SN_R1_UTF8>\r\n`;                              //
      // }
      // else if (key ==='Regional2_UTF8_CODE'||key==='SN_R2_UTF8'|| key === 'TRAIN_NAME_R2_UTF8') {                                //
      //   xml += `<SN_R2_UTF8>${data[key]}</SN_R2_UTF8>\r\n`;                              //
      // }  //
      else if (key === 'X'){                                                 //
        // xml += `<X>${data[key]}</X>\r\n`;                                 //
        let bag = data[key]                                                  //    
          let arr = []                                                       //
          arr.push(bag)                                                      //
          const stringNumbers = arr.map(num => num.toString());              //
          for (let i = 0; i < stringNumbers.length; i++) {                   //
            if (stringNumbers[i].length === 4) {                             //
              value = `000${stringNumbers[i]}`                               //
              xml += `<X>${value}</X>\r\n`;                                  //
            }else if (stringNumbers[i].length === 5) {                       //
              value = `00${stringNumbers[i]}`                                //
              xml += `<X>${value}</X>\r\n`;                                  //
            } else if (stringNumbers[i].length === 6) {                      //
              // console.log(`0${stringNumbers[i]}`)                         //
              value = `0${stringNumbers[i]}`                                 //
              xml += `<X>${value}</X>\r\n`;                                  //
            } else {                                                         //
              xml += `<X>${data[key]}</X>\r\n`;                              //
            }                                                                //      
          }                                                                  //
      }                                                                      //
      else if (key === 'Y') {                                                //
        // xml += `<Y>${data[key]}</Y>\r\n`;                                 //
        let bag = data[key]                                                  //
          let arr = []                                                       //
        arr.push(bag)                                                        //
        // console.log(arr)                                                  //
          const stringNumbers = arr.map(num => num.toString());              //
          for (let i = 0; i < stringNumbers.length; i++) {                   //
            if (stringNumbers[i].length === 4) {                             //
              value = `000${stringNumbers[i]}`                               //
              xml += `<Y>${value}</Y>\r\n`;                                  //
            }else if (stringNumbers[i].length === 5) {                       //
              value = `00${stringNumbers[i]}`                                //
              xml += `<Y>${value}</Y>\r\n`;                                  //
            } else if (stringNumbers[i].length === 6) {                      //
              // console.log(`0${stringNumbers[i]}`)                         //
              value = `0${stringNumbers[i]}`                                 //
              xml += `<Y>${value}</Y>\r\n`;                                  //
            } else {                                                         //
              xml += `<Y>${data[key]}</Y>\r\n`;                              //
            }                                                                //
          }                                                                  //
      }                                                                      //
      else if(key ==='Z'){                                                   //
        // xml += `<Z>${data[key]}</Z>\r\n`;                                 //
        let bag = data[key]                                                  //
          let arr = []                                                       //
          arr.push(bag)                                                      //
          const stringNumbers = arr.map(num => num.toString());              //
          for (let i = 0; i < stringNumbers.length; i++) {                   //
            if (stringNumbers[i].length === 4) {                             //
              value = `000${stringNumbers[i]}`                               //
              xml += `<Z>${value}</Z>\r\n`;                                  //
            }else if (stringNumbers[i].length === 5) {                       //
              value = `00${stringNumbers[i]}`                                //
              xml += `<Z>${value}</Z>\r\n`;                                  //
            } else if (stringNumbers[i].length === 6) {                      //
              // console.log(`0${stringNumbers[i]}`)                         //
              value = `0${stringNumbers[i]}`                                 //
              xml += `<Z>${value}</Z>\r\n`;                                  //
            } else {                                                         //
              xml += `<Z>${data[key]}</Z>\r\n`;                              //
            }                                                                //
          }                                                                  //
      }                                                                      //
      else { }                                                               //
      // else {                                                              //
      //   xml += `    <${key}>${data[key]}</${key}>\r\n`;                   //
      //   console.log(key)                                                  //
      // }                                                                   //
    }                                                                        //
    xml += '</SC>\r\n';                                                      //
  }                                                                          //
  xml += '</STATIONS>';                                                      //
  return xml;                                                                //
}                                                                            //
                                                                             //
///////////////////////////////////////////////////////////////////////////////
////this /journey_check is use to seen xml file in server                    //
///////////////////////////////////////////////////////////////////////////////
app.post('/journey_check', (req, res) => {                                   //
  try {                                                                      //
    const workbook1 = xlsx.readFile(filePath);                               //
    const sheetName1 = workbook1.SheetNames[1];                              //
    const worksheet1 = workbook1.Sheets[sheetName1]                           //
    const jsonData1 = xlsx.utils.sheet_to_json(worksheet1);                  //
    const xmlData1 = createXMLString(jsonData1);                             //
    if (!fs.existsSync(filePath)) {                                          //
      throw new Error('File not found');                                     //
    }                                                                        //
    res.set('Content-Type', 'text/xml');                                     //
    res.send(xmlData1);                                                      //
  }                                                                          //
  catch (error) {                                                             //
    console.error(error);                                                    //
    res.status(500).send('Internal server error');                           //
  }                                                                          //
///////////////////////////////////////////////////////////////////////////////
// this /station_download is use to download xml file from server            //
///////////////////////////////////////////////////////////////////////////////                                                                             //
  app.post('/journey_download', (req, res) => {                              //
    try {                                                                    //
      const workbook1 = xlsx.readFile(filePath);                             //
      const sheetName1 = workbook1.SheetNames[1];                            //
      const worksheet1 = workbook1.Sheets[sheetName1];                       //
      const jsonData1 = xlsx.utils.sheet_to_json(worksheet1)                 //
      const xmlData1 = createXMLString(jsonData1);                           //
      if (!fs.existsSync(filePath)) {                                        //
        throw new Error('File not found');                                   //
      }                                                                      //
      const filename = 'journey_database.xml';                               //
      res.set('Content-Disposition', `attachment; filename="${filename}"`);  //
      res.set('Content-Type', 'application/xml');                            //
      res.send(xmlData1);                                                    //
  } catch (error) {                                                          //
    console.error(error);                                                    //
    res.status(500).send('Internal server error');                           //
    }                                                                        //
  })                                                                         //
///////////////////////////////////////////////////////////////////////////////
//     this xml data create journey database file                            //
///////////////////////////////////////////////////////////////////////////////  
  function createXMLString(jsonData1) {                                      //
    let xml = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\r\n';  //
    xml += '<JOURNEY>\r\n';                                                  //
    for (let data of jsonData1) {                                            //
////////////////////find number of station count///////////////////////////////
      countKeys = Object.keys(data).length - 7;                              //
      // console.log(`Number of keys: ${countKeys}`);                        //
      // console.log(jsonData)                                               //
///////////////////////////////////////////////////////////////////////////////      
      xml += '<JNUM>';                                                       //
      for (let key in data) {                                                //
        if (key === 'S_NO.') {                                               //
          continue;                                                          //
        } else if (key === 'JOURNEY_NO.') {                                  //
          // xml += `${data[key]}\n`;                                        //
          let bag = data[key]                                                //
          let arr = []                                                       //
          arr.push(bag)                                                      //
          const stringNumbers = arr.map(num => num.toString());              //
          for (let i = 0; i < stringNumbers.length; i++) {                   //
            if (stringNumbers[i].length === 3) {                             //
              value = `00${stringNumbers[i]}`                                //
              xml += `${value}\r\n`;                                         //
            } else if (stringNumbers[i].length === 4) {                      //
              // console.log(`0${stringNumbers[i]}`)                         //
              value = `0${stringNumbers[i]}`                                 //
              xml += `${value}\r\n`;                                         //
            } else {                                                         //
              xml += `${data[key]}\r\n`;                                     //
            }                                                                //
          }                                                                  //
        }                                                                    //
        else if (key === 'TRAIN_NAME_E'||key==='TNAME_E') {                  //
          xml += `<TNAME_E>${data[key].trim()}</TNAME_E>\r\n`;                      //
        }                                                                    //
        else if (key === 'TRAIN_NAME_H_HEX'||key==='TNAME_H') {              //
          xml += `<TNAME_H>${data[key]}</TNAME_H>\r\n`;
          // xml += `<TNAME_R>${data[key]}</TNAME_R>\r\n`;
          // xml += `<TNAME_R1>${data[key]}</TNAME_R1>\r\n`;
          // xml += `<TNAME_R2>${data[key]}</TNAME_R2>\r\n`;
          // xml += `<TNAME_H_UTF8>${data[key]}</TNAME_H_UTF8>\r\n`;
          // xml += `<TNAME_R_UTF8>${data[key]}</TNAME_R_UTF8>\r\n`;
          // xml += `<TNAME_R1_UTF8>${data[key]}</TNAME_R1_UTF8>\r\n`;
          // xml += `<TNAME_R2_UTF8>${data[key]}</TNAME_R2_UTF8>\r\n`;
          
        }                                                                    //
        else if (key === 'TRAIN_NAME_R_HEX'||key==='TNAME_R' ||key==="TRAIN_NAME_R") {                  //
          xml += `<TNAME_R>${data[key]}</TNAME_R>\r\n`;                      //
          xml += `<TNAME_R1>${data[key]}</TNAME_R1>\r\n`;
          xml += `<TNAME_R2>${data[key]}</TNAME_R2>\r\n`;
        }
        // else if (key === 'TRAIN_NAME_R1_HEX'||key==='TNAME_R1') {                  //
        //   xml += `<TNAME_R1>${data[key]}</TNAME_R1>\r\n`;                      //
        // }
        // else if (key === 'TRAIN_NAME_R2_HEX'||key==='TNAME_R2') {                  //
        //   xml += `<TNAME_R2>${data[key]}</TNAME_R2>\r\n`;                      //
        // }
        else if (key === 'TRAIN_NAME_H_UTF8'||key==='TNAME_H_UTF8'  || key ==='Hindi_UTF8_CODE') {                  //
          xml += `<TNAME_H_UTF8>${data[key]}</TNAME_H_UTF8>\r\n`;
          xml += `<TNAME_R_UTF8>${data[key]}</TNAME_R_UTF8>\r\n`;
          xml += `<TNAME_R1_UTF8>${data[key]}</TNAME_R1_UTF8>\r\n`;
          xml += `<TNAME_R2_UTF8>${data[key]}</TNAME_R2_UTF8>\r\n`;//
        }
        // else if (key === 'TRAIN_NAME_R_UTF8'||key==='TNAME_R_UTF8'|| key ==='Regional_UTF8_CODE') {                  //
        //   xml += `<TNAME_R_UTF8>${data[key]}</TNAME_R_UTF8>\r\n`;                      //
        // }
        // else if (key === 'TRAIN_NAME_R1_UTF8'||key==='TNAME_R1_UTF8'|| key ==='Regional1_UTF8_CODE') {                  //
        //   xml += `<TNAME_R1_UTF8>${data[key]}</TNAME_R1_UTF8>\r\n`;                      //
        // }
        // else if (key === 'TRAIN_NAME_R2_UTF8'||key==='TNAME_R2_UTF8'|| key ==='Regional2_UTF8_CODE') {                  //
        //   xml += `<TNAME_R2_UTF8>${data[key]}</TNAME_R2_UTF8>\r\n`;                      //
        // }  //
        // else if (key === 'STOPS') {                                          //
        //   // xml += `<STOPS>${countKeys}</STOPS>\r\n`;                       //
        //   let bag = countKeys                                                //
        //   let arr = []                                                       //
        //   arr.push(bag)                                                      //
        //   const stringNumbers = arr.map(num => num.toString());              //
        //   for (let i = 0; i < stringNumbers.length; i++) {                   //
        //     if (stringNumbers[i].length === 1) {                             //
        //       value = `0${stringNumbers[i]}`                                 //
        //       xml += `<STOPS>${value}</STOPS>\r\n`;                          //
        //       xml += `<R_VIA>05</R_VIA>\r\n`;
        //       xml += `<R_VIA_1>${data[key]}</R_VIA_1>\r\n`;
        //       xml += `<R_VIA_2>00</R_VIA_2>\r\n`;
        //       xml += `<R_VIA_3>00</R_VIA_3>\r\n`;
        //       xml += `<R_VIA_4>00</R_VIA_4>\r\n`;
        //       xml += `<R_VIA_5>00</R_VIA_5>\r\n`;
        //     } else {                                                         // 
        //       xml += `<STOPS>${countKeys}</STOPS>\r\n`;                      //
        //       xml += `<R_VIA>05</R_VIA>\r\n`;
        //       xml += `<R_VIA_1>${data[key]}</R_VIA_1>\r\n`;
        //       xml += `<R_VIA_2>00</R_VIA_2>\r\n`;
        //       xml += `<R_VIA_3>00</R_VIA_3>\r\n`;
        //       xml += `<R_VIA_4>00</R_VIA_4>\r\n`;
        //       xml += `<R_VIA_5>00</R_VIA_5>\r\n`;
        //     }                                                                //
        //   }                                                                  //
        // }
        else if (key === 'STOPS' || key === 'R_VIA' || key === 'R_VIA_1'
          || key === 'R_VIA_2' || key === 'R_VIA_3' || key === 'R_VIA_4' || key === 'R_VIA_5') {                                          //
          // xml += `<STOPS>${countKeys}</STOPS>\r\n`;                       //
          let bag = countKeys                                                //
          // console.log(countKeys)
          // console.log(data[key])
          let arr = []                                                       //
          arr.push(bag)                                                      //
          const stringNumbers = arr.map(num => num.toString());              //
          // console.log(stringNumbers)
          for (let i = 0; i < stringNumbers.length; i++) {                   //
            const dataKeyAsString = String(data[key]);
            if (stringNumbers[i].length === 1) {                             //
              value = `0${stringNumbers[i]}`                                 //
              xml += `<STOPS>${value}</STOPS>\r\n`;                          //
              xml += `<R_VIA>05</R_VIA>\r\n`;
              let rViaValue = dataKeyAsString.length === 1 ? `0${dataKeyAsString}` : dataKeyAsString;
              xml += `<R_VIA_1>${rViaValue}</R_VIA_1>\r\n`;
              xml += `<R_VIA_2>00</R_VIA_2>\r\n`;
              xml += `<R_VIA_3>00</R_VIA_3>\r\n`;
              xml += `<R_VIA_4>00</R_VIA_4>\r\n`;
              xml += `<R_VIA_5>00</R_VIA_5>\r\n`;
              // xml += `<R_VIA_1>${data[key]}</R_VIA_1>\r\n`;
              // xml += `<R_VIA_2>00</R_VIA_2>\r\n`;
              // xml += `<R_VIA_3>00</R_VIA_3>\r\n`;
              // xml += `<R_VIA_4>00</R_VIA_4>\r\n`;
              // xml += `<R_VIA_5>00</R_VIA_5>\r\n`;
            } else {                                                         // 
              xml += `<STOPS>${countKeys}</STOPS>\r\n`;                      //
              xml += `<R_VIA>05</R_VIA>\r\n`;
              let rViaValue = dataKeyAsString.length === 1 ? `0${dataKeyAsString}` : dataKeyAsString;
              xml += `<R_VIA_1>${rViaValue}</R_VIA_1>\r\n`;
              xml += `<R_VIA_2>00</R_VIA_2>\r\n`;
              xml += `<R_VIA_3>00</R_VIA_3>\r\n`;
              xml += `<R_VIA_4>00</R_VIA_4>\r\n`;
              xml += `<R_VIA_5>00</R_VIA_5>\r\n`;
              // xml += `<R_VIA_1>${data[key]}</R_VIA_1>\r\n`;
              // xml += `<R_VIA_2>00</R_VIA_2>\r\n`;
              // xml += `<R_VIA_3>00</R_VIA_3>\r\n`;
              // xml += `<R_VIA_4>00</R_VIA_4>\r\n`;
              // xml += `<R_VIA_5>00</R_VIA_5>\r\n`;
            }                                                                //
          }                                                                  //
        }                                                                     //
        else {
          // Remove special characters like #, $, and & from the value
                const cleanedValue = data[key].trim().replace(/[#@$&]/g, '');
                xml += `<STN>${cleanedValue},00.00</STN>\r\n`;//
          // xml += `<STN>${data[key].trim()},00.00</STN>\r\n`;                        //
          // xml += `    <${key}>${data[key]}</${key}>\r\n`;                 //
        }                                                                    //
      }                                                                      //
      xml += '</JNUM>\r\n';                                                  //
    }                                                                        //
    xml += '</JOURNEY>';                                                     //
    return xml;                                                              //
  }                                                                          //
})                                                                           //
///////////////////////////////////////////////////////////////////////////////
//                           Start the server                                //
///////////////////////////////////////////////////////////////////////////////      
app.listen(port, () => {                                                     //
  console.log(`Server is running on http://localhost:${port}`);              //
});                                                                          //
///////////////////////////////////////////////////////////////////////////////      
const app2 = express();
const port2 = 3001;
app2.use(express.static(path.join(__dirname, 'public/app2')));
app.use(express.static('public/')); // Serve static files in the 'public' directory
// app.use(express.urlencoded({ extended: false }));
const storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload1 = multer({ storage: storage1 });
app.post('/a', upload1.single('file'), (req, res) => {
  
    const filePath = req.file.path;
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(sheet);
  const newData = [];
  for (let data of jsonData) {
    for (let key in data) {
      if (key === 'English') {
        // console.log(data[key])
        const chars = [...data[key].toUpperCase().trim()].map(letter => 'x' + letter.charCodeAt(0).toString(16).toUpperCase()).join('');
        newData.push({ ...data, ENCRYPTED: chars }); // Add encrypted data to new field 'ENCRYPTED'
        // console.log(chars)
      }
    }
  }
    const newSheet = xlsx.utils.json_to_sheet(newData); // Convert the newData array to a new sheet
    xlsx.utils.book_append_sheet(workbook, newSheet, 'Encrypted Data',true); // Add the new sheet to the workbook
    xlsx.writeFile(workbook, 'C:\\Users\\PTCS\\Desktop\\test\\ENG.xlsx');
    console.log('New Excel file created successfully at:');
    res.send('New Excel file created successfull.');
});