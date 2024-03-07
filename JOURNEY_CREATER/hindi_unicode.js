
const xlsx = require('xlsx');
const express = require('express');
const multer = require('multer');
const app = express();
const port = 3007;
const path = require('path'); 

var obj3 = {                                                                                                      ///////
  अ: "x85",// "a",                                                                                               ///////
  ऄ: "x81",// "a",
  आ: "x86",// "aa",                                                                                          ///////
  ऑ:"x91",                                                                                                ///////
    इ: "x87",// "i",                                                                                            ///////
    ई: "x88",// "ee",                                                                                           ///////
    उ: "x89",// "u",                                                                                            ///////
    ऊ: "x8A",//"oo",                                                                                            ///////
    ऋ: "x8B",// "ri",                                                                                           ///////
  ए: "x8F",//"e",   ऍ                                                                                          ///////
  ऍ: "x8D",// "ain", 
  ऐ: "x90",// "ai",///////
  ऎ: "x8D",// "ai",///////
  ऌ: "x8C",// "LRI",///////ऒ
  ऒ: "x92",// "o",
  ओ: "x93",// "o",
  औ: "x94",// "au",
  क: "x95",// "ka",                                                                                           ///////
  ख: "x96",// "kha",
  क़	: "xD8",// "ka",                                                                                           ///////
    ख़: "xD9"  ,// "kha",///////
    ग: "x97",// "ga",                                                                                           ///////
    ग़: "xDA"  ,// "ga",                                                                                      ///////
    घ: "x98"  ,// "gha",                                                                                        ///////
  ङ: "xB3",// "nga",
    ड़: "xDC"  ,// "nga",                                                                                     ///////
    च: "x9A"  ,// "cha",                                                                                        ///////
    छ: "x9B"  ,// "chha",                                                                                       ///////
    ज: "x9C",// "ja",                                                                                           ///////
    'ज़': "xDB",// "ja",                                                                                         ///////
    झ: "x9D"  ,// "jha",                                                                                        ///////
  ञ: "x9E",// "nya",
     ट: "x9F"  ,// "ta",                                                                                         ///////
  ठ: "xA0",// "tha",
  ड़: "xDC"  ,// "da",///////
  ड: "xA1",// "da",
    ढ: "xA2",// "dha",                                                                                          ///////
    ढ़: "xDD"  ,// "dha",                                                                                     ///////
    ण: "xA3"  ,// "na",                                                                                      ///////
    त: "xA4"  ,// "ta",                                                                                         ///////
    थ: "xA5"  ,// "tha",                                                                                     ///////
    द: "xA6"  ,// "da",                                                                                         ///////
    ध: "xA7"  ,// "dha",                                                                                     ///////
  न: "xA8",// "na",
  ऩ: "xA9",// "na",
    प: "xAA"  ,// "pa",                                                                                         ///////
  फ: "xAB",// "pha",
  फ़: "xDE",// "pha",///////
    फ्र: "xABxCDxB0"  ,// "pha",                                                                                       ///////
    ब: "xAC"  ,// "ba",                                                                                        ///////
    भ: "xAD"  ,// "bha",                                                                                    ///////
  म: "xAE",// "ma",
  य: "xAF",// "ya",
  य़: "xDF",// "ya",///////
    र: "xB0"  ,// "ra",                                                                                        ///////
    ऱ: "xB1"  ,// "ra",                                                                                        ///////                                                                                ///////
    ल: "xB2"  ,// "la",                                                                                        ///////
  व: "xB5",// "va",
    श: "xB6"  ,// "sha",                                                                                    ///////
    ष: "B7"  ,// "sha",                                                                                    ///////
  स: "xB8",// "sa",
    ह: "xB9"  ,// "ha",                                                                                        ///////
    क्ष: "x95xCDxB7"  ,// "ksha",                                                                                   ///////
  त्र: "xA4xCDxB1",// "tra",
  ज्ञ: "x9CxCDx9E",// "jnya",
    स्: "xB8xCD",// "",                                                                                       ///////
  ल्: "xB2xCD",// "",
    'ा': "xBE",// "x6B",                                                                                        ///////
    'ॉ': "xC9",                                                                                              ///////
    'ि': "xBF",// "x66",                                                                                        ///////
    'िं': "xBF",                                                                                                 ///////
  'ी': "xC0",
  'ी': "xC0",                                                                                                 ///////
    'ु': "xC1",                                                                                                  ///////
    'ू': "xC2",                                                                                                  ///////
    'ृ': "xC3",// "x60",                                                                                         ///////
  '्': "xCD",// "x7E",  
    'ॆ': "xC6"  ,// "x73",                                                                                       ///////
    'े': "xC7",// "xA2",                                                                                      ///////
    'ै': "xC8",// "x53",                                                                                         ///////
    'ो': "xCB",// "xA8",                                                                                         ///////
  'ौ': "xCC",// "xA9",///////
  'ळ': "xB3",
  'ऴ	': "xB4",
  'ऽ': "xBD",
  ' ': "x20",                                                                                                  ///////
  'ं': "x82",
  '्': "xCD",                                                                                                   ///////
    '़': "xBC",                                                                                                   ///////
  'ॅ': "xC5",                                                                                                   ///////
  'ऀ': "x80",
  'ँ': "x81",///////                                                                                                                                                                                      ///////
    '{': "xBF",                                                                                                  ///////
    '}': "xF8",                                                                                                  ///////
  '=': "xBE",
      '8': "x39",                                                                                                  ///////
    "०": "xE6",// "0",                                                                                           ///////
    "१": "xE7"  ,// "1",                                                                                         ///////
    "२": "xE8"  ,// "2",                                                                                       ///////
    "३": "xE9"  ,// "3",                                                                                       ///////
    "४": "xEA"  ,// "4",                                                                                       ///////
    "५": "EB"  ,// "5",                                                                                            ///////
    "६": "xEC"  ,// "6",                                                                                        ///////
    "७": "xED"  ,// "7",                                                                                       ///////
    "८": "xEE"  ,// "8",                                                                                        ///////
  "९": "xEF",// "9",                                                                                         ///////
  'ः': "x83",
  'ऻ': "xC9",
  'ॊ': "xCA",
  'ॎ': "xCE",
  'ॠ': "xE0",
  'ॐ': "xD0",
  'ॕ': "xD5",
  'ॖ': "xD6",
  'ॗ': "xD7",
  'ॖ': "xD6",
  'ॡ': "xE1",
  'ॢ': "xE2",
  'ॣ': "xE3",
  '।': "xE4",
  '॰': "xF0",
  '॥': "xE5",
  'ॱ': "xF1",
  'ॲ': "xF2",
  'ॳ': "xF3",
  'ॴ': "xF4",
  'ॵ': "xF5",
  'ॶ': "xF6",
  'ॷ': "xF7",
  'ॸ': "xF8",
  'ॹ': "xF9",
  'ॺ': "xFA",
  'ॻ': "xFB",
  'ॼ': "xFC",
  'ॽ': "xFD",
  'ॾ': "xFE",
  'ॿ': "xFF",
  '.': "x83"
///////////////////  new data 
                                                                                                   ///////                                                                                                 ///////                                                                                    ///////
}; 
app.use(express.static('public/hindi_unicode')); // Serve static files in the 'public' directory
// app.use(express.urlencoded({ extended: false }));
// Hindi Vowels (Swar)
const storage = multer.diskStorage({
    destination:  (req, file, cb) =>{
        cb(null, 'uploads/hex');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

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
};


const upload = multer({ storage, fileFilter }); 
app.post('/upload', upload.single('file'), (req, res) => {                   //
  // Get the file path                                                       //
  filePath = req.file.path;                                                  //
  // res.send('File uploaded successfully.');                                //
    // app.post('/upload_button', (req, res) => {                            //
    // res.send('File uploaded successfully.');                              //
    // });                                                                   //
}) 



app.post('/hindi_unicode', upload.single('file'), (req, res) => {
  try {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook['SheetNames'][0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(sheet)
    const newData = []

    let count = 0
    for (let i = 0; i <= jsonData.length - 1; i++) {
      let bag4 = "";
      let aman3 = ""
      let aman4 = ""
      for (let key in jsonData[i]) {
        // console.log(jsonData[i][key])
        if (key === 'Hindi') {
          const output3 = []
          const output4 = []
          const hex = [...jsonData[i][key].split('')]
          // console.log(hex)
          // output4.push(jsonData[i][key])
          // let keys = "कलर बख गक्रज"
          // const hex = [...keys.split('')]
          for (let i = 0; i < hex.length; i++) {
            if (hex[i] === ' ' && hex[i + 1] === 'ज' && hex[i + 2] === 'ं' && hex[i + 3] === 'क' && hex[i + 4] === '्' && hex[i + 5] === 'श' && hex[i + 6] === 'न' && hex[i + 7] === ' ') {
              output3.push(' जंः') // जं़
                output4.push(' जंः') //////exception for hindi output3.
              i += 7
            }
            else if (hex[0] === " ") {
              output3.push(hex2[i + 1])
              output4.push(hex2[i + 1])
              
            }
              else if (hex[i] === "-") {
              output3.push("")
              output4.push("")
              
            }
            else if (hex[i] === ' ' && hex[i + 1] === 'ज' && hex[i + 2] === 'ं' && hex[i + 3] === 'क'
              && hex[i + 4] === '्' && hex[i + 5] === 'श' && hex[i + 6] === 'न') {
              output3.push(' जंः') // जं़
                output4.push(' जंः') //////exception for hindi output3.
              i += 7
            } else if (hex[i] === ' ' && hex[i + 1] === 'ज' && hex[i + 2] === 'ं' && hex[i + 3] === ' ') {
              output3.push(' जंः') // जं़
                output4.push(' जंः')//////exception for hindi output3.
              i += 3       //one extra line delete for if bymistake we add . then we remove one extra
            } else if (hex[i] === ' ' && hex[i + 1] === 'ज' && hex[i + 2] === 'ं') {
              output3.push(' जंः') // जं़
                output4.push(' जंः')//////exception for hindi output3.
              i += 3       //one extra line delete for if bymistake we add . then we remove one extra
            }
            // else if (hex[i] === 'र' && hex[i + 1] === '्') {
            //   output3.push(hex[i + 2] + hex[i] + hex[i + 1])
            //   output4.push(hex[i + 2] + hex[i] + hex[i + 1])
            //   i += 2;
            // }
            else {
              output3.push(hex[i])
              output4.push(hex[i])
            }
          }
          aman4 = output4.join('')
          aman3 = output3.join('')
          // console.log(keys)
          // console.log(hex)
          // console.log(output3)
          // console.log(aman3)
          const final = [...aman3.split('')]
          console.log(final)
          function getvalues5(final) {
            for (let j = 0; j < final.length; j++) {
              if (final[j] === 'स' && final[j + 1] === '्' && final[j + 2] === 'त' && final[j + 3] === '्' && final[j + 4] === 'र') {
                bag4 += "xF3"   // स्त्र
                j += 4
              } else if (final[0] === ' ') {
                bag4 += obj3[final[0]]
                continue;
              }
              else {
                bag4 += obj3[final[j]] //+ " "
                        
              }
            }
            return bag4
          }
          getvalues5(final)
        }
      }
      newData.push({ 'S_no.': `${i + 1}`, 'Hindi_UNICODE': `${bag4}`, 'Hindi_Devnagri': `${aman4}` });
      count++;
      if (count === 1) {
        newData.push({ 'S_no.': `${i + 1}`, 'Hindi_UNICODE': `${bag4}`, 'Hindi_Devnagri': `${aman4}` });
      }
    }
  
    // const newSheet = xlsx.utils.json_to_sheet(newData);
    // xlsx.utils.book_append_sheet(workbook, newSheet, 'hindi_unicode', true);
    // const outputFilePath3 = path.join(__dirname, filePath.replace('uploads/', ''));
    // // xlsx.writeFile(workbook, 'C:\\Users\\PTCS\\Desktop\\test\\output3.xlsx');
    // // xlsx.writeFile(workbook, 'C:\\Users\\PTCS\\Downloads\\hindi.xlsx');
    // // res.send(getValues3(final));
    // // res.send(newData);
    // xlsx.writeFile(workbook, outputFilePath3);
    // res.download(outputFilePath3, 'Hindi_Unicode.xlsx', () => {                                                 ///////
    // });
    const newSheet = xlsx.utils.json_to_sheet(newData);                                                             ///////
  xlsx.utils.book_append_sheet(workbook, newSheet, 'Hindi_Unicode', true);                                        ///////
  const outputFilePath2 = path.join(__dirname, filePath.replace('uploads/', ''));                                 ///////
  xlsx.writeFile(workbook, outputFilePath2);                                                                      ///////
  res.download(outputFilePath2, 'Hindi_Unicode.xlsx', () => {                                                 ///////
  });
    // res.send('New Excel file successfully created in download folder .');
  }
  catch (error) {                                                                                                 ///////
    console.error(error);                                                                                         ///////
    res.status(500).send('Internal server error');                                                                ///////
  }
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Server running at http://localhost:${port}`);
});











































///////////////////////////////////////////////////////////////////
// const xlsx = require('xlsx');
// const express = require('express');
// const multer = require('multer');
// const app = express();
// const port = 3007;
// app.use(express.static('public/app_hindi')); // Serve static files in the 'public' directory
// // app.use(express.urlencoded({ extended: false }));
// // Hindi Vowels (Swar)
// const storage = multer.diskStorage({
//     destination:  (req, file, cb) =>{
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// });
// const upload = multer({ storage: storage });

// var obj3 = {                                                                                                      ///////
//   अ: "x85",// "a",                                                                                               ///////
//   ऄ: "x81",// "a",
//   आ: "x86",// "aa",                                                                                          ///////
//   ऑ:"x91",                                                                                                ///////
//     इ: "x87",// "i",                                                                                            ///////
//     ई: "x88",// "ee",                                                                                           ///////
//     उ: "x89",// "u",                                                                                            ///////
//     ऊ: "x8A",//"oo",                                                                                            ///////
//     ऋ: "x8B",// "ri",                                                                                           ///////
//   ए: "x8F",//"e",   ऍ                                                                                          ///////
//   ऍ: "x8D",// "ain", 
//   ऐ: "x90",// "ai",///////
//   ऎ: "x8D",// "ai",///////
//   ऌ: "x8C",// "LRI",///////ऒ
//   ऒ: "x92",// "o",
//   ओ: "x93",// "o",
//   औ: "x94",// "au",
//   क: "x95",// "ka",                                                                                           ///////
//   ख: "x96",// "kha",
//   क़	: "xD8",// "ka",                                                                                           ///////
//     ख़: "xD9"  ,// "kha",///////
//     ग: "x97",// "ga",                                                                                           ///////
//     ग़: "xDA"  ,// "ga",                                                                                      ///////
//     घ: "x98"  ,// "gha",                                                                                        ///////
//   ङ: "xB3",// "nga",
//     ड़: "xDC"  ,// "nga",                                                                                     ///////
//     च: "x9A"  ,// "cha",                                                                                        ///////
//     छ: "x9B"  ,// "chha",                                                                                       ///////
//     ज: "x9C",// "ja",                                                                                           ///////
//     'ज़': "xDB",// "ja",                                                                                         ///////
//     झ: "x9D"  ,// "jha",                                                                                        ///////
//   ञ: "x9E",// "nya",
//      ट: "x9F"  ,// "ta",                                                                                         ///////
//   ठ: "xA0",// "tha",
//   ड़: "xDC"  ,// "da",///////
//   ड: "xA1",// "da",
//     ढ: "xA2",// "dha",                                                                                          ///////
//     ढ़: "xDD"  ,// "dha",                                                                                     ///////
//     ण: "xA3"  ,// "na",                                                                                      ///////
//     त: "xA4"  ,// "ta",                                                                                         ///////
//     थ: "xA5"  ,// "tha",                                                                                     ///////
//     द: "xA6"  ,// "da",                                                                                         ///////
//     ध: "xA7"  ,// "dha",                                                                                     ///////
//   न: "xA8",// "na",
//   ऩ: "xA9",// "na",
//     प: "xAA"  ,// "pa",                                                                                         ///////
//   फ: "xAB",// "pha",
//   फ़: "xDE",// "pha",///////
//     फ्र: "xABxCDxB0"  ,// "pha",                                                                                       ///////
//     ब: "xAC"  ,// "ba",                                                                                        ///////
//     भ: "xAD"  ,// "bha",                                                                                    ///////
//   म: "xAE",// "ma",
//   य: "xAF",// "ya",
//   य़: "xDF",// "ya",///////
//     र: "xB0"  ,// "ra",                                                                                        ///////
//     ऱ: "xB1"  ,// "ra",                                                                                        ///////                                                                                ///////
//     ल: "xB2"  ,// "la",                                                                                        ///////
//   व: "xB5",// "va",
//     श: "xB6"  ,// "sha",                                                                                    ///////
//     ष: "B7"  ,// "sha",                                                                                    ///////
//   स: "xB8",// "sa",
//     ह: "xB9"  ,// "ha",                                                                                        ///////
//     क्ष: "x95xCDxB7"  ,// "ksha",                                                                                   ///////
//   त्र: "xA4xCDxB1",// "tra",
//   ज्ञ: "x9CxCDx9E",// "jnya",
//     स्: "xB8xCD",// "",                                                                                       ///////
//   ल्: "xB2xCD",// "",
//     'ा': "xBE",// "x6B",                                                                                        ///////
//     'ॉ': "xC9",                                                                                              ///////
//     'ि': "xBF",// "x66",                                                                                        ///////
//     'िं': "xBF",                                                                                                 ///////
//   'ी': "xC0",
//   'ी': "xC0",                                                                                                 ///////
//     'ु': "xC1",                                                                                                  ///////
//     'ू': "xC2",                                                                                                  ///////
//     'ृ': "xC3",// "x60",                                                                                         ///////
//   '्': "xCD",// "x7E",  
//     'ॆ': "xC6"  ,// "x73",                                                                                       ///////
//     'े': "xC7",// "xA2",                                                                                      ///////
//     'ै': "xC8",// "x53",                                                                                         ///////
//     'ो': "xCB",// "xA8",                                                                                         ///////
//   'ौ': "xCC",// "xA9",///////
//   'ळ': "xB3",
//   'ऴ	': "xB4",
//   'ऽ': "xBD",
//   ' ': "x20",                                                                                                  ///////
//   'ं': "x82",
//   '्': "xCD",                                                                                                   ///////
//     '़': "xBC",                                                                                                   ///////
//   'ॅ': "xC5",                                                                                                   ///////
//   'ऀ': "x80",
//   'ँ': "x81",///////                                                                                                                                                                                      ///////
//     '{': "xBF",                                                                                                  ///////
//     '}': "xF8",                                                                                                  ///////
//   '=': "xBE",
//       '8': "x39",                                                                                                  ///////
//     "०": "xE6",// "0",                                                                                           ///////
//     "१": "xE7"  ,// "1",                                                                                         ///////
//     "२": "xE8"  ,// "2",                                                                                       ///////
//     "३": "xE9"  ,// "3",                                                                                       ///////
//     "४": "xEA"  ,// "4",                                                                                       ///////
//     "५": "EB"  ,// "5",                                                                                            ///////
//     "६": "xEC"  ,// "6",                                                                                        ///////
//     "७": "xED"  ,// "7",                                                                                       ///////
//     "८": "xEE"  ,// "8",                                                                                        ///////
//   "९": "xEF",// "9",                                                                                         ///////
//   'ः': "x83",
//   'ऻ': "xC9",
//   'ॊ': "xCA",
//   'ॎ': "xCE",
//   'ॠ': "xE0",
//   'ॐ': "xD0",
//   'ॕ': "xD5",
//   'ॖ': "xD6",
//   'ॗ': "xD7",
//   'ॖ': "xD6",
//   'ॡ': "xE1",
//   'ॢ': "xE2",
//   'ॣ': "xE3",
//   '।': "xE4",
//   '॰': "xF0",
//   '॥': "xE5",
//   'ॱ': "xF1",
//   'ॲ': "xF2",
//   'ॳ': "xF3",
//   'ॴ': "xF4",
//   'ॵ': "xF5",
//   'ॶ': "xF6",
//   'ॷ': "xF7",
//   'ॸ': "xF8",
//   'ॹ': "xF9",
//   'ॺ': "xFA",
//   'ॻ': "xFB",
//   'ॼ': "xFC",
//   'ॽ': "xFD",
//   'ॾ': "xFE",
//   'ॿ': "xFF",
// ///////////////////
//     '!': "x21",                                                                                                  ///////
//     '+': "x24",                                                                                                  ///////
//     '÷': "xBB",                                                                                                  ///////                                                                                                ///////
//     '-': "x26",                                                                                                  ///////
//     ';': "x28",                                                                                                  ///////
//     '(': "xBC",                                                                                                  ///////
//     '⦁': "xDB",                                                                                                  //////////////
//     '.': "x2D",                                                                                                  ///////
//     '(': "xBC",                                                                                                  ///////
//     '?': "x5B",                                                                                                  ///////
//     '0': "x30",                                                                                                  ///////
//     '1': "x31",                                                                                                  ///////
//     '2': "x32",                                                                                                  ///////
//     '3': "x33",                                                                                                  ///////
//     '4': "x34",                                                                                                  ///////
//     '5': "x35",                                                                                                  ///////
//     '6': "x36",                                                                                                  ///////
//     '7': "x37",                                                                                                  ///////
//     '8': "x38",                                                                                                  ///////
//     '9': "x39",                                                                                                  ///////
//     '/': "x40",                                                                                                  ///////                                                                                                 ///////                                                                                    ///////
// }; 

// app.post('/hindi', upload.single('file'), (req, res) => {
//     const filePath = req.file.path;
//     const workbook = xlsx.readFile(filePath);
// //const workbook = xlsx.readFile('C:\\Users\\PTCS\\Desktop\\test\\hindi.xlsx');
// const sheetName = workbook['SheetNames'][0];
// const sheet = workbook.Sheets[sheetName];
// const  jsonData= xlsx.utils.sheet_to_json(sheet)
// const newData = []

// let count=0
// for (let i = 0; i <= jsonData.length - 1; i++){
//     let bag4 = "";
//     let aman3 = ""
//     let aman4 = ""
//     for (let key in jsonData[i]) {
//         // console.log(jsonData[i][key])
//         if (key === 'Hindi') {
//             const output3 = []
//             const output4 = []
//             const hex = [...jsonData[i][key].split('')]
//             output4.push(jsonData[i][key])
//             // let keys = "कलर बख गक्रज"
//             // const hex = [...keys.split('')]
//             for (let i = 0; i < hex.length; i++) {
//             if (hex[i] === ' ' && hex[i + 1] === 'ज' && hex[i + 2] === 'ं' && hex[i + 3] === 'क'&& hex[i + 4] ===  '्'  && hex[i + 5] === 'श' && hex[i + 6] === 'न' && hex[i + 7] === ' ') {
//               output3.push(' जं.') // जं़
//             //   output4.push(' जं.') //////exception for hindi output3.
//             i += 7
//             }else if (hex[i] === ' ' && hex[i + 1] === 'ज' && hex[i + 2] === 'ं' && hex[i + 3] === 'क'
//             && hex[i + 4] ===  '्'  && hex[i + 5] === 'श' && hex[i + 6] === 'न' ) {
//               output3.push(' जं.') // जं़
//             //   output4.push(' जं.') //////exception for hindi output3.
//             i += 7
//             }else if (hex[i] === ' ' && hex[i + 1] === 'ज' && hex[i + 2] === 'ं' && hex[i + 3] === ' ') {
//               output3.push(' जं.') // जं़
//             //   output4.push(' जं.')//////exception for hindi output3.
//               i += 3       //one extra line delete for if bymistake we add . then we remove one extra
//             }else if (hex[i] === ' ' && hex[i + 1] === 'ज' && hex[i + 2] === 'ं' ) {
//               output3.push(' जं.') // जं़
//             //   output4.push(' जं.')//////exception for hindi output3.
//               i += 3       //one extra line delete for if bymistake we add . then we remove one extra
//             }
//             else if (hex[i] === 'र' && hex[i + 1] === '्') {
//                     output3.push(hex[i + 2] + hex[i] + hex[i + 1])
//                     i += 2;
//             } else {
//                     output3.push(hex[i])
//             }
//             }
//             aman4 = output4
//             aman3 = output3.join('')
//             // console.log(keys)
//             // console.log(hex)
//             // console.log(output3)
//             // console.log(aman3)
//             const final = [...aman3.split('')]
//             // console.log(final)
//             function getvalues5(final) {
//                 for (let j = 0; j < final.length; j++) {
//                     if (final[j] === 'स' && final[j + 1] === '्' && final[j + 2] === 'त' && final[j + 3] === '्' && final[j + 4] === 'र') {
//                         bag4 += "xF3" + " "   // स्त्र
//                         j += 4
//                     }
//                     // else if (final[j] === 'क' && final[j + 1] === '्' && final[j + 2] === 'ष' && final[j + 3] === '्') {
//                     //     bag4 += "x7B" //+ " "   // क्ष्
//                     //     j += 3
//                     // }
//                     // else if (final[j] === 'न' && final[j + 1] === '्' && final[j + 2] === 'न' && final[j + 3] === '्') {
//                     //     bag4 += "xE9x7E"// + " "   // न्न्
//                     //     j += 3
//                     // }
//                     // else if (final[j] === 'त' && final[j + 1] === '्' && final[j + 2] === 'त' && final[j + 3] === '्') {
//                     //     bag4 += "xD9" //+ " "   // त्त्
//                     //     j += 3
//                     // }
//                     // else if (final[j] === 'द' && final[j + 1] === 'र' && final[j + 2] === '्' && final[j + 3] === '्' && final[j + 4] === 'ध') {
//                     //     bag4 += "x29" //+ " "  //द्ध
//                     //     j += 4
//                     // }
//                     // else if (final[j] === '्' && final[j + 1] === 'र') {
//                     //     bag4 += "x7A" //+ " "    // ex म्र
//                     //     j++
//                     // }
//                     // else if (final[j] === 'क' && final[j + 1] === 'ृ') {
//                     //     bag4 += "xD1" //+ " "    // ex म्र
//                     //     j++
//                     // }
//                     // else if (final[j] === 'क' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "xD8" //+ " "   // क्र
//                     //     j += 2
//                     // }
//                     // else if (final[j] === 'क' && final[j + 1] === '्' && final[j + 2] === 'क') {
//                     //     bag4 += "xF4" //+ " "   // क्क 
//                     //     j += 2
//                     // }
//                     // else if (final[j] === 'क' && final[j + 1] === '्' && final[j + 2] === 'ष') {
//                     //     bag4 += "x7Bx6B" //+ " "   // क्ष
//                     //     j += 2
//                     // }
//                     // // else if (final[j] === 'क' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     // //     bag4 += "x64x7A" + " "
//                     // //     j+=2
//                     // // }
//                     // else if (final[j] === 'क' && final[j + 1] === '्') {
//                     //     bag4 += "x44" //+ " "    //  क्
//                     //     j++
//                     // } else if (final[j] === 'क' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66x44" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'ख' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66x5B" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'ख' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "x5Bx6Bx7A" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'ख' && final[j + 1] === '्') {
//                     //     bag4 += "x5B" //+ " "   //  ख्
//                     //     j++
//                     // } else if (final[j] === 'ख' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "xA3" //+ " "   // ख्र
//                     //     j += 2
//                     // } else if (final[j] === 'ग' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66x58" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'ग' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "x78x7A" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'ग' && final[j + 1] === '्') {
//                     //     bag4 += "x58" //+ " "    //  ग्
//                     //     j++
//                     // } else if (final[j] === 'घ' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66x3F" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'घ' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "x3Fx7A" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'घ' && final[j + 1] === '्') {
//                     //     bag4 += "x3F" //+ " "   // घ्
//                     //     j++
//                     // } else if (final[j] === 'च' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66x50" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'च' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "x50x7A" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'च' && final[j + 1] === '्') {
//                     //     bag4 += "x50" //+ " "    // च्
//                     //     j++
//                     // } else if (final[j] === 'ज' && final[j + 1] === '्' && final[j + 2] === 'ञ') {
//                     //     bag4 += "x4B" //+ " "   // ज्ञ
//                     //     j += 2
//                     // } else if (final[j] === 'ज' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66x54" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'ज' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "x54x7A" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'ज' && final[j + 1] === '्') {
//                     //     bag4 += "x54" //+ " "    // ज्
//                     //     j++
//                     // } else if (final[j] === 'झ' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66xD6" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'झ' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "x3Ex7A" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'झ' && final[j + 1] === '्') {
//                     //     bag4 += "xD6" //+ " "   // झ्
//                     //     j++
//                     // } else if (final[j] === 'ट' && final[j + 1] === '्' && final[j + 2] === 'ट') {
//                     //     bag4 += "xCD" //+ " "   // ट्ट
//                     //     j += 2
//                     // } else if (final[j] === 'ट' && final[j + 1] === '्' && final[j + 2] === 'ठ') {
//                     //     bag4 += "xCE" //+ " "   // ट्ठ
//                     //     j += 2
//                     // } else if (final[j] === 'ड' && final[j + 1] === '्' && final[j + 2] === 'ड') {
//                     //     bag4 += "xCF" //+ " "   // ट्ठ
//                     //     j += 2
//                     // } else if (final[j] === 'ड' && final[j + 1] === '्' && final[j + 2] === 'ढ') {
//                     //     bag4 += "xEF" //+ " "   // ड्ढ
//                     //     j += 2
//                     // } else if (final[j] === 'ण' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66x2E" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'ण' && final[j + 1] === '्') {
//                     //     bag4 += "x2E" //+ " "    //  ण्
//                     //     j++
//                     // } else if (final[j] === 'त' && final[j + 1] === '्' && final[j + 2] === 'त') {
//                     //     bag4 += "xD9x6B" //+ " "   // त्त
//                     //     j += 2
//                     // } else if (final[j] === 'त' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66x52" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'त' && final[j + 1] === '्') {
//                     //     bag4 += "x52" //+ " "   // त्
//                     //     j++
//                     // } else if (final[j] === 'त' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "x3D" //+ " "   // त्र
//                     //     j += 2
//                     // } else if (final[j] === 'थ' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66x46" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'थ' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "x46x6Bx7A" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'थ' && final[j + 1] === '्') {
//                     //     bag4 += "x46" //+ " "   //  थ्
//                     //     j++
//                     // } else if (final[j] === 'द' && final[j + 1] === '्' && final[j + 2] === 'द') {
//                     //     bag4 += "xCC" //+ " "   // द्द
//                     //     j += 2
//                     // } else if (final[j] === 'द' && final[j + 1] === '्' && final[j + 2] === 'य') {
//                     //     bag4 += "x7C" //+ " "   // द्य
//                     //     j += 2
//                     // } else if (final[j] === 'द' && final[j + 1] === '्' && final[j + 2] === 'व') {
//                     //     bag4 += "x7D" //+ " "   // द्व
//                     //     j += 2
//                     // } else if (final[j] === 'द' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "xE6" //+ " "   // द्र
//                     //     j += 2
//                     // } else if (final[j] === 'द' && final[j + 1] === '्' && final[j + 2] === 'भ') {
//                     //     bag4 += "xF6" //+ " "   // द्भ
//                     //     j += 2
//                     // } else if (final[j] === 'द' && final[j + 1] === '्' && final[j + 2] === 'म') {
//                     //     bag4 += "xF9" //+ " "   // द्म
//                     //     j += 2
//                     // } else if (final[j] === 'द' && final[j + 1] === '्' && final[j + 2] === 'ध') {
//                     //     bag4 += "x29" //+ " "   // द्ध
//                     //     j += 2
//                     // } else if (final[j] === 'ध' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66x2F" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'ध' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "x2Fx7A" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'ध' && final[j + 1] === '्') {
//                     //     bag4 += "x2F" //+ " "   //  ध ्
//                     //     j++
//                     // } else if (final[j] === 'न' && final[j + 1] === '्' && final[j + 2] === 'न') {
//                     //     bag4 += "xE9" //+ " "   // न्न
//                     //     j += 2
//                     // } else if (final[j] === 'न' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66x55" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'न' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "x75x7A" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'न' && final[j + 1] === '्') {
//                     //     bag4 += "x55" //+ " "    //  न्
//                     //     j++
//                     // } else if (final[j] === 'प' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66x49" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'प' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     // bag4 += "x69x7A" + " "
//                     //     bag4 += "xE7" //+ " "     //  प्र
//                     //     j += 2
//                     // } else if (final[j] === 'प' && final[j + 1] === '्') {
//                     //     bag4 += "x49" //+ " "    //  प्
//                     //     j++
//                     // } else if (final[j] === 'फ' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "xDD" //+ " "     //  फ्र
//                     //     j += 2
//                     // } else if (final[j] === 'फ' && final[j + 1] === '्') {
//                     //     bag4 += "xB6" //+ " "   // फ्
//                     //     j++
//                     // } else if (final[j] === 'ब' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66x43" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'ब' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "x63x7A" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'ब' && final[j + 1] === '्') {
//                     //     bag4 += "x43" //+ " "   //  ब्
//                     //     j++
//                     // } else if (final[j] === 'भ' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66x48" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'भ' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "x48x6Bx7A" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'भ' && final[j + 1] === '्') {
//                     //     bag4 += "x48" //+ " "    //  भ्
//                     //     j++
//                     // } else if (final[j] === 'म' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66x45" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'म' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "x65x7A" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'म' && final[j + 1] === '्') {
//                     //     bag4 += "x45" //+ " "    // म्
//                     //     j++
//                     // } else if (final[j] === 'य' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66xB8" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'य' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "x3Bx7A" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'य' && final[j + 1] === '्') {
//                     //     bag4 += "xB8" //+ " "   //  य्
//                     //     j++
//                     // } else if (final[j] === 'य' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "x3Bx7A" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'र' && final[j + 1] === 'ु') {
//                     //     bag4 += "x23" //+ " "    //  रु
//                     //     j++
//                     // } else if (final[j] === 'र' && final[j + 1] === 'ू') {
//                     //     bag4 += "x3A" //+ " "    //  रू
//                     //     j++
//                     // } else if (final[j] === 'ल' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66x59" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'ल' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "x79x7A" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'ल' && final[j + 1] === '्') {
//                     //     bag4 += "x59" //+ " "    // ल्
//                     //     j++
//                     // } else if (final[j] === 'व' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66x4F" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'व' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "x6Fx7A" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'व' && final[j + 1] === '्') {
//                     //     bag4 += "x4F" //+ " "    //  व्
//                     //     j++
//                     // } else if (final[j] === 'श' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66x27" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'श' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "x4A" //+ " "    // श्र
//                     //     j += 2
//                     // } else if (final[j] === 'श' && final[j + 1] === '्') {
//                     //     bag4 += "x27"//+ " "     //  श्
//                     //     j++
//                     // } else if (final[j] === 'ष' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66x22" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'ष' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "x22x6Bx7A" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'ष' && final[j + 1] === '्') {
//                     //     bag4 += "x22" //+ " "   // ष्
//                     //     j++
//                     // } else if (final[j] === 'स' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                     //     bag4 += "x66x4C" //+ " "
//                     //     j += 2
//                     // } else if (final[j] === 'स' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                     //     bag4 += "x6Cx7A" //+ " "    // 
//                     //     j += 2
//                     // } else if (final[j] === 'ह' && final[j + 1] === '्' && final[j + 2] === 'म') {
//                     //     bag4 += "xE3" //+ " "    //  ह्म
//                     //     j += 2
//                     // } else if (final[j] === 'ह' && final[j + 1] === '्' && final[j + 2] === 'न') {
//                     //     bag4 += "xE0" //+ " "    //  ह्न
//                     //     j += 2
//                     // } else if (final[j] === 'स' && final[j + 1] === '्') {
//                     //     bag4 += "x4C" //+ " "   //  स्
//                     //     j++
//                     // } else if (final[j] === 'र' && final[j + 1] === '्') {
//                     //     bag4 += "x5A" //+ " "   // र् 
//                     //     j++
//                     // }
//                     else {
//                         bag4 += obj3[final[j]] //+ " "
                        
//                     }
//                 }
//                 return bag4
//             }
//             getvalues5(final)
//         } 
//     }
//     newData.push({ 'S_no.': `${i + 1}`, 'Hindi_UNICODE': `${bag4}`, 'Hindi': `${aman4}` });
//     count++;
//     if (count === 1) {
//         newData.push({ 'S_no.': `${i + 1}`, 'Hindi_UNICODE': `${bag4}`, 'Hindi': `${aman4}` });
//     }
// }

// const newSheet = xlsx.utils.json_to_sheet(newData);
// xlsx.utils.book_append_sheet(workbook, newSheet, 'Hindi_UNICODE',true);
// // xlsx.writeFile(workbook, 'C:\\Users\\PTCS\\Desktop\\test\\output3.xlsx');
// xlsx.writeFile(workbook, 'C:\\Users\\PTCS\\Downloads\\hindi.xlsx');
// // res.send(getValues3(final));
//     // res.send(newData);
//     res.send('New Excel file successfully created in download folder .');
// });
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//     console.log(`Server running at http://localhost:${port}`);
// });