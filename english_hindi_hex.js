////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const xlsx = require('xlsx');                                                                                    ///////
const express = require('express');                                                                              ///////
const multer = require('multer');                                                                                ///////
const app = express();                                                                                           ///////
const port2 = 3002;                                                                                              ///////
const path = require('path');                                                                                    ///////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var obj = {                                                                                                      ///////
//   अ: "x76",// "a",                                                                                               ///////
//   आ: "x76x6B",// "aa",                                                                                          ///////
//   ऑ:"x76x6Bx57",                                                                                                ///////
//     इ: "x62",// "i",                                                                                            ///////
//     ई: "xC3",// "ee",                                                                                           ///////
//     उ: "x6D",// "u",                                                                                            ///////
//     ऊ: "xC5",//"oo",                                                                                            ///////
//     ऋ: "x5F",// "ri",                                                                                           ///////
//     ए: "x2C",//"e",                                                                                             ///////
//     ऐ: "x2Cx73",// "ai",                                                                                        ///////
//     ओ: "x76xA8",// "o",                                                                                        ///////
//     औ: "x76xA9",// "au",                                                                                       ///////
//     क: "x64",// "ka",                                                                                           ///////
//     ख: "x5Bx6B"  ,// "kha",                                                                                     ///////
//     ग: "x78",// "ga",                                                                                           ///////
//     ग़: "x78x2B"  ,// "ga",                                                                                      ///////
//     घ: "xC4"  ,// "gha",                                                                                        ///////
//     ङ: "xB3",// "nga",                                                                                          ///////
//     ड़: "x4Dx2B"  ,// "nga",                                                                                     ///////
//     च: "x70"  ,// "cha",                                                                                        ///////
//     छ: "x4E"  ,// "chha",                                                                                       ///////
//     ज: "x74",// "ja",                                                                                           ///////
//     'ज़': "x74",// "ja",                                                                                         ///////
//     झ: "x3E"  ,// "jha",                                                                                        ///////
//     ञ: "xA5"  ,// "nya",                                                                                        ///////
//     ट: "x56"  ,// "ta",                                                                                         ///////
//   ठ: "x42",// "tha",
//   ड़: "x4Dx2B"  ,// "da",///////
//     ड: "x4D",// "da",                                                                                           ///////
//                                                                                          ///////
//     ढ: "x3C",// "dha",                                                                                          ///////
//     ढ़: "x3Cx2B"  ,// "dha",                                                                                     ///////
//     ण: "x2Ex6B"  ,// "na",                                                                                      ///////
//     त: "x72"  ,// "ta",                                                                                         ///////
//     थ: "x46x6B"  ,// "tha",                                                                                     ///////
//     द: "x6E"  ,// "da",                                                                                         ///////
//     ध: "x2Fx6B"  ,// "dha",                                                                                     ///////
//     न: "x75"  ,// "na",                                                                                         ///////
//     प: "x69"  ,// "pa",                                                                                         ///////
//     फ: "x51",// "pha",                                                                                         ///////
//     फ्र: "xDD"  ,// "pha",                                                                                       ///////
//     ब: "x63"  ,// "ba",                                                                                        ///////
//     भ: "x48x6B"  ,// "bha",                                                                                    ///////
//     म: "x65"  ,// "ma",                                                                                        ///////
//     य: "x3B",// "ya",                                                                                          ///////
//     र: "x6A"  ,// "ra",                                                                                        ///////
//     र: "x6A"  ,// "ra",                                                                                        ///////
//     र: "x6A"  ,// "ra",                                                                                        ///////
//     ल: "x79"  ,// "la",                                                                                        ///////
//     व: "x6F"  ,// "va",                                                                                        ///////
//     श: "x27x6B"  ,// "sha",                                                                                    ///////
//     ष: "x22x6B"  ,// "sha",                                                                                    ///////
//     स: "x6C"  ,// "sa",                                                                                        ///////
//     ह: "x67"  ,// "ha",                                                                                        ///////
//     क्ष: "x7Bx6B"  ,// "ksha",                                                                                   ///////
//     त्र: "x3D"  ,// "tra",                                                                                       ///////
//     ज्ञ: "x4B"  ,// "jnya",                                                                                      ///////
//     स्: "x6Cx5A"  ,// "",                                                                                       ///////
//     ल्: "x79x5A",// "",                                                                                         ///////
//     ल्: "x79x5A",// "",                                                                                         ///////
//     'ा': "x6B",// "x6B",                                                                                        ///////
//     'ॉ': "x6Bx57",                                                                                              ///////
//     'ि': "x66",// "x66",                                                                                        ///////
//     'िं': "xC7",                                                                                                 ///////
//     'ी': "x68",                                                                                                 ///////
//     'ु': "x71",                                                                                                  ///////
//     'ू': "x77",                                                                                                  ///////
//     'ृ': "x60",// "x60",                                                                                         ///////
//     '्': "x7E"  ,// "x7E",                                                                                       ///////
//     'े': "x73"  ,// "x73",                                                                                       ///////
//     // 'े': "xA2",// "xA2",                                                                                      ///////
//     'ै': "x53",// "x53",                                                                                         ///////
//     'ो': "xA8",// "xA8",                                                                                         ///////
//     'ौ': "xA9",// "xA9",                                                                                         ///////
//     ' ': "x20",                                                                                                  ///////
//     'ं': "x61",                                                                                                   ///////
//     '्': "x7E",                                                                                                   ///////
//     '़': "x2B",                                                                                                   ///////
//     'ॅ': "x57",                                                                                                   ///////
//     'ँ': "xA1",                                                                                                   ///////
//     '{': "xBF",                                                                                                  ///////
//     '}': "xF8",                                                                                                  ///////
//     '=': "xBE",                                                                                                  ///////
//     '!': "x21",                                                                                                  ///////
//     '+': "x24",                                                                                                  ///////
//     '÷': "xBB",                                                                                                  ///////
//     'ः': "x25",                                                                                                  ///////
//     '-': "x26",                                                                                                  ///////
//     ';': "x28",                                                                                                  ///////
//     '(': "xBC",                                                                                                  ///////
//     '⦁': "xDB",                                                                                                  ///////
//     '∘': "xF1",                                                                                                  ///////
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
//     '/': "x40",                                                                                                  ///////
//     '|': "x41",                                                                                                  ///////
//     'ळ': "x47",                                                                                                  ///////
//     'ऽ': "xB7",                                                                                                  ///////
//     '8': "x39",                                                                                                  ///////
//     "०": "xE5",// "0",                                                                                           ///////
//     "१": "x31"  ,// "1",                                                                                         ///////
//     "२": "x201E"  ,// "2",                                                                                       ///////
//     "३": "x2026"  ,// "3",                                                                                       ///////
//     "४": "x2020"  ,// "4",                                                                                       ///////
//     "५": ""  ,// "5",                                                                                            ///////
//     "६": "x2C6"  ,// "6",                                                                                        ///////
//     "७": "x2030"  ,// "7",                                                                                       ///////
//     "८": "x160"  ,// "8",                                                                                        ///////
//     "९": "x2039",// "9",                                                                                         ///////
//     'रर्': "x6Bx5A"  ,// "9",                                                                                     ///////
// };                                                                                                               ///////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.use(express.static('public/app_english_hindi')); // Serve static files in the 'public' directory             ///////
// app.use(express.urlencoded({ extended: false }));                                                             ///////
const storage = multer.diskStorage({                                                                             ///////
    destination: (req, file, cb) =>{                                                                             ///////
        cb(null, 'uploads/hex');                                                                                 ///////
    },                                                                                                           ///////
    filename: function (req, file, cb) {                                                                         ///////
        cb(null, file.originalname);                                                                             ///////
    }                                                                                                            ///////
});                                                                                                              ///////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////
const upload = multer({ storage, fileFilter });                              //
app.post('/upload', upload.single('file'), (req, res) => {                   //
  // Get the file path                                                       //
  filePath = req.file.path;                                                  //
  // res.send('File uploaded successfully.');                                //
    // app.post('/upload_button', (req, res) => {                            //
    // res.send('File uploaded successfully.');                              //
    // });                                                                   //
})                                                                           //
///////////////////////////////////////////////////////////////////////////////
app.post('/a', (req, res) => {
  try { 
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(sheet);
    const newData = [];    
    let count = 0
    for (let data of jsonData) {
      let bag1 = "";  
      let aman1 = ""
      let aman2 = ""
      let chars = ""
      let chars2 = ""
      let bag4 = "";
      let aman3 = ""
      let aman4 = ""
      let stn_code_bag = ""
    for (let key in data) {
      if (key === 'English' || key === 'ENGLISH') {
        let bag3 = "";
        // console.log(data[key])
        const original_text = data[key].trim();
        const char3 = [...original_text.toUpperCase()];
        // const char3 = [...data[key].toUpperCase()]///////this charData is used to insert character in array one by one
        for (let k = 0; k < char3.length; k++){
          if (char3[k] === 'j' && char3[k + 1] === 'u' && char3[k + 2] === 'n' && char3[k + 3] === 'c'
            && char3[k + 4] === 't' && char3[k + 5] === 'i' && char3[k + 6] === 'o' && char3[k + 7] === 'n' && char3[k + 8] === ' ') { 
            bag3+= 'JN.'
            k += 8;
          }else if (char3[k] === 'j' && char3[k + 1] === 'u' && char3[k + 2] === 'n' && char3[k + 3] === 'c'
            && char3[k + 4] === 't' && char3[k + 5] === 'i' && char3[k + 6] === 'o' && char3[k + 7] === 'n') {
            bag3 += 'JN.'
            k += 7;
          } else if (char3[k] === 'J' && char3[k + 1] === 'U' && char3[k + 2] === 'N' && char3[k + 3] === 'C'
            && char3[k + 4] === 'T' && char3[k + 5] === 'I' && char3[k + 6] === 'O' && char3[k + 7] === 'N' && char3[k + 8] === ' ') {
            bag3+= 'JN.'
            k += 8;
          }else if (char3[k] === 'J' && char3[k + 1] === 'U' && char3[k + 2] === 'N' && char3[k + 3] === 'C'
            && char3[k + 4] === 'T' && char3[k + 5] === 'I' && char3[k + 6] === 'O' && char3[k + 7] === 'N') {
            bag3+= 'JN.'
            k += 7;
          }else if (char3[k]==='j' && char3[k+1]==='n'&& char3[k+2]==='.' && char3[k+3]===' ') {
            bag3+= 'JN.'
            k+=3
          }else if (char3[k]==='j' && char3[k+1]==='n'&& char3[k+2]==='.') {
            bag3+= 'JN.'
            k+=2
          }else if (char3[k]==='J' && char3[k+1]==='N'&& char3[k+2]==='.' && char3[k+3]===' ') {
            bag3+= 'JN.'
            k+=3
          }else if (char3[k]==='J' && char3[k+1]==='N'&& char3[k+2]==='.') {
            bag3+= 'JN.'
            k+=2
          }else if (char3[k]==='J' && char3[k+1]==='U'&& char3[k+2]==='N' && char3[k+3]===' ') {
            bag3+= 'JN.'
            k+=3
          }else if (char3[k]==='J' && char3[k+1]==='U'&& char3[k+2]==='N') {
            bag3+= 'JN.'
            k+=2
          }else if (char3[k]==='j' && char3[k+1]==='u'&& char3[k+2]==='n' && char3[k+3]===' ') {
            bag3+= 'JN.'
            k+=3
          }else if (char3[k]==='j' && char3[k+1]==='u'&& char3[k+2]==='n') {
            bag3+= 'JN.'
            k+=2
          }else if (char3[k]==='J' && char3[k+1]==='u'&& char3[k+2]==='n' && char3[k+3]===' ') {
            bag3+= 'JN.'
            k+=3
          }else if (char3[k]==='J' && char3[k+1]==='u'&& char3[k+2]==='n') {
            bag3+= 'JN.'
            k+=2
          }else if (char3[k]===' ' &&char3[k+1]==='j' && char3[k+2]==='n'&& char3[k+3]==='.') {
            bag3+= ' JN.'
            k+=3
          }
          else if (char3[k] === ' ' && char3[k + 1] === 'j' && char3[k + 2] === 'n' && char3[k + 3] === ' ') {
            bag3+= ' JN.'
            k+=3
          } else if (char3[k]===' ' && char3[k+1]==='j' && char3[k+2]==='n' && char3[k+3]==='.' && char3[k+4]===' ') {
            bag3+= ' JN.'
            k+=4
          }
          else if (char3[k] === ' ' && char3[k + 1] === 'j' && char3[k + 2] === 'n') {
            bag3+= ' JN.'
            k+=2
          }else if (char3[k]===' ' && char3[k+1]==='J' && char3[k+2]==='N' && char3[k+3]==='.') {
            bag3+= ' JN.'
            k+=3
          }
          else if (char3[k] === ' ' && char3[k + 1] === 'J' && char3[k + 2] === 'N' && char3[k + 3] === ' ') {
            bag3+= ' JN.'
            k+=3
          }else if ( char3[k]===' ' &&char3[k+1]==='J' && char3[k+2]==='N' && char3[k+3]==='.' && char3[k+4]===' ') {
            bag3+= ' JN.'
            k+=4
          }else if (char3[k]===' ' && char3[k+1]==='J' && char3[k+2]==='N') {
            bag3+= ' JN.'
            k+=2
          }
          else if (char3[k] === 'S' && char3[k + 1] === 'U' && char3[k + 2] === 'P' && char3[k + 3] === 'E' && char3[k + 4] === 'R'
            && char3[k + 5] === 'F' && char3[k + 6] === 'A' && char3[k + 7] === 'S' && char3[k + 8] === 'T') {
            bag3+= 'SF '
            k+=8
          }
            else if (char3[k] === 'S' && char3[k + 1] === 'U' && char3[k + 2] === 'P' && char3[k + 3] === 'E' && char3[k + 4] === 'R'
            && char3[k + 5] === ' ' && char3[k + 6] === 'F' && char3[k + 7] === 'A' && char3[k + 8] === 'S' && char3[k + 9] === 'T') {
            bag3+= 'SF '
            k+=9
          }
            else if (char3[k] === 's' && char3[k + 1] === 'u' && char3[k + 2] === 'p' && char3[k + 3] === 'e' && char3[k + 4] === 'r'
            && char3[k + 5] === 'f' && char3[k + 6] === 'a' && char3[k + 7] === 's' && char3[k + 8] === 't') {
            bag3+= 'SF '
            k+=8
          }
            else if (char3[k] === 's' && char3[k + 1] === 'u' && char3[k + 2] === 'p' && char3[k + 3] === 'e' && char3[k + 4] === 'r'
            && char3[k + 5] === ' '&& char3[k + 6] === 'f' && char3[k + 7] === 'a' && char3[k + 8] === 's' && char3[k + 9] === 't') {
            bag3+= 'SF '
            k+=9
          }
          else {
            bag3+= char3[k]
          }
        }
        chars2 = bag3
        // chars2 = data[key]
        // console.log(char3)
        // console.log(bag3)
        const original_char = bag3.replace(/[^a-zA-Z0-9 .]/g, '');
        chars = [...original_char.toUpperCase()].map(letter => 'x' + letter.charCodeAt(0).toString(16).toUpperCase()).join('');
        // newData.push({ ...data, English_Hex_CODE: chars }); // Add encrypted data to new field 'ENCRYPTED'
        // console.log(chars)
        count++
      }
      else if (key === 'Hindi') {
          const output = []
          const output2 = []/////this output is use to print hindi value in output 
        const hindi_text = data[key].trim();
        const hex1 = [...hindi_text.split('')];  
        // const hex1 = [...data[key].split('')]
          // output2.push(data[key])
          // let keys = "कलर बख गक्रज"
        // const hex1 = [...keys.split('')]
        console.log(hex1) 
          for (let i = 0; i < hex1.length; i++) {
            if (hex1[i + 1] === '्' && hex1[i + 2] === 'त' && hex1[i + 3] === 'ि') {
              output.push(hex1[i + 3] + hex1[i] + hex1[i + 1]+hex1[i+2])
              output2.push(hex1[i] + hex1[i + 1] + hex1[i + 2])
              i += 2;
            }else if (hex1[i + 1] === '.' && hex1[i + 2] === 'ि') {
              output.push(hex1[i + 2] + hex1[i] + hex1[i+1])
              output2.push(hex1[i] + hex1[i+1] + hex1[i+2])
              i+=2;
            }
            else if (hex1[i + 1] === 'ि') {
              output.push(hex1[i + 1] + hex1[i])
              output2.push(hex1[i] + hex1[i+1])
              i++;
            }
            else if (hex1[i] === ' ' && hex1[i + 1] === 'ज' && hex1[i + 2] === 'ं' && hex1[i + 3] === 'क'
              && hex1[i + 4] ===  '्'  && hex1[i + 5] === 'श' && hex1[i + 6] === 'न' && hex1[i + 7] === ' ') {
              output.push(' जं.') // जं़
              output2.push(' जं.') //////exception for hindi output.
              i += 7
            }else if (hex1[i] === ' ' && hex1[i + 1] === 'ज' && hex1[i + 2] === 'ं' && hex1[i + 3] === 'क'
              && hex1[i + 4] ===  '्'  && hex1[i + 5] === 'श' && hex1[i + 6] === 'न' ) {
              output.push(' जं.') // जं़
              output2.push(' जं.') //////exception for hindi output.
              i += 7
            }else if (hex1[i] === ' ' && hex1[i + 1] === 'ज' && hex1[i + 2] === 'ं' && hex1[i + 3] === ' ') {
              output.push(' जं.') // जं़
              output2.push(' जं.')//////exception for hindi output.
              i += 3       //one extra line delete for if bymistake we add . then we remove one extra
            }else if (hex1[i] === ' ' && hex1[i + 1] === 'ज' && hex1[i + 2] === 'ं' ) {
              output.push(' जं.') // जं़
              output2.push(' जं.')//////exception for hindi output.
              i += 3       //one extra line delete for if bymistake we add . then we remove one extra
            }else if (hex1[i] === 'र' && hex1[i + 1] === '्' && hex1[i + 3] === 'ा') {
              output.push(hex1[i + 2] + hex1[i + 3] + hex1[i] + hex1[i + 1])
              output2.push(hex1[i] + hex1[i+1] + hex1[i+2] + hex1[i+3]) //////exception for hindi output.
              i += 3;
            }else if (hex1[i+1] === '्' && hex1[i + 2] === 'र' && hex1[i + 3] === 'ि') {
              output.push(hex1[i+3] + hex1[i] + hex1[i+1] + hex1[i + 2])
              output2.push(hex1[i] + hex1[i+1] + hex1[i+2] + hex1[i+3]) //////exception for hindi output.
              i += 3;
            }
              else if (hex1[i] === 'र' && hex1[i + 1] === '्' && hex1[i + 3] === 'ि') {
              output.push(hex1[i + 3] + hex1[i + 2] + hex1[i] + hex1[i + 1])
              output2.push(hex1[i] + hex1[i+1] + hex1[i+2] + hex1[i+3]) //////exception for hindi output.
              i += 3;
            }
              else if (hex1[i] === 'र' && hex1[i + 1] === '्' && hex1[i + 3] === 'ी') {
              output.push(hex1[i + 2] + hex1[i + 3] + hex1[i] + hex1[i + 1])
              output2.push(hex1[i] + hex1[i+1] + hex1[i+2] + hex1[i+3]) //////exception for hindi output.
              i += 3;
            }
            else if (hex1[i] === 'र' && hex1[i + 1] === '्' && hex1[i + 3] === 'े') {
              output.push(hex1[i + 2] + hex1[i + 3] + hex1[i] + hex1[i + 1])
              output2.push(hex1[i] + hex1[i+1] + hex1[i+2] + hex1[i+3]) //////exception for hindi output.
              i += 3;
            } else if (hex1[i] === 'र' && hex1[i + 1] === '्') {
              output.push(hex1[i + 2] + hex1[i] + hex1[i + 1])
              output2.push(hex1[i] + hex1[i+1] + hex1[i + 2])  //////exception for hindi output.
              i += 2;
            }
            else if (hex1[i] === 'स' && hex1[i + 1] === 'ु' && hex1[i + 2] === 'प' && hex1[i + 3] === 'र' && hex1[i + 4] === 'फ'
            && hex1[i + 5] === 'ा' && hex1[i + 6] === 'स' && hex1[i + 7] === '्' && hex1[i + 8] === 'ट') {
              output.push(' एस एफ ')
              output2.push(' एस एफ ')  //////exception for hindi output.
              i += 9;
            }
            else if (hex1[i] === 'स' && hex1[i + 1] === 'ु' && hex1[i + 2] === 'प' && hex1[i + 3] === 'र' && hex1[i + 4] === 'फ'
            && hex1[i + 5] === 'ा' && hex1[i + 6] === 'स' && hex1[i + 7] === '्' ) {
              output.push(' एस एफ ')
              output2.push(' एस एफ ')  //////exception for hindi output.
              i += 8;
            }
            else {
              output.push(hex1[i])
              output2.push(hex1[i])  //////exception for hindi output.
            }
        }
        aman2 = output2.join('')
        aman1 = output.join('')
        // console.log(keys)   /// not run
        console.log(hex1)      /// this data we write in excell
        // console.log(output2)
        // console.log(output)
        // console.log(aman1)   // this data are show in xml file 
          const final = [...aman1.split('')]
          console.log(final)       /// this data we show some correction
          function getvalues5(final) {
            for (let j = 0; j < final.length; j++) {
              if (final[j] === 'स' && final[j + 1] === '्' && final[j + 2] === 'त' && final[j + 3] === '्' && final[j + 4] === 'र') {
                bag1 += "xF3" + " "   // स्त्र
                j += 4
              }
              else if (final[j] === 'क' && final[j + 1] === '्' && final[j + 2] === 'ष' && final[j + 3] === '्') {
                bag1 += "x7B" //+ " "   // क्ष्
                j += 3
              } else if (final[j] === 'न' && final[j + 1] === '्' && final[j + 2] === 'न' && final[j + 3] === '्') {
                bag1 += "xE9x7E"// + " "   // न्न्
                j += 3
              } else if (final[j] === 'त' && final[j + 1] === '्' && final[j + 2] === 'त' && final[j + 3] === '्') {
                bag1 += "xD9" //+ " "   // त्त्
                j += 3
              } else if (final[j] === 'द' && final[j + 1] === 'र' && final[j + 2] === '्' && final[j + 3] === '्' && final[j + 4] === 'ध') {
                bag1 += "x29x5A" //+ " "  //द्ध
                j += 4
              } else if (final[j] === ' ' && final[j + 1] === 'ज' && final[j + 2] === 'ं' && final[j + 3] === 'क'
              && final[j + 4] ===  '्'  && final[j + 5] === 'श' && final[j + 6] === 'न' ) {
                bag1 += "x20x74x61x2D" //+ " "    // जं़
                j+=7
              }else if (final[j] === ' ' && final[j + 1] === 'ज' && final[j + 2] === 'ं' ) {
                bag1 += "x20x74x61x2D" //+ " "    // जं़
                j+=3
              }else if (final[j] === 'ड' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x4DxAA" //+ " "   // ड्र
                j += 2
              }else if (final[j] === '्' && final[j + 1] === 'र') {
                bag1 += "x7A" //+ " "    // ex म्र
                j++
              }else if (final[j] === 'क' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "xD8" //+ " "   //   क्र
                j += 2
              } else if (final[j] === 'क' && final[j + 1] === 'ृ') {
                bag1 += "xD1" //+ " "    // ex म्र
                j++
              } else if (final[j] === 'ड' && final[j + 1] === 'ि' && final[j + 2] === '़') {
                bag1 += "x66x4Dx2B" //+ " "   // ड़ि
                j += 2
              } else if (final[j] === 'क' && final[j + 1] === '्' && final[j + 2] === 'क') {
                bag1 += "xF4" //+ " "   // क्क 
                j += 2
              } else if (final[j] === 'क' && final[j + 1] === '्' && final[j + 2] === 'ष') {
                bag1 += "x7Bx6B" //+ " "   // क्ष
                j += 2
              }
              // else if (final[j] === 'क' && final[j + 1] === '्' && final[j + 2] === 'र') {
              //     bag1 += "x64x7A" + " "
              //     j+=2
              // }
              else if (final[j] === 'क' && final[j + 1] === '्') {
                bag1 += "x44" //+ " "    //  क्
                j++
              } else if (final[j] === 'क' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66x44" //+ " "
                j += 2
              } else if (final[j] === 'ख' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66x5B" //+ " "
                j += 2
              } else if (final[j] === 'ख' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x5Bx6Bx7A" //+ " "
                j += 2
              } else if (final[j] === 'ख' && final[j + 1] === '्') {
                bag1 += "x5B" //+ " "   //  ख्
                j++
              } else if (final[j] === 'ख' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "xA3" //+ " "   // ख्र
                j += 2
              } else if (final[j] === 'ग' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66x58" //+ " "
                j += 2
              } else if (final[j] === 'ग' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x78x7A" //+ " "
                j += 2
              } else if (final[j] === 'ग' && final[j + 1] === '्') {
                bag1 += "x58" //+ " "    //  ग्
                j++
              } else if (final[j] === 'घ' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66x3F" //+ " "
                j += 2
              } else if (final[j] === 'घ' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x3Fx7A" //+ " "
                j += 2
              } else if (final[j] === 'घ' && final[j + 1] === '्') {
                bag1 += "x3F" //+ " "   // घ्
                j++
              } else if (final[j] === 'च' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66x50" //+ " "
                j += 2
              } else if (final[j] === 'च' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x50x7A" //+ " "
                j += 2
              } else if (final[j] === 'च' && final[j + 1] === '्') {
                bag1 += "x50" //+ " "    // च्
                j++
              } else if (final[j] === 'ज' && final[j + 1] === '्' && final[j + 2] === 'ञ') {
                bag1 += "x4B" //+ " "   // ज्ञ
                j += 2
              } else if (final[j] === 'ज' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66x54" //+ " "
                j += 2
              } else if (final[j] === 'ज' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x54x7A" //+ " "
                j += 2
              } else if (final[j] === 'ज' && final[j + 1] === '्') {
                bag1 += "x54" //+ " "    // ज्
                j++
              } else if (final[j] === 'झ' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66xD6" //+ " "
                j += 2
              } else if (final[j] === 'झ' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x3Ex7A" //+ " "
                j += 2
              } else if (final[j] === 'झ' && final[j + 1] === '्') {
                bag1 += "xD6" //+ " "   // झ्
                j++
              } else if (final[j] === 'ट' && final[j + 1] === '्' && final[j + 2] === 'ट') {
                bag1 += "xCD" //+ " "   // ट्ट
                j += 2
              } else if (final[j] === 'ट' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x56xAA" //+ " "   // ट्र
                j += 2
              } else if (final[j] === 'ट' && final[j + 1] === '्' && final[j + 2] === 'ठ') {
                bag1 += "xCE" //+ " "   // ट्ठ
                j += 2
              } else if (final[j] === 'ड' && final[j + 1] === '्' && final[j + 2] === 'ड') {
                bag1 += "xCF" //+ " "   // ट्ठ
                j += 2
              } else if (final[j] === 'ड' && final[j + 1] === '्' && final[j + 2] === 'ढ') {
                bag1 += "xEF" //+ " "   // ड्ढ
                j += 2
              } else if (final[j] === 'ण' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66x2E" //+ " "
                j += 2
              } else if (final[j] === 'ण' && final[j + 1] === '्') {
                bag1 += "x2E" //+ " "    //  ण्
                j++
              } else if (final[j] === 'त' && final[j + 1] === '्' && final[j + 2] === 'त') {
                bag1 += "xD9x6B" //+ " "   // त्त
                j += 2
              } else if (final[j] === 'त' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66x52" //+ " "
                j += 2
              }  else if (final[j] === 'त' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x3D" //+ " "   // त्र
                j += 2
              } else if (final[j] === 'त' && final[j + 1] === '्') {
                bag1 += "x52" //+ " "   // त्
                j++
              }else if (final[j] === 'थ' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66x46" //+ " "
                j += 2
              } else if (final[j] === 'थ' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x46x6Bx7A" //+ " "
                j += 2
              } else if (final[j] === 'थ' && final[j + 1] === '्') {
                bag1 += "x46" //+ " "   //  थ्
                j++
              } else if (final[j] === 'द' && final[j + 1] === '्' && final[j + 2] === 'द') {
                bag1 += "xCC" //+ " "   // द्द
                j += 2
              } else if (final[j] === 'द' && final[j + 1] === '्' && final[j + 2] === 'य') {
                bag1 += "x7C" //+ " "   // द्य
                j += 2
              } else if (final[j] === 'द' && final[j + 1] === '्' && final[j + 2] === 'व') {
                bag1 += "x7D" //+ " "   // द्व
                j += 2
              } else if (final[j] === 'द' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "xE6" //+ " "   // द्र
                j += 2
              } else if (final[j] === 'द' && final[j + 1] === '्' && final[j + 2] === 'भ') {
                bag1 += "xF6" //+ " "   // द्भ
                j += 2
              } else if (final[j] === 'द' && final[j + 1] === '्' && final[j + 2] === 'म') {
                bag1 += "xF9" //+ " "   // द्म
                j += 2
              } else if (final[j] === 'द' && final[j + 1] === '्' && final[j + 2] === 'ध') {
                bag1 += "x29" //+ " "   // द्ध
                j += 2
              } else if (final[j] === 'ध' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66x2F" //+ " "
                j += 2
              } else if (final[j] === 'ध' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x2Fx7A" //+ " "
                j += 2
              } else if (final[j] === 'ध' && final[j + 1] === '्') {
                bag1 += "x2F" //+ " "   //  ध ्
                j++
              } else if (final[j] === 'न' && final[j + 1] === '्' && final[j + 2] === 'न') {
                bag1 += "xE9" //+ " "   // न्न
                j += 2
              } else if (final[j] === 'न' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66x55" //+ " "
                j += 2
              } else if (final[j] === 'न' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x75x7A" //+ " "
                j += 2
              } else if (final[j] === 'न' && final[j + 1] === '्') {
                bag1 += "x55" //+ " "    //  न्
                j++
              } else if (final[j] === 'प' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66x49" //+ " "
                j += 2
              } else if (final[j] === 'प' && final[j + 1] === '्' && final[j + 2] === 'र') {
                // bag1 += "x69x7A" + " "
                bag1 += "xE7" //+ " "     //  प्र
                j += 2
              } else if (final[j] === 'प' && final[j + 1] === '्') {
                bag1 += "x49" //+ " "    //  प्
                j++
              } else if (final[j] === 'फ' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "xDD" //+ " "     //  फ्र
                j += 2
              } else if (final[j] === 'फ' && final[j + 1] === '्') {
                bag1 += "xB6" //+ " "   // फ्
                j++
              } else if (final[j] === 'ब' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66x43" //+ " "
                j += 2
              } else if (final[j] === 'ब' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x63x7A" //+ " "
                j += 2
              } else if (final[j] === 'ब' && final[j + 1] === '्') {
                bag1 += "x43" //+ " "   //  ब्
                j++
              } else if (final[j] === 'भ' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66x48" //+ " "
                j += 2
              } else if (final[j] === 'भ' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x48x6Bx7A" //+ " "
                j += 2
              } else if (final[j] === 'भ' && final[j + 1] === '्') {
                bag1 += "x48" //+ " "    //  भ्
                j++
              } else if (final[j] === 'म' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66x45" //+ " "
                j += 2
              } else if (final[j] === 'म' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x65x7A" //+ " "
                j += 2
              } else if (final[j] === 'म' && final[j + 1] === '्') {
                bag1 += "x45" //+ " "    // म्
                j++
              } else if (final[j] === 'य' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66xB8" //+ " "
                j += 2
              } else if (final[j] === 'य' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x3Bx7A" //+ " "
                j += 2
              } else if (final[j] === 'य' && final[j + 1] === '्') {
                bag1 += "xB8" //+ " "   //  य्
                j++
              } else if (final[j] === 'य' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x3Bx7A" //+ " "
                j += 2
              } else if (final[j] === 'र' && final[j + 1] === 'ु') {
                bag1 += "x23" //+ " "    //  रु
                j++
              } else if (final[j] === 'र' && final[j + 1] === 'ू') {
                bag1 += "x3A" //+ " "    //  रू
                j++
              } else if (final[j] === 'ल' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66x59" //+ " "
                j += 2
              } else if (final[j] === 'ल' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x79x7A" //+ " "
                j += 2
              } else if (final[j] === 'ल' && final[j + 1] === '्') {
                bag1 += "x59" //+ " "    // ल्
                j++
              } else if (final[j] === 'व' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66x4F" //+ " "
                j += 2
              } else if (final[j] === 'व' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x6Fx7A" //+ " "
                j += 2
              } else if (final[j] === 'व' && final[j + 1] === '्') {
                bag1 += "x4F" //+ " "    //  व्
                j++
              } else if (final[j] === 'श' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66x27" //+ " "
                j += 2
              } else if (final[j] === 'श' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x4A" //+ " "    // श्र
                j += 2
              } else if (final[j] === 'श' && final[j + 1] === '्') {
                bag1 += "x27"//+ " "     //  श्
                j++
              } else if (final[j] === 'ष' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66x22" //+ " "
                j += 2
              } else if (final[j] === 'ष' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x22x6Bx7A" //+ " "
                j += 2
              } else if (final[j] === 'ष' && final[j + 1] === '्') {
                bag1 += "x22" //+ " "   // ष्
                j++
              } else if (final[j] === 'स' && final[j + 1] === '्' && final[j + 2] === 'ि') {
                bag1 += "x66x4C" //+ " "
                j += 2
              } else if (final[j] === 'स' && final[j + 1] === '्' && final[j + 2] === 'र') {
                bag1 += "x6Cx7A" //+ " "    // 
                j += 2
              } else if (final[j] === 'ह' && final[j + 1] === '्' && final[j + 2] === 'म') {
                bag1 += "xE3" //+ " "    //  ह्म
                j += 2
              } else if (final[j] === 'ह' && final[j + 1] === '्' && final[j + 2] === 'न') {
                bag1 += "xE0" //+ " "    //  ह्न
                j += 2
              } else if (final[j] === 'स' && final[j + 1] === '्') {
                bag1 += "x4C" //+ " "   //  स्
                j++
              } else if (final[j] === 'र' && final[j + 1] === '्') {
                bag1 += "x5A" //+ " "   // र् 
                j++
              }
              else {
                bag1 += obj[final[j]] //+ " "
                        
              }
            }
            // console.log(bag1)
            return bag1
            // console.log(bag1)
          }
          getvalues5(final)
      }
      else if (key === 'Hindi_Devnagri') {
        const output3 = []
        const output4 = []
        const hindi_text2 = data[key].trim();
        const hex2 = [...hindi_text2.split('')];
        // const hex2 = [...data[key].split('')]
          // const hex2 = [...jsonData[i][key].split('')]
          // console.log(hex2)
          // output4.push(jsonData[i][key])
          // let keys = "कलर बख गक्रज"
        // const hex2 = [...keys.split('')]
        // console.log(hex2)
          for (let i = 0; i < hex2.length; i++) {
            if (hex2[i] === ' ' && hex2[i + 1] === 'ज' && hex2[i + 2] === 'ं' && hex2[i + 3] === 'क' && hex2[i + 4] === '्' && hex2[i + 5] === 'श' && hex2[i + 6] === 'न' && hex2[i + 7] === ' ') {
              output3.push(' जंः') // जं़
                output4.push(' जंः') //////exception for hindi output3.
              i += 7
            }else if (hex2[0] === " ") {
              output3.push(hex2[i + 1])
              output4.push(hex2[i + 1])
              
            }
              else if (hex2[i] === "-") {
              output3.push("")
              output4.push("")
              
            }
            else if (hex2[i] === ' ' && hex2[i + 1] === 'ज' && hex2[i + 2] === 'ं' && hex2[i + 3] === 'क'
              && hex2[i + 4] === '्' && hex2[i + 5] === 'श' && hex2[i + 6] === 'न') {
              output3.push(' जंः') // जं़
                output4.push(' जंः') //////exception for hindi output3.
              i += 7
            } else if (hex2[i] === ' ' && hex2[i + 1] === 'ज' && hex2[i + 2] === 'ं' && hex2[i + 3] === ' ') {
              output3.push(' जंः') // जं़
                output4.push(' जंः')//////exception for hindi output3.
              i += 3       //one extra line delete for if bymistake we add . then we remove one extra
            } else if (hex2[i] === ' ' && hex2[i + 1] === 'ज' && hex2[i + 2] === 'ं') {
              output3.push(' जंः') // जं़
                output4.push(' जंः')//////exception for hindi output3.
              i += 3       //one extra line delete for if bymistake we add . then we remove one extra
            }
            // else if (hex2[i] === 'र' && hex2[i + 1] === '्') {
            //   output3.push(hex2[i + 2] + hex2[i] + hex2[i + 1])
            //   output4.push(hex2[i + 2] + hex2[i] + hex2[i + 1])
            //   i += 2;
            // }
            // else if (hex2[i] === 'र' && hex2[i + 1] === '्') {
            //   output3.push(hex2[i + 2] + hex2[i] + hex2[i + 1])
            //   output4.push(hex2[i] + hex2[i+1] + hex2[i + 2])  //////exception for hindi output.
            //   i += 2;
            // }
            else if (hex2[i] === 'स' && hex2[i + 1] === 'ु' && hex2[i + 2] === 'प' && hex2[i + 3] === 'र' && hex2[i + 4] === 'फ'
            && hex2[i + 5] === 'ा' && hex2[i + 6] === 'स' && hex2[i + 7] === '्' && hex2[i + 8] === 'ट'&& hex2[i + 9] === ' ') {
              output3.push('एस एफ ')
              output4.push('एस एफ ')  //////exception for hindi output.
              i += 9;
            }
            else if (hex2[i] === 'स' && hex2[i + 1] === 'ु' && hex2[i + 2] === 'प' && hex2[i + 3] === 'र' && hex2[i + 4] === 'फ'
            && hex2[i + 5] === 'ा' && hex2[i + 6] === 'स' && hex2[i + 7] === '्' && hex2[i + 8] === 'ट') {
              output3.push(' एस एफ ')
              output4.push(' एस एफ ')  //////exception for hindi output.
              i += 8;
            }
            else {
              output3.push(hex2[i])
              output4.push(hex2[i])
            }
          }
          aman4 = output4.join('')
        aman3 = output3.join('')
           // this data are show in xml file 
          const final2 = [...aman3.split('')]
          // console.log(final2)       /// this data we show some correction
          function getvalues6(final2) {
            for (let j = 0; j < final2.length; j++) {
              if (final2[j] === 'स' && final2[j + 1] === '्' && final2[j + 2] === 'त' && final2[j + 3] === '्' && final2[j + 4] === 'र') {
                bag4 += "xF3"   // स्त्र
                j += 4
              } else if (final2[0] === ' ') {
                bag4 += obj3[final2[0]]
                continue;
              }
              else {
                bag4 += obj3[final2[j]] //+ " "
                        
              }
            }
            return bag4
          }
          getvalues6(final2)

      }
      else if (key === 'Code') {
        const original_text = data[key].trim().toUpperCase().replace(/[#@$& ]/g, '');
        stn_code_bag = original_text
      //  console.log(original_text)
      }
      else{}
      
      }
      newData.push({'No.': `${count}`,'Code': `${stn_code_bag}`,'English_Hex_CODE': `${chars}`,'English': `${chars2}` ,  'Hindi_HEX_CODE': `${bag1}`, 'Hindi': `${aman2}` , 'Hindi_UNICODE': `${bag4}`, 'Hindi_Devnagri': `${aman4}` });
    }
//////////////////////////find distance between two x y z    co-ordinate //////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
    const xData = jsonData.map((key) => key.X);                                                                   ///////
    const yData = jsonData.map((key) => key.Y);                                                                   ///////
    const zData = jsonData.map((key) => key.Z);                                                                   ///////
    const latitude = jsonData.map((key) =>key.Latitude);  
    const longitude = jsonData.map((key) => key.Longitude);  
    const altitude = jsonData.map((key) => key.Altitude_M);  
    let distances = [];                                                                                           ///////
    let bag = ""                                                                                                  /////// 
    let X1 = ""                                                                                                   ///////
    let X2 = ""                                                                                                   ///////
    let Y1 = ""                                                                                                   ///////
    let Y2 = ""                                                                                                   ///////
    let Z1 = ""                                                                                                   ///////
    let Z2 = ""                                                                                                   ///////
    let distance = ""                                                                                             ///////
    let latitude1 = ""
    let longitude1 = ""
    let altitude1 = ""
    function calculateDistance(x1, y1, z1, x2, y2, z2) {                                                          ///////
      return Math.round(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2)));           ///////
    }                                                                                                             ///////
    function safelyConvertToNumber(value) {
    if (typeof value === 'string' || value === 'undefined') {
        // Remove spaces and attempt to convert to a number
        const numericValue = parseFloat(value.replace(/\s/g, ''));

        // Check if the conversion is successful
        if (!isNaN(numericValue)) {
            return numericValue;
        }
    }

    // Return the original value if it couldn't be converted
    return value;
}
    for (let i = 0; i < xData.length - 1; i++) {                                                                  ///////
      X1 = xData[i];                                                                                              ///////
      X2 = xData[i + 1];                                                                                          ///////
      Y1 = yData[i];                                                                                              ///////
      Y2 = yData[i + 1];                                                                                          ///////
      Z1 = zData[i];                                                                                              ///////
      Z2 = zData[i + 1];                                                                                          ///////
      latitude1 =  safelyConvertToNumber(latitude[i]) ; 
      longitude1 = safelyConvertToNumber(longitude[i]); 
      altitude1 =  safelyConvertToNumber(altitude[i]);
      distance = calculateDistance(X1, Y1, Z1, X2, Y2, Z2);
      const a = 6378137.0;
      const b = 6356752.314140371;
      const latrad = (latitude1 * (Math.PI / 180));
      const longrad = (longitude1 * (Math.PI / 180));
      const N = a / Math.sqrt(1 - (1 - (b / a) ** 2) * (Math.sin(latrad)) ** 2);
      const x = Math.abs(Math.floor((N + altitude1) * Math.cos(latrad) * Math.cos(longrad)))
      const y = Math.abs(Math.floor((N + altitude1) * Math.cos(latrad) * Math.sin(longrad)))
      const z = Math.abs(Math.floor((((b / a) ** 2) * N + altitude1) * Math.sin(latrad)))
      stn_x_bag = x;
      stn_y_bag = y;
      stn_z_bag = z;
    //   console.log(x, y, z);
    //   console.log(latitude1, longitude1, altitude1);
    // console.log(typeof x, typeof y, typeof z);
      // distances.push([distance+"  m."]);                                                                       ///////
      // distances.push([distance + "  m."]);                                                                     ///////
      // distances.push({ 'X': `${X1}`, 'Y': `${Y1}`, 'Z': `${Z1}`, '  ': ` `, 'calculator': `${distance} m.`, 'X3': `${x}`, 'Y3': `${y}`, 'Z3': `${z}` });    ///////
      distances.push({'Latitude': `${latitude1}`, 'Longitude': `${longitude1}`, 'Altitude_M': `${altitude1}`,'X': `${x}`, 'Y': `${y}`, 'Z': `${z}` })
  
      // newData.push({ 'No11.': `${[distance]}`, })                                                              ///////
    }                                                                                                             ///////
    // console.log(distances)                                                                                     ///////
    const newWorksheet = xlsx.utils.json_to_sheet(distances);                                                     ///////
    // const newWorksheet = xlsx.utils.json_to_sheet([['Calculator'], ...distances], { skipHeader: true });       ///////
    xlsx.utils.book_append_sheet(workbook, newWorksheet, 'Distances', true);                                      ///////
    const outputFilePath = path.join(__dirname, filePath.replace('uploads/', ''));                                ///////
                                                                                                                  ///////
    xlsx.writeFile(workbook, outputFilePath);                                                                     ///////
    // res.download(outputFilePath, 'English_Hindi_Hex.xlsx', () => {                                             ///////
    // });                                                                                                        ///////
    // xlsx.writeFile(workbook, 'C:\\Users\\PTCS\\Downloads\\English_Hindi_Hex.xlsx');                            ///////
    console.log('Distances added to the Excel sheet successfully!');                                                ///////
                                                                                                                  ///////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // const newSheet = xlsx.utils.json_to_sheet(newData); // Convert the newData array to a new sheet            ///////
    // xlsx.utils.book_append_sheet(workbook, newSheet, 'English_Hindi',true); // Add the new sheet to the workbook//////
    // xlsx.writeFile(workbook, 'C:\\Users\\PTCS\\Downloads\\English_Hindi_Hex.xlsx');                            ///////
    // console.log('New Excel file created successfully at:');                                                    ///////
    // res.send('New Excel file created successfull.');                                                           ///////
    //                                                                                                            ///////
                                                                                                                  ///////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const newSheet = xlsx.utils.json_to_sheet(newData);                                                             ///////
  xlsx.utils.book_append_sheet(workbook, newSheet, 'English_Hindi', true);                                        ///////
  const outputFilePath2 = path.join(__dirname, filePath.replace('uploads/', ''));                                 ///////
  xlsx.writeFile(workbook, outputFilePath2);                                                                      ///////
  res.download(outputFilePath2, 'English_Hindi_Hex.xlsx', () => {                                                 ///////
  });                                                                                                             ///////            
}                                                                                                                 ///////
  catch (error) {                                                                                                 ///////
    console.error(error);                                                                                         ///////
    res.status(500).send('Internal server error'+ error.message);                                                                ///////
  }                                                                                                               ///////
});                                                                                                               ///////
app.listen(port2, () => {                                                                                         ///////
  console.log(`Server is running on http://localhost:${port2}`);                                                  ///////
});                                                                                                               ///////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////













var obj = {                                                                                                      ///////
  // "$":"##",
  अ: "x76",// "a",                                                                                               ///////
  आ: "x76x6B",// "aa",                                                                                          ///////
  ऑ:"x76x6Bx57",                                                                                                ///////
    इ: "x62",// "i",                                                                                            ///////
    ई: "xC3",// "ee",                                                                                           ///////
    उ: "x6D",// "u",                                                                                            ///////
    ऊ: "xC5",//"oo",                                                                                            ///////
    ऋ: "x5F",// "ri",                                                                                           ///////
    ए: "x2C",//"e",                                                                                             ///////
    ऐ: "x2Cx73",// "ai",                                                                                        ///////
    ओ: "x76xA8",// "o",                                                                                        ///////
    औ: "x76xA9",// "au",                                                                                       ///////
    क: "x64",// "ka",                                                                                           ///////
    ख: "x5Bx6B"  ,// "kha",                                                                                     ///////
    ग: "x78",// "ga",                                                                                           ///////
    ग़: "x78x2B"  ,// "ga",                                                                                      ///////
    घ: "xC4"  ,// "gha",                                                                                        ///////
    ङ: "xB3",// "nga",                                                                                          ///////
    ड़: "x4Dx2B"  ,// "nga",                                                                                     ///////
    च: "x70"  ,// "cha",                                                                                        ///////
    छ: "x4E"  ,// "chha",                                                                                       ///////
    ज: "x74",// "ja",                                                                                           ///////
    'ज़': "x74",// "ja",                                                                                         ///////
    झ: "x3E"  ,// "jha",                                                                                        ///////
    ञ: "xA5"  ,// "nya",                                                                                        ///////
    ट: "x56"  ,// "ta",                                                                                         ///////
  ठ: "x42",// "tha",
  ड़: "x4Dx2B"  ,// "da",///////
    ड: "x4D",// "da",                                                                                           ///////
                                                                                         ///////
    ढ: "x3C",// "dha",                                                                                          ///////
    ढ़: "x3Cx2B"  ,// "dha",                                                                                     ///////
    ण: "x2Ex6B"  ,// "na",                                                                                      ///////
    त: "x72"  ,// "ta",                                                                                         ///////
    थ: "x46x6B"  ,// "tha",                                                                                     ///////
    द: "x6E"  ,// "da",                                                                                         ///////
    ध: "x2Fx6B"  ,// "dha",                                                                                     ///////
    न: "x75"  ,// "na",                                                                                         ///////
    प: "x69"  ,// "pa",                                                                                         ///////
    फ: "x51",// "pha",                                                                                         ///////
  फ्र: "xDD",// "pha", 
  फ़: "x51",///////
    ब: "x63"  ,// "ba",                                                                                        ///////
    भ: "x48x6B"  ,// "bha",                                                                                    ///////
    म: "x65"  ,// "ma",                                                                                        ///////
    य: "x3B",// "ya",                                                                                          ///////
    र: "x6A"  ,// "ra",                                                                                        ///////
    र: "x6A"  ,// "ra",                                                                                        ///////
    र: "x6A"  ,// "ra",                                                                                        ///////
    ल: "x79"  ,// "la",                                                                                        ///////
    व: "x6F"  ,// "va",                                                                                        ///////
    श: "x27x6B"  ,// "sha",                                                                                    ///////
    ष: "x22x6B"  ,// "sha",                                                                                    ///////
    स: "x6C"  ,// "sa",                                                                                        ///////
    ह: "x67"  ,// "ha",                                                                                        ///////
    क्ष: "x7Bx6B"  ,// "ksha",                                                                                   ///////
    त्र: "x3D"  ,// "tra",                                                                                       ///////
    ज्ञ: "x4B"  ,// "jnya",                                                                                      ///////
    स्: "x6Cx5A"  ,// "",                                                                                       ///////
  ल्: "x79x5A",// "",  
  ल: "x79",///////
  ",": "x5D",
    ल्: "x79x5A",// "",                                                                                         ///////
    'ा': "x6B",// "x6B",                                                                                        ///////
    'ॉ': "x6Bx57",                                                                                              ///////
    'ि': "x66",// "x66",                                                                                        ///////
    'िं': "xC7",                                                                                                 ///////
    'ी': "x68",                                                                                                 ///////
    'ु': "x71",                                                                                                  ///////
    'ू': "x77",                                                                                                  ///////
    'ृ': "x60",// "x60",                                                                                         ///////
    '्': "x7E"  ,// "x7E",                                                                                       ///////
    'े': "x73"  ,// "x73",                                                                                       ///////
    // 'े': "xA2",// "xA2",                                                                                      ///////
    'ै': "x53",// "x53",                                                                                         ///////
    'ो': "xA8",// "xA8",                                                                                         ///////
    'ौ': "xA9",// "xA9",                                                                                         ///////
    ' ': "x20",                                                                                                  ///////
    'ं': "x61",                                                                                                   ///////
    '्': "x7E",                                                                                                   ///////
    '़': "x2B",                                                                                                   ///////
    'ॅ': "x57",                                                                                                   ///////
    'ँ': "xA1",                                                                                                   ///////
    '{': "xBF",                                                                                                  ///////
    '}': "xF8",                                                                                                  ///////
    '=': "xBE",                                                                                                  ///////
    '!': "x21",                                                                                                  ///////
    '+': "x24",                                                                                                  ///////
    '÷': "xBB",                                                                                                  ///////
    'ः': "x25",                                                                                                  ///////
    '-': "x26",                                                                                                  ///////
    ';': "x28",                                                                                                  ///////
    '(': "xBC",                                                                                                  ///////
    '⦁': "xDB",                                                                                                  ///////
    '∘': "xF1",                                                                                                  ///////
    '.': "x2D",                                                                                                  ///////
    '(': "xBC",                                                                                                  ///////
    '?': "x5B",                                                                                                  ///////
    '0': "x30",                                                                                                  ///////
    '1': "x31",                                                                                                  ///////
    '2': "x32",                                                                                                  ///////
    '3': "x33",                                                                                                  ///////
    '4': "x34",                                                                                                  ///////
    '5': "x35",                                                                                                  ///////
    '6': "x36",                                                                                                  ///////
    '7': "x37",                                                                                                  ///////
    '8': "x38",                                                                                                  ///////
    '9': "x39",                                                                                                  ///////
    '/': "x40",                                                                                                  ///////
    '|': "x41",                                                                                                  ///////
    'ळ': "x47",                                                                                                  ///////
    'ऽ': "xB7",                                                                                                  ///////
    '8': "x39",                                                                                                  ///////
    "०": "xE5",// "0",                                                                                           ///////
    "१": "x31"  ,// "1",                                                                                         ///////
    "२": "x201E"  ,// "2",                                                                                       ///////
    "३": "x2026"  ,// "3",                                                                                       ///////
    "४": "x2020"  ,// "4",                                                                                       ///////
    "५": ""  ,// "5",                                                                                            ///////
    "६": "x2C6"  ,// "6",                                                                                        ///////
    "७": "x2030"  ,// "7",                                                                                       ///////
    "८": "x160"  ,// "8",                                                                                        ///////
    "९": "x2039",// "9",                                                                                         ///////
    'रर्': "x6Bx5A"  ,// "9",                                                                                     ///////
};  


var obj3 = { 
  ":":"x20",
  ",":",",
  "$":"##",                                                                                                ///////
  0: "##",
  a: "#",
  b: "#",
  c: "#",
  d:  "#",
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
    ष: "xB7"  ,// "sha",                                                                                    ///////
  स: "xB8",// "sa",
    ह: "xB9"  ,// "ha",                                                                                        ///////
    क्ष: "x95xCDxB7"  ,// "ksha",                                                                                   ///////
  त्र: "xA4xCDxB1",// "tra",
  ज्ञ: "x9CxCDx9E",// "jnya",
    स्: "xB8xCD",// "",                                                                                       ///////
  ल्: "xB2xCD",// "",
  ल:"xB2",
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






















// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const xlsx = require('xlsx');                                                                                    ///////
// const express = require('express');                                                                              ///////
// const multer = require('multer');                                                                                ///////
// const app = express();                                                                                           ///////
// const port2 = 3002;                                                                                              ///////
// const path = require('path');                                                                                    ///////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // var obj = {                                                                                                      ///////
// //   अ: "x76",// "a",                                                                                               ///////
// //   आ: "x76x6B",// "aa",                                                                                          ///////
// //   ऑ:"x76x6Bx57",                                                                                                ///////
// //     इ: "x62",// "i",                                                                                            ///////
// //     ई: "xC3",// "ee",                                                                                           ///////
// //     उ: "x6D",// "u",                                                                                            ///////
// //     ऊ: "xC5",//"oo",                                                                                            ///////
// //     ऋ: "x5F",// "ri",                                                                                           ///////
// //     ए: "x2C",//"e",                                                                                             ///////
// //     ऐ: "x2Cx73",// "ai",                                                                                        ///////
// //     ओ: "x76xA8",// "o",                                                                                        ///////
// //     औ: "x76xA9",// "au",                                                                                       ///////
// //     क: "x64",// "ka",                                                                                           ///////
// //     ख: "x5Bx6B"  ,// "kha",                                                                                     ///////
// //     ग: "x78",// "ga",                                                                                           ///////
// //     ग़: "x78x2B"  ,// "ga",                                                                                      ///////
// //     घ: "xC4"  ,// "gha",                                                                                        ///////
// //     ङ: "xB3",// "nga",                                                                                          ///////
// //     ड़: "x4Dx2B"  ,// "nga",                                                                                     ///////
// //     च: "x70"  ,// "cha",                                                                                        ///////
// //     छ: "x4E"  ,// "chha",                                                                                       ///////
// //     ज: "x74",// "ja",                                                                                           ///////
// //     'ज़': "x74",// "ja",                                                                                         ///////
// //     झ: "x3E"  ,// "jha",                                                                                        ///////
// //     ञ: "xA5"  ,// "nya",                                                                                        ///////
// //     ट: "x56"  ,// "ta",                                                                                         ///////
// //   ठ: "x42",// "tha",
// //   ड़: "x4Dx2B"  ,// "da",///////
// //     ड: "x4D",// "da",                                                                                           ///////
// //                                                                                          ///////
// //     ढ: "x3C",// "dha",                                                                                          ///////
// //     ढ़: "x3Cx2B"  ,// "dha",                                                                                     ///////
// //     ण: "x2Ex6B"  ,// "na",                                                                                      ///////
// //     त: "x72"  ,// "ta",                                                                                         ///////
// //     थ: "x46x6B"  ,// "tha",                                                                                     ///////
// //     द: "x6E"  ,// "da",                                                                                         ///////
// //     ध: "x2Fx6B"  ,// "dha",                                                                                     ///////
// //     न: "x75"  ,// "na",                                                                                         ///////
// //     प: "x69"  ,// "pa",                                                                                         ///////
// //     फ: "x51",// "pha",                                                                                         ///////
// //     फ्र: "xDD"  ,// "pha",                                                                                       ///////
// //     ब: "x63"  ,// "ba",                                                                                        ///////
// //     भ: "x48x6B"  ,// "bha",                                                                                    ///////
// //     म: "x65"  ,// "ma",                                                                                        ///////
// //     य: "x3B",// "ya",                                                                                          ///////
// //     र: "x6A"  ,// "ra",                                                                                        ///////
// //     र: "x6A"  ,// "ra",                                                                                        ///////
// //     र: "x6A"  ,// "ra",                                                                                        ///////
// //     ल: "x79"  ,// "la",                                                                                        ///////
// //     व: "x6F"  ,// "va",                                                                                        ///////
// //     श: "x27x6B"  ,// "sha",                                                                                    ///////
// //     ष: "x22x6B"  ,// "sha",                                                                                    ///////
// //     स: "x6C"  ,// "sa",                                                                                        ///////
// //     ह: "x67"  ,// "ha",                                                                                        ///////
// //     क्ष: "x7Bx6B"  ,// "ksha",                                                                                   ///////
// //     त्र: "x3D"  ,// "tra",                                                                                       ///////
// //     ज्ञ: "x4B"  ,// "jnya",                                                                                      ///////
// //     स्: "x6Cx5A"  ,// "",                                                                                       ///////
// //     ल्: "x79x5A",// "",                                                                                         ///////
// //     ल्: "x79x5A",// "",                                                                                         ///////
// //     'ा': "x6B",// "x6B",                                                                                        ///////
// //     'ॉ': "x6Bx57",                                                                                              ///////
// //     'ि': "x66",// "x66",                                                                                        ///////
// //     'िं': "xC7",                                                                                                 ///////
// //     'ी': "x68",                                                                                                 ///////
// //     'ु': "x71",                                                                                                  ///////
// //     'ू': "x77",                                                                                                  ///////
// //     'ृ': "x60",// "x60",                                                                                         ///////
// //     '्': "x7E"  ,// "x7E",                                                                                       ///////
// //     'े': "x73"  ,// "x73",                                                                                       ///////
// //     // 'े': "xA2",// "xA2",                                                                                      ///////
// //     'ै': "x53",// "x53",                                                                                         ///////
// //     'ो': "xA8",// "xA8",                                                                                         ///////
// //     'ौ': "xA9",// "xA9",                                                                                         ///////
// //     ' ': "x20",                                                                                                  ///////
// //     'ं': "x61",                                                                                                   ///////
// //     '्': "x7E",                                                                                                   ///////
// //     '़': "x2B",                                                                                                   ///////
// //     'ॅ': "x57",                                                                                                   ///////
// //     'ँ': "xA1",                                                                                                   ///////
// //     '{': "xBF",                                                                                                  ///////
// //     '}': "xF8",                                                                                                  ///////
// //     '=': "xBE",                                                                                                  ///////
// //     '!': "x21",                                                                                                  ///////
// //     '+': "x24",                                                                                                  ///////
// //     '÷': "xBB",                                                                                                  ///////
// //     'ः': "x25",                                                                                                  ///////
// //     '-': "x26",                                                                                                  ///////
// //     ';': "x28",                                                                                                  ///////
// //     '(': "xBC",                                                                                                  ///////
// //     '⦁': "xDB",                                                                                                  ///////
// //     '∘': "xF1",                                                                                                  ///////
// //     '.': "x2D",                                                                                                  ///////
// //     '(': "xBC",                                                                                                  ///////
// //     '?': "x5B",                                                                                                  ///////
// //     '0': "x30",                                                                                                  ///////
// //     '1': "x31",                                                                                                  ///////
// //     '2': "x32",                                                                                                  ///////
// //     '3': "x33",                                                                                                  ///////
// //     '4': "x34",                                                                                                  ///////
// //     '5': "x35",                                                                                                  ///////
// //     '6': "x36",                                                                                                  ///////
// //     '7': "x37",                                                                                                  ///////
// //     '8': "x38",                                                                                                  ///////
// //     '9': "x39",                                                                                                  ///////
// //     '/': "x40",                                                                                                  ///////
// //     '|': "x41",                                                                                                  ///////
// //     'ळ': "x47",                                                                                                  ///////
// //     'ऽ': "xB7",                                                                                                  ///////
// //     '8': "x39",                                                                                                  ///////
// //     "०": "xE5",// "0",                                                                                           ///////
// //     "१": "x31"  ,// "1",                                                                                         ///////
// //     "२": "x201E"  ,// "2",                                                                                       ///////
// //     "३": "x2026"  ,// "3",                                                                                       ///////
// //     "४": "x2020"  ,// "4",                                                                                       ///////
// //     "५": ""  ,// "5",                                                                                            ///////
// //     "६": "x2C6"  ,// "6",                                                                                        ///////
// //     "७": "x2030"  ,// "7",                                                                                       ///////
// //     "८": "x160"  ,// "8",                                                                                        ///////
// //     "९": "x2039",// "9",                                                                                         ///////
// //     'रर्': "x6Bx5A"  ,// "9",                                                                                     ///////
// // };                                                                                                               ///////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// app.use(express.static('public/app_english_hindi')); // Serve static files in the 'public' directory             ///////
// // app.use(express.urlencoded({ extended: false }));                                                             ///////
// const storage = multer.diskStorage({                                                                             ///////
//     destination: (req, file, cb) =>{                                                                             ///////
//         cb(null, 'uploads/hex');                                                                                 ///////
//     },                                                                                                           ///////
//     filename: function (req, file, cb) {                                                                         ///////
//         cb(null, file.originalname);                                                                             ///////
//     }                                                                                                            ///////
// });                                                                                                              ///////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// const fileFilter = (req, file, cb) => {                                      //
//   // if (                                                                    //
//   //   file.mimetype === 'application/vnd.ms-excel' ||file.mimetype ===      //
//   //     'application/vnd.openxmlformats-officedocument.spreadsheetml.shee   //
//   // ) {                                                                     //
//   //   cb(null, true);                                                       //
//   // }                                                                       //
//   if (file) {                                                                //
//   cb(null, true);                                                            //
// }                                                                            //
//    else {                                                                    //
//     cb(new Error('Only Excel files are allowed.'));                          //
//   }                                                                          //
// };                                                                           //
// ///////////////////////////////////////////////////////////////////////////////
// const upload = multer({ storage, fileFilter });                              //
// app.post('/upload', upload.single('file'), (req, res) => {                   //
//   // Get the file path                                                       //
//   filePath = req.file.path;                                                  //
//   // res.send('File uploaded successfully.');                                //
//     // app.post('/upload_button', (req, res) => {                            //
//     // res.send('File uploaded successfully.');                              //
//     // });                                                                   //
// })                                                                           //
// ///////////////////////////////////////////////////////////////////////////////
// app.post('/a', (req, res) => {
//   try { 
//     const workbook = xlsx.readFile(filePath);
//     const sheetName = workbook.SheetNames[0];
//     const sheet = workbook.Sheets[sheetName];
//     const jsonData = xlsx.utils.sheet_to_json(sheet);
//     const newData = [];    
//     let count = 0
//     for (let data of jsonData) {
//       let bag1 = "";  
//       let aman1 = ""
//       let aman2 = ""
//       let chars = ""
//       let chars2 = ""
//       let bag4 = "";
//       let aman3 = ""
//       let aman4 = ""
//     for (let key in data) {
//       if (key === 'English' || key === 'ENGLISH') {
//         let bag3 = "";
//         // console.log(data[key])
//         const original_text = data[key].trim();
//         const char3 = [...original_text.toUpperCase()];
//         // const char3 = [...data[key].toUpperCase()]///////this charData is used to insert character in array one by one
//         for (let k = 0; k < char3.length; k++){
//           if (char3[k] === 'j' && char3[k + 1] === 'u' && char3[k + 2] === 'n' && char3[k + 3] === 'c'
//             && char3[k + 4] === 't' && char3[k + 5] === 'i' && char3[k + 6] === 'o' && char3[k + 7] === 'n' && char3[k + 8] === ' ') { 
//             bag3+= 'JN.'
//             k += 8;
//           }else if (char3[k] === 'j' && char3[k + 1] === 'u' && char3[k + 2] === 'n' && char3[k + 3] === 'c'
//             && char3[k + 4] === 't' && char3[k + 5] === 'i' && char3[k + 6] === 'o' && char3[k + 7] === 'n') {
//             bag3 += 'JN.'
//             k += 7;
//           } else if (char3[k] === 'J' && char3[k + 1] === 'U' && char3[k + 2] === 'N' && char3[k + 3] === 'C'
//             && char3[k + 4] === 'T' && char3[k + 5] === 'I' && char3[k + 6] === 'O' && char3[k + 7] === 'N' && char3[k + 8] === ' ') {
//             bag3+= 'JN.'
//             k += 8;
//           }else if (char3[k] === 'J' && char3[k + 1] === 'U' && char3[k + 2] === 'N' && char3[k + 3] === 'C'
//             && char3[k + 4] === 'T' && char3[k + 5] === 'I' && char3[k + 6] === 'O' && char3[k + 7] === 'N') {
//             bag3+= 'JN.'
//             k += 7;
//           }else if (char3[k]==='j' && char3[k+1]==='n'&& char3[k+2]==='.' && char3[k+3]===' ') {
//             bag3+= 'JN.'
//             k+=3
//           }else if (char3[k]==='j' && char3[k+1]==='n'&& char3[k+2]==='.') {
//             bag3+= 'JN.'
//             k+=2
//           }else if (char3[k]==='J' && char3[k+1]==='N'&& char3[k+2]==='.' && char3[k+3]===' ') {
//             bag3+= 'JN.'
//             k+=3
//           }else if (char3[k]==='J' && char3[k+1]==='N'&& char3[k+2]==='.') {
//             bag3+= 'JN.'
//             k+=2
//           }else if (char3[k]==='J' && char3[k+1]==='U'&& char3[k+2]==='N' && char3[k+3]===' ') {
//             bag3+= 'JN.'
//             k+=3
//           }else if (char3[k]==='J' && char3[k+1]==='U'&& char3[k+2]==='N') {
//             bag3+= 'JN.'
//             k+=2
//           }else if (char3[k]==='j' && char3[k+1]==='u'&& char3[k+2]==='n' && char3[k+3]===' ') {
//             bag3+= 'JN.'
//             k+=3
//           }else if (char3[k]==='j' && char3[k+1]==='u'&& char3[k+2]==='n') {
//             bag3+= 'JN.'
//             k+=2
//           }else if (char3[k]==='J' && char3[k+1]==='u'&& char3[k+2]==='n' && char3[k+3]===' ') {
//             bag3+= 'JN.'
//             k+=3
//           }else if (char3[k]==='J' && char3[k+1]==='u'&& char3[k+2]==='n') {
//             bag3+= 'JN.'
//             k+=2
//           }else if (char3[k]===' ' &&char3[k+1]==='j' && char3[k+2]==='n'&& char3[k+3]==='.') {
//             bag3+= ' JN.'
//             k+=3
//           }
//           else if (char3[k] === ' ' && char3[k + 1] === 'j' && char3[k + 2] === 'n' && char3[k + 3] === ' ') {
//             bag3+= ' JN.'
//             k+=3
//           } else if (char3[k]===' ' && char3[k+1]==='j' && char3[k+2]==='n' && char3[k+3]==='.' && char3[k+4]===' ') {
//             bag3+= ' JN.'
//             k+=4
//           }
//           else if (char3[k] === ' ' && char3[k + 1] === 'j' && char3[k + 2] === 'n') {
//             bag3+= ' JN.'
//             k+=2
//           }else if (char3[k]===' ' && char3[k+1]==='J' && char3[k+2]==='N' && char3[k+3]==='.') {
//             bag3+= ' JN.'
//             k+=3
//           }
//           else if (char3[k] === ' ' && char3[k + 1] === 'J' && char3[k + 2] === 'N' && char3[k + 3] === ' ') {
//             bag3+= ' JN.'
//             k+=3
//           }else if ( char3[k]===' ' &&char3[k+1]==='J' && char3[k+2]==='N' && char3[k+3]==='.' && char3[k+4]===' ') {
//             bag3+= ' JN.'
//             k+=4
//           }else if (char3[k]===' ' && char3[k+1]==='J' && char3[k+2]==='N') {
//             bag3+= ' JN.'
//             k+=2
//           }
//           else if (char3[k] === 'S' && char3[k + 1] === 'U' && char3[k + 2] === 'P' && char3[k + 3] === 'E' && char3[k + 4] === 'R'
//             && char3[k + 5] === 'F' && char3[k + 6] === 'A' && char3[k + 7] === 'S' && char3[k + 8] === 'T') {
//             bag3+= 'SF '
//             k+=8
//           }
//             else if (char3[k] === 'S' && char3[k + 1] === 'U' && char3[k + 2] === 'P' && char3[k + 3] === 'E' && char3[k + 4] === 'R'
//             && char3[k + 5] === ' ' && char3[k + 6] === 'F' && char3[k + 7] === 'A' && char3[k + 8] === 'S' && char3[k + 9] === 'T') {
//             bag3+= 'SF '
//             k+=9
//           }
//             else if (char3[k] === 's' && char3[k + 1] === 'u' && char3[k + 2] === 'p' && char3[k + 3] === 'e' && char3[k + 4] === 'r'
//             && char3[k + 5] === 'f' && char3[k + 6] === 'a' && char3[k + 7] === 's' && char3[k + 8] === 't') {
//             bag3+= 'SF '
//             k+=8
//           }
//             else if (char3[k] === 's' && char3[k + 1] === 'u' && char3[k + 2] === 'p' && char3[k + 3] === 'e' && char3[k + 4] === 'r'
//             && char3[k + 5] === ' '&& char3[k + 6] === 'f' && char3[k + 7] === 'a' && char3[k + 8] === 's' && char3[k + 9] === 't') {
//             bag3+= 'SF '
//             k+=9
//           }
//           else {
//             bag3+= char3[k]
//           }
//         }
//         chars2 = bag3
//         // chars2 = data[key]
//         // console.log(char3)
//         // console.log(bag3)
//         const original_char = bag3.replace(/[^a-zA-Z0-9 .]/g, '');
//         chars = [...original_char.toUpperCase()].map(letter => 'x' + letter.charCodeAt(0).toString(16).toUpperCase()).join('');
//         // newData.push({ ...data, English_Hex_CODE: chars }); // Add encrypted data to new field 'ENCRYPTED'
//         // console.log(chars)
//         count++
//       }
//       else if (key === 'Hindi') {
//           const output = []
//           const output2 = []/////this output is use to print hindi value in output 
//         const hindi_text = data[key].trim();
//         const hex1 = [...hindi_text.split('')];  
//         // const hex1 = [...data[key].split('')]
//           // output2.push(data[key])
//           // let keys = "कलर बख गक्रज"
//         // const hex1 = [...keys.split('')]
//         console.log(hex1) 
//           for (let i = 0; i < hex1.length; i++) {
//             if (hex1[i + 1] === '्' && hex1[i + 2] === 'त' && hex1[i + 3] === 'ि') {
//               output.push(hex1[i + 3] + hex1[i] + hex1[i + 1]+hex1[i+2])
//               output2.push(hex1[i] + hex1[i + 1] + hex1[i + 2])
//               i += 2;
//             }else if (hex1[i + 1] === '.' && hex1[i + 2] === 'ि') {
//               output.push(hex1[i + 2] + hex1[i] + hex1[i+1])
//               output2.push(hex1[i] + hex1[i+1] + hex1[i+2])
//               i+=2;
//             }
//             else if (hex1[i + 1] === 'ि') {
//               output.push(hex1[i + 1] + hex1[i])
//               output2.push(hex1[i] + hex1[i+1])
//               i++;
//             }
//             else if (hex1[i] === ' ' && hex1[i + 1] === 'ज' && hex1[i + 2] === 'ं' && hex1[i + 3] === 'क'
//               && hex1[i + 4] ===  '्'  && hex1[i + 5] === 'श' && hex1[i + 6] === 'न' && hex1[i + 7] === ' ') {
//               output.push(' जं.') // जं़
//               output2.push(' जं.') //////exception for hindi output.
//               i += 7
//             }else if (hex1[i] === ' ' && hex1[i + 1] === 'ज' && hex1[i + 2] === 'ं' && hex1[i + 3] === 'क'
//               && hex1[i + 4] ===  '्'  && hex1[i + 5] === 'श' && hex1[i + 6] === 'न' ) {
//               output.push(' जं.') // जं़
//               output2.push(' जं.') //////exception for hindi output.
//               i += 7
//             }else if (hex1[i] === ' ' && hex1[i + 1] === 'ज' && hex1[i + 2] === 'ं' && hex1[i + 3] === ' ') {
//               output.push(' जं.') // जं़
//               output2.push(' जं.')//////exception for hindi output.
//               i += 3       //one extra line delete for if bymistake we add . then we remove one extra
//             }else if (hex1[i] === ' ' && hex1[i + 1] === 'ज' && hex1[i + 2] === 'ं' ) {
//               output.push(' जं.') // जं़
//               output2.push(' जं.')//////exception for hindi output.
//               i += 3       //one extra line delete for if bymistake we add . then we remove one extra
//             }else if (hex1[i] === 'र' && hex1[i + 1] === '्' && hex1[i + 3] === 'ा') {
//               output.push(hex1[i + 2] + hex1[i + 3] + hex1[i] + hex1[i + 1])
//               output2.push(hex1[i] + hex1[i+1] + hex1[i+2] + hex1[i+3]) //////exception for hindi output.
//               i += 3;
//             }else if (hex1[i+1] === '्' && hex1[i + 2] === 'र' && hex1[i + 3] === 'ि') {
//               output.push(hex1[i+3] + hex1[i] + hex1[i+1] + hex1[i + 2])
//               output2.push(hex1[i] + hex1[i+1] + hex1[i+2] + hex1[i+3]) //////exception for hindi output.
//               i += 3;
//             }
//               else if (hex1[i] === 'र' && hex1[i + 1] === '्' && hex1[i + 3] === 'ि') {
//               output.push(hex1[i + 3] + hex1[i + 2] + hex1[i] + hex1[i + 1])
//               output2.push(hex1[i] + hex1[i+1] + hex1[i+2] + hex1[i+3]) //////exception for hindi output.
//               i += 3;
//             }
//               else if (hex1[i] === 'र' && hex1[i + 1] === '्' && hex1[i + 3] === 'ी') {
//               output.push(hex1[i + 2] + hex1[i + 3] + hex1[i] + hex1[i + 1])
//               output2.push(hex1[i] + hex1[i+1] + hex1[i+2] + hex1[i+3]) //////exception for hindi output.
//               i += 3;
//             }
//             else if (hex1[i] === 'र' && hex1[i + 1] === '्' && hex1[i + 3] === 'े') {
//               output.push(hex1[i + 2] + hex1[i + 3] + hex1[i] + hex1[i + 1])
//               output2.push(hex1[i] + hex1[i+1] + hex1[i+2] + hex1[i+3]) //////exception for hindi output.
//               i += 3;
//             } else if (hex1[i] === 'र' && hex1[i + 1] === '्') {
//               output.push(hex1[i + 2] + hex1[i] + hex1[i + 1])
//               output2.push(hex1[i] + hex1[i+1] + hex1[i + 2])  //////exception for hindi output.
//               i += 2;
//             }
//             else if (hex1[i] === 'स' && hex1[i + 1] === 'ु' && hex1[i + 2] === 'प' && hex1[i + 3] === 'र' && hex1[i + 4] === 'फ'
//             && hex1[i + 5] === 'ा' && hex1[i + 6] === 'स' && hex1[i + 7] === '्' && hex1[i + 8] === 'ट') {
//               output.push(' एस एफ ')
//               output2.push(' एस एफ ')  //////exception for hindi output.
//               i += 9;
//             }
//             else if (hex1[i] === 'स' && hex1[i + 1] === 'ु' && hex1[i + 2] === 'प' && hex1[i + 3] === 'र' && hex1[i + 4] === 'फ'
//             && hex1[i + 5] === 'ा' && hex1[i + 6] === 'स' && hex1[i + 7] === '्' ) {
//               output.push(' एस एफ ')
//               output2.push(' एस एफ ')  //////exception for hindi output.
//               i += 8;
//             }
//             else {
//               output.push(hex1[i])
//               output2.push(hex1[i])  //////exception for hindi output.
//             }
//         }
//         aman2 = output2.join('')
//         aman1 = output.join('')
//         // console.log(keys)   /// not run
//         console.log(hex1)      /// this data we write in excell
//         // console.log(output2)
//         // console.log(output)
//         // console.log(aman1)   // this data are show in xml file 
//           const final = [...aman1.split('')]
//           console.log(final)       /// this data we show some correction
//           function getvalues5(final) {
//             for (let j = 0; j < final.length; j++) {
//               if (final[j] === 'स' && final[j + 1] === '्' && final[j + 2] === 'त' && final[j + 3] === '्' && final[j + 4] === 'र') {
//                 bag1 += "xF3" + " "   // स्त्र
//                 j += 4
//               }
//               else if (final[j] === 'क' && final[j + 1] === '्' && final[j + 2] === 'ष' && final[j + 3] === '्') {
//                 bag1 += "x7B" //+ " "   // क्ष्
//                 j += 3
//               } else if (final[j] === 'न' && final[j + 1] === '्' && final[j + 2] === 'न' && final[j + 3] === '्') {
//                 bag1 += "xE9x7E"// + " "   // न्न्
//                 j += 3
//               } else if (final[j] === 'त' && final[j + 1] === '्' && final[j + 2] === 'त' && final[j + 3] === '्') {
//                 bag1 += "xD9" //+ " "   // त्त्
//                 j += 3
//               } else if (final[j] === 'द' && final[j + 1] === 'र' && final[j + 2] === '्' && final[j + 3] === '्' && final[j + 4] === 'ध') {
//                 bag1 += "x29x5A" //+ " "  //द्ध
//                 j += 4
//               } else if (final[j] === ' ' && final[j + 1] === 'ज' && final[j + 2] === 'ं' && final[j + 3] === 'क'
//               && final[j + 4] ===  '्'  && final[j + 5] === 'श' && final[j + 6] === 'न' ) {
//                 bag1 += "x20x74x61x2D" //+ " "    // जं़
//                 j+=7
//               }else if (final[j] === ' ' && final[j + 1] === 'ज' && final[j + 2] === 'ं' ) {
//                 bag1 += "x20x74x61x2D" //+ " "    // जं़
//                 j+=3
//               }else if (final[j] === 'ड' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x4DxAA" //+ " "   // ड्र
//                 j += 2
//               }else if (final[j] === '्' && final[j + 1] === 'र') {
//                 bag1 += "x7A" //+ " "    // ex म्र
//                 j++
//               }else if (final[j] === 'क' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "xD8" //+ " "   //   क्र
//                 j += 2
//               } else if (final[j] === 'क' && final[j + 1] === 'ृ') {
//                 bag1 += "xD1" //+ " "    // ex म्र
//                 j++
//               } else if (final[j] === 'ड' && final[j + 1] === 'ि' && final[j + 2] === '़') {
//                 bag1 += "x66x4Dx2B" //+ " "   // ड़ि
//                 j += 2
//               } else if (final[j] === 'क' && final[j + 1] === '्' && final[j + 2] === 'क') {
//                 bag1 += "xF4" //+ " "   // क्क 
//                 j += 2
//               } else if (final[j] === 'क' && final[j + 1] === '्' && final[j + 2] === 'ष') {
//                 bag1 += "x7Bx6B" //+ " "   // क्ष
//                 j += 2
//               }
//               // else if (final[j] === 'क' && final[j + 1] === '्' && final[j + 2] === 'र') {
//               //     bag1 += "x64x7A" + " "
//               //     j+=2
//               // }
//               else if (final[j] === 'क' && final[j + 1] === '्') {
//                 bag1 += "x44" //+ " "    //  क्
//                 j++
//               } else if (final[j] === 'क' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66x44" //+ " "
//                 j += 2
//               } else if (final[j] === 'ख' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66x5B" //+ " "
//                 j += 2
//               } else if (final[j] === 'ख' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x5Bx6Bx7A" //+ " "
//                 j += 2
//               } else if (final[j] === 'ख' && final[j + 1] === '्') {
//                 bag1 += "x5B" //+ " "   //  ख्
//                 j++
//               } else if (final[j] === 'ख' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "xA3" //+ " "   // ख्र
//                 j += 2
//               } else if (final[j] === 'ग' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66x58" //+ " "
//                 j += 2
//               } else if (final[j] === 'ग' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x78x7A" //+ " "
//                 j += 2
//               } else if (final[j] === 'ग' && final[j + 1] === '्') {
//                 bag1 += "x58" //+ " "    //  ग्
//                 j++
//               } else if (final[j] === 'घ' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66x3F" //+ " "
//                 j += 2
//               } else if (final[j] === 'घ' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x3Fx7A" //+ " "
//                 j += 2
//               } else if (final[j] === 'घ' && final[j + 1] === '्') {
//                 bag1 += "x3F" //+ " "   // घ्
//                 j++
//               } else if (final[j] === 'च' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66x50" //+ " "
//                 j += 2
//               } else if (final[j] === 'च' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x50x7A" //+ " "
//                 j += 2
//               } else if (final[j] === 'च' && final[j + 1] === '्') {
//                 bag1 += "x50" //+ " "    // च्
//                 j++
//               } else if (final[j] === 'ज' && final[j + 1] === '्' && final[j + 2] === 'ञ') {
//                 bag1 += "x4B" //+ " "   // ज्ञ
//                 j += 2
//               } else if (final[j] === 'ज' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66x54" //+ " "
//                 j += 2
//               } else if (final[j] === 'ज' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x54x7A" //+ " "
//                 j += 2
//               } else if (final[j] === 'ज' && final[j + 1] === '्') {
//                 bag1 += "x54" //+ " "    // ज्
//                 j++
//               } else if (final[j] === 'झ' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66xD6" //+ " "
//                 j += 2
//               } else if (final[j] === 'झ' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x3Ex7A" //+ " "
//                 j += 2
//               } else if (final[j] === 'झ' && final[j + 1] === '्') {
//                 bag1 += "xD6" //+ " "   // झ्
//                 j++
//               } else if (final[j] === 'ट' && final[j + 1] === '्' && final[j + 2] === 'ट') {
//                 bag1 += "xCD" //+ " "   // ट्ट
//                 j += 2
//               } else if (final[j] === 'ट' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x56xAA" //+ " "   // ट्र
//                 j += 2
//               } else if (final[j] === 'ट' && final[j + 1] === '्' && final[j + 2] === 'ठ') {
//                 bag1 += "xCE" //+ " "   // ट्ठ
//                 j += 2
//               } else if (final[j] === 'ड' && final[j + 1] === '्' && final[j + 2] === 'ड') {
//                 bag1 += "xCF" //+ " "   // ट्ठ
//                 j += 2
//               } else if (final[j] === 'ड' && final[j + 1] === '्' && final[j + 2] === 'ढ') {
//                 bag1 += "xEF" //+ " "   // ड्ढ
//                 j += 2
//               } else if (final[j] === 'ण' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66x2E" //+ " "
//                 j += 2
//               } else if (final[j] === 'ण' && final[j + 1] === '्') {
//                 bag1 += "x2E" //+ " "    //  ण्
//                 j++
//               } else if (final[j] === 'त' && final[j + 1] === '्' && final[j + 2] === 'त') {
//                 bag1 += "xD9x6B" //+ " "   // त्त
//                 j += 2
//               } else if (final[j] === 'त' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66x52" //+ " "
//                 j += 2
//               }  else if (final[j] === 'त' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x3D" //+ " "   // त्र
//                 j += 2
//               } else if (final[j] === 'त' && final[j + 1] === '्') {
//                 bag1 += "x52" //+ " "   // त्
//                 j++
//               }else if (final[j] === 'थ' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66x46" //+ " "
//                 j += 2
//               } else if (final[j] === 'थ' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x46x6Bx7A" //+ " "
//                 j += 2
//               } else if (final[j] === 'थ' && final[j + 1] === '्') {
//                 bag1 += "x46" //+ " "   //  थ्
//                 j++
//               } else if (final[j] === 'द' && final[j + 1] === '्' && final[j + 2] === 'द') {
//                 bag1 += "xCC" //+ " "   // द्द
//                 j += 2
//               } else if (final[j] === 'द' && final[j + 1] === '्' && final[j + 2] === 'य') {
//                 bag1 += "x7C" //+ " "   // द्य
//                 j += 2
//               } else if (final[j] === 'द' && final[j + 1] === '्' && final[j + 2] === 'व') {
//                 bag1 += "x7D" //+ " "   // द्व
//                 j += 2
//               } else if (final[j] === 'द' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "xE6" //+ " "   // द्र
//                 j += 2
//               } else if (final[j] === 'द' && final[j + 1] === '्' && final[j + 2] === 'भ') {
//                 bag1 += "xF6" //+ " "   // द्भ
//                 j += 2
//               } else if (final[j] === 'द' && final[j + 1] === '्' && final[j + 2] === 'म') {
//                 bag1 += "xF9" //+ " "   // द्म
//                 j += 2
//               } else if (final[j] === 'द' && final[j + 1] === '्' && final[j + 2] === 'ध') {
//                 bag1 += "x29" //+ " "   // द्ध
//                 j += 2
//               } else if (final[j] === 'ध' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66x2F" //+ " "
//                 j += 2
//               } else if (final[j] === 'ध' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x2Fx7A" //+ " "
//                 j += 2
//               } else if (final[j] === 'ध' && final[j + 1] === '्') {
//                 bag1 += "x2F" //+ " "   //  ध ्
//                 j++
//               } else if (final[j] === 'न' && final[j + 1] === '्' && final[j + 2] === 'न') {
//                 bag1 += "xE9" //+ " "   // न्न
//                 j += 2
//               } else if (final[j] === 'न' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66x55" //+ " "
//                 j += 2
//               } else if (final[j] === 'न' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x75x7A" //+ " "
//                 j += 2
//               } else if (final[j] === 'न' && final[j + 1] === '्') {
//                 bag1 += "x55" //+ " "    //  न्
//                 j++
//               } else if (final[j] === 'प' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66x49" //+ " "
//                 j += 2
//               } else if (final[j] === 'प' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 // bag1 += "x69x7A" + " "
//                 bag1 += "xE7" //+ " "     //  प्र
//                 j += 2
//               } else if (final[j] === 'प' && final[j + 1] === '्') {
//                 bag1 += "x49" //+ " "    //  प्
//                 j++
//               } else if (final[j] === 'फ' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "xDD" //+ " "     //  फ्र
//                 j += 2
//               } else if (final[j] === 'फ' && final[j + 1] === '्') {
//                 bag1 += "xB6" //+ " "   // फ्
//                 j++
//               } else if (final[j] === 'ब' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66x43" //+ " "
//                 j += 2
//               } else if (final[j] === 'ब' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x63x7A" //+ " "
//                 j += 2
//               } else if (final[j] === 'ब' && final[j + 1] === '्') {
//                 bag1 += "x43" //+ " "   //  ब्
//                 j++
//               } else if (final[j] === 'भ' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66x48" //+ " "
//                 j += 2
//               } else if (final[j] === 'भ' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x48x6Bx7A" //+ " "
//                 j += 2
//               } else if (final[j] === 'भ' && final[j + 1] === '्') {
//                 bag1 += "x48" //+ " "    //  भ्
//                 j++
//               } else if (final[j] === 'म' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66x45" //+ " "
//                 j += 2
//               } else if (final[j] === 'म' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x65x7A" //+ " "
//                 j += 2
//               } else if (final[j] === 'म' && final[j + 1] === '्') {
//                 bag1 += "x45" //+ " "    // म्
//                 j++
//               } else if (final[j] === 'य' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66xB8" //+ " "
//                 j += 2
//               } else if (final[j] === 'य' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x3Bx7A" //+ " "
//                 j += 2
//               } else if (final[j] === 'य' && final[j + 1] === '्') {
//                 bag1 += "xB8" //+ " "   //  य्
//                 j++
//               } else if (final[j] === 'य' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x3Bx7A" //+ " "
//                 j += 2
//               } else if (final[j] === 'र' && final[j + 1] === 'ु') {
//                 bag1 += "x23" //+ " "    //  रु
//                 j++
//               } else if (final[j] === 'र' && final[j + 1] === 'ू') {
//                 bag1 += "x3A" //+ " "    //  रू
//                 j++
//               } else if (final[j] === 'ल' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66x59" //+ " "
//                 j += 2
//               } else if (final[j] === 'ल' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x79x7A" //+ " "
//                 j += 2
//               } else if (final[j] === 'ल' && final[j + 1] === '्') {
//                 bag1 += "x59" //+ " "    // ल्
//                 j++
//               } else if (final[j] === 'व' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66x4F" //+ " "
//                 j += 2
//               } else if (final[j] === 'व' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x6Fx7A" //+ " "
//                 j += 2
//               } else if (final[j] === 'व' && final[j + 1] === '्') {
//                 bag1 += "x4F" //+ " "    //  व्
//                 j++
//               } else if (final[j] === 'श' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66x27" //+ " "
//                 j += 2
//               } else if (final[j] === 'श' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x4A" //+ " "    // श्र
//                 j += 2
//               } else if (final[j] === 'श' && final[j + 1] === '्') {
//                 bag1 += "x27"//+ " "     //  श्
//                 j++
//               } else if (final[j] === 'ष' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66x22" //+ " "
//                 j += 2
//               } else if (final[j] === 'ष' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x22x6Bx7A" //+ " "
//                 j += 2
//               } else if (final[j] === 'ष' && final[j + 1] === '्') {
//                 bag1 += "x22" //+ " "   // ष्
//                 j++
//               } else if (final[j] === 'स' && final[j + 1] === '्' && final[j + 2] === 'ि') {
//                 bag1 += "x66x4C" //+ " "
//                 j += 2
//               } else if (final[j] === 'स' && final[j + 1] === '्' && final[j + 2] === 'र') {
//                 bag1 += "x6Cx7A" //+ " "    // 
//                 j += 2
//               } else if (final[j] === 'ह' && final[j + 1] === '्' && final[j + 2] === 'म') {
//                 bag1 += "xE3" //+ " "    //  ह्म
//                 j += 2
//               } else if (final[j] === 'ह' && final[j + 1] === '्' && final[j + 2] === 'न') {
//                 bag1 += "xE0" //+ " "    //  ह्न
//                 j += 2
//               } else if (final[j] === 'स' && final[j + 1] === '्') {
//                 bag1 += "x4C" //+ " "   //  स्
//                 j++
//               } else if (final[j] === 'र' && final[j + 1] === '्') {
//                 bag1 += "x5A" //+ " "   // र् 
//                 j++
//               }
//               else {
//                 bag1 += obj[final[j]] //+ " "
                        
//               }
//             }
//             // console.log(bag1)
//             return bag1
//             // console.log(bag1)
//           }
//           getvalues5(final)
//       }
//       else if (key === 'Hindi_Devnagri') {
//         const output3 = []
//         const output4 = []
//         const hindi_text2 = data[key].trim();
//         const hex2 = [...hindi_text2.split('')];
//         // const hex2 = [...data[key].split('')]
//           // const hex2 = [...jsonData[i][key].split('')]
//           // console.log(hex2)
//           // output4.push(jsonData[i][key])
//           // let keys = "कलर बख गक्रज"
//         // const hex2 = [...keys.split('')]
//         // console.log(hex2)
//           for (let i = 0; i < hex2.length; i++) {
//             if (hex2[i] === ' ' && hex2[i + 1] === 'ज' && hex2[i + 2] === 'ं' && hex2[i + 3] === 'क' && hex2[i + 4] === '्' && hex2[i + 5] === 'श' && hex2[i + 6] === 'न' && hex2[i + 7] === ' ') {
//               output3.push(' जंः') // जं़
//                 output4.push(' जंः') //////exception for hindi output3.
//               i += 7
//             }else if (hex2[0] === " ") {
//               output3.push(hex2[i + 1])
//               output4.push(hex2[i + 1])
              
//             }
//               else if (hex2[i] === "-") {
//               output3.push("")
//               output4.push("")
              
//             }
//             else if (hex2[i] === ' ' && hex2[i + 1] === 'ज' && hex2[i + 2] === 'ं' && hex2[i + 3] === 'क'
//               && hex2[i + 4] === '्' && hex2[i + 5] === 'श' && hex2[i + 6] === 'न') {
//               output3.push(' जंः') // जं़
//                 output4.push(' जंः') //////exception for hindi output3.
//               i += 7
//             } else if (hex2[i] === ' ' && hex2[i + 1] === 'ज' && hex2[i + 2] === 'ं' && hex2[i + 3] === ' ') {
//               output3.push(' जंः') // जं़
//                 output4.push(' जंः')//////exception for hindi output3.
//               i += 3       //one extra line delete for if bymistake we add . then we remove one extra
//             } else if (hex2[i] === ' ' && hex2[i + 1] === 'ज' && hex2[i + 2] === 'ं') {
//               output3.push(' जंः') // जं़
//                 output4.push(' जंः')//////exception for hindi output3.
//               i += 3       //one extra line delete for if bymistake we add . then we remove one extra
//             }
//             // else if (hex2[i] === 'र' && hex2[i + 1] === '्') {
//             //   output3.push(hex2[i + 2] + hex2[i] + hex2[i + 1])
//             //   output4.push(hex2[i + 2] + hex2[i] + hex2[i + 1])
//             //   i += 2;
//             // }
//             // else if (hex2[i] === 'र' && hex2[i + 1] === '्') {
//             //   output3.push(hex2[i + 2] + hex2[i] + hex2[i + 1])
//             //   output4.push(hex2[i] + hex2[i+1] + hex2[i + 2])  //////exception for hindi output.
//             //   i += 2;
//             // }
//             else if (hex2[i] === 'स' && hex2[i + 1] === 'ु' && hex2[i + 2] === 'प' && hex2[i + 3] === 'र' && hex2[i + 4] === 'फ'
//             && hex2[i + 5] === 'ा' && hex2[i + 6] === 'स' && hex2[i + 7] === '्' && hex2[i + 8] === 'ट'&& hex2[i + 9] === ' ') {
//               output3.push('एस एफ ')
//               output4.push('एस एफ ')  //////exception for hindi output.
//               i += 9;
//             }
//             else if (hex2[i] === 'स' && hex2[i + 1] === 'ु' && hex2[i + 2] === 'प' && hex2[i + 3] === 'र' && hex2[i + 4] === 'फ'
//             && hex2[i + 5] === 'ा' && hex2[i + 6] === 'स' && hex2[i + 7] === '्' && hex2[i + 8] === 'ट') {
//               output3.push(' एस एफ ')
//               output4.push(' एस एफ ')  //////exception for hindi output.
//               i += 8;
//             }
//             else {
//               output3.push(hex2[i])
//               output4.push(hex2[i])
//             }
//           }
//           aman4 = output4.join('')
//         aman3 = output3.join('')
//            // this data are show in xml file 
//           const final2 = [...aman3.split('')]
//           // console.log(final2)       /// this data we show some correction
//           function getvalues6(final2) {
//             for (let j = 0; j < final2.length; j++) {
//               if (final2[j] === 'स' && final2[j + 1] === '्' && final2[j + 2] === 'त' && final2[j + 3] === '्' && final2[j + 4] === 'र') {
//                 bag4 += "xF3"   // स्त्र
//                 j += 4
//               } else if (final2[0] === ' ') {
//                 bag4 += obj3[final2[0]]
//                 continue;
//               }
//               else {
//                 bag4 += obj3[final2[j]] //+ " "
                        
//               }
//             }
//             return bag4
//           }
//           getvalues6(final2)

//       }
//       else { }
//       }
//       newData.push({'No.': `${count}`,'English_Hex_CODE': `${chars}`,'English': `${chars2}` ,  'Hindi_HEX_CODE': `${bag1}`, 'Hindi': `${aman2}` , 'Hindi_UNICODE': `${bag4}`, 'Hindi_Devnagri': `${aman4}` });
//     }
// //////////////////////////find distance between two x y z    co-ordinate //////////////////////////////////////////////// 
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
//     const xData = jsonData.map((key) => key.X);                                                                   ///////
//     const yData = jsonData.map((key) => key.Y);                                                                   ///////
//     const zData = jsonData.map((key) => key.Z);                                                                   ///////
//     let distances = [];                                                                                           ///////
//     let bag = ""                                                                                                  /////// 
//     let X1 = ""                                                                                                   ///////
//     let X2 = ""                                                                                                   ///////
//     let Y1 = ""                                                                                                   ///////
//     let Y2 = ""                                                                                                   ///////
//     let Z1 = ""                                                                                                   ///////
//     let Z2 = ""                                                                                                   ///////
//     let distance = ""                                                                                             ///////
//     function calculateDistance(x1, y1, z1, x2, y2, z2) {                                                          ///////
//       return Math.round(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2)));           ///////
//     }                                                                                                             ///////
//     for (let i = 0; i < xData.length - 1; i++) {                                                                  ///////
//       X1 = xData[i];                                                                                              ///////
//       X2 = xData[i + 1];                                                                                          ///////
//       Y1 = yData[i];                                                                                              ///////
//       Y2 = yData[i + 1];                                                                                          ///////
//       Z1 = zData[i];                                                                                              ///////
//       Z2 = zData[i + 1];                                                                                          ///////
//       distance = calculateDistance(X1, Y1, Z1, X2, Y2, Z2);                                                       ///////
//       // distances.push([distance+"  m."]);                                                                       ///////
//       // distances.push([distance + "  m."]);                                                                     ///////
//       distances.push({ 'X': `${X1}`, 'Y': `${Y1}`, 'Z': `${Z1}`, '  ': ` `, 'calculator': `${distance} m.` });    ///////
//       // newData.push({ 'No11.': `${[distance]}`, })                                                              ///////
//     }                                                                                                             ///////
//     // console.log(distances)                                                                                     ///////
//     const newWorksheet = xlsx.utils.json_to_sheet(distances);                                                     ///////
//     // const newWorksheet = xlsx.utils.json_to_sheet([['Calculator'], ...distances], { skipHeader: true });       ///////
//     xlsx.utils.book_append_sheet(workbook, newWorksheet, 'Distances', true);                                      ///////
//     const outputFilePath = path.join(__dirname, filePath.replace('uploads/', ''));                                ///////
//                                                                                                                   ///////
//     xlsx.writeFile(workbook, outputFilePath);                                                                     ///////
//     // res.download(outputFilePath, 'English_Hindi_Hex.xlsx', () => {                                             ///////
//     // });                                                                                                        ///////
//     // xlsx.writeFile(workbook, 'C:\\Users\\PTCS\\Downloads\\English_Hindi_Hex.xlsx');                            ///////
//     console.log('Distances added to the Excel sheet successfully!');                                              ///////
//                                                                                                                   ///////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // const newSheet = xlsx.utils.json_to_sheet(newData); // Convert the newData array to a new sheet            ///////
//     // xlsx.utils.book_append_sheet(workbook, newSheet, 'English_Hindi',true); // Add the new sheet to the workbook//////
//     // xlsx.writeFile(workbook, 'C:\\Users\\PTCS\\Downloads\\English_Hindi_Hex.xlsx');                            ///////
//     // console.log('New Excel file created successfully at:');                                                    ///////
//     // res.send('New Excel file created successfull.');                                                           ///////
//     //                                                                                                            ///////
//                                                                                                                   ///////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   const newSheet = xlsx.utils.json_to_sheet(newData);                                                             ///////
//   xlsx.utils.book_append_sheet(workbook, newSheet, 'English_Hindi', true);                                        ///////
//   const outputFilePath2 = path.join(__dirname, filePath.replace('uploads/', ''));                                 ///////
//   xlsx.writeFile(workbook, outputFilePath2);                                                                      ///////
//   res.download(outputFilePath2, 'English_Hindi_Hex.xlsx', () => {                                                 ///////
//   });                                                                                                             ///////            
// }                                                                                                                 ///////
//   catch (error) {                                                                                                 ///////
//     console.error(error);                                                                                         ///////
//     res.status(500).send('Internal server error'+ error.message);                                                                ///////
//   }                                                                                                               ///////
// });                                                                                                               ///////
// app.listen(port2, () => {                                                                                         ///////
//   console.log(`Server is running on http://localhost:${port2}`);                                                  ///////
// });                                                                                                               ///////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////













// var obj = {                                                                                                      ///////
//   // "$":"##",
//   अ: "x76",// "a",                                                                                               ///////
//   आ: "x76x6B",// "aa",                                                                                          ///////
//   ऑ:"x76x6Bx57",                                                                                                ///////
//     इ: "x62",// "i",                                                                                            ///////
//     ई: "xC3",// "ee",                                                                                           ///////
//     उ: "x6D",// "u",                                                                                            ///////
//     ऊ: "xC5",//"oo",                                                                                            ///////
//     ऋ: "x5F",// "ri",                                                                                           ///////
//     ए: "x2C",//"e",                                                                                             ///////
//     ऐ: "x2Cx73",// "ai",                                                                                        ///////
//     ओ: "x76xA8",// "o",                                                                                        ///////
//     औ: "x76xA9",// "au",                                                                                       ///////
//     क: "x64",// "ka",                                                                                           ///////
//     ख: "x5Bx6B"  ,// "kha",                                                                                     ///////
//     ग: "x78",// "ga",                                                                                           ///////
//     ग़: "x78x2B"  ,// "ga",                                                                                      ///////
//     घ: "xC4"  ,// "gha",                                                                                        ///////
//     ङ: "xB3",// "nga",                                                                                          ///////
//     ड़: "x4Dx2B"  ,// "nga",                                                                                     ///////
//     च: "x70"  ,// "cha",                                                                                        ///////
//     छ: "x4E"  ,// "chha",                                                                                       ///////
//     ज: "x74",// "ja",                                                                                           ///////
//     'ज़': "x74",// "ja",                                                                                         ///////
//     झ: "x3E"  ,// "jha",                                                                                        ///////
//     ञ: "xA5"  ,// "nya",                                                                                        ///////
//     ट: "x56"  ,// "ta",                                                                                         ///////
//   ठ: "x42",// "tha",
//   ड़: "x4Dx2B"  ,// "da",///////
//     ड: "x4D",// "da",                                                                                           ///////
//                                                                                          ///////
//     ढ: "x3C",// "dha",                                                                                          ///////
//     ढ़: "x3Cx2B"  ,// "dha",                                                                                     ///////
//     ण: "x2Ex6B"  ,// "na",                                                                                      ///////
//     त: "x72"  ,// "ta",                                                                                         ///////
//     थ: "x46x6B"  ,// "tha",                                                                                     ///////
//     द: "x6E"  ,// "da",                                                                                         ///////
//     ध: "x2Fx6B"  ,// "dha",                                                                                     ///////
//     न: "x75"  ,// "na",                                                                                         ///////
//     प: "x69"  ,// "pa",                                                                                         ///////
//     फ: "x51",// "pha",                                                                                         ///////
//   फ्र: "xDD",// "pha", 
//   फ़: "x51",///////
//     ब: "x63"  ,// "ba",                                                                                        ///////
//     भ: "x48x6B"  ,// "bha",                                                                                    ///////
//     म: "x65"  ,// "ma",                                                                                        ///////
//     य: "x3B",// "ya",                                                                                          ///////
//     र: "x6A"  ,// "ra",                                                                                        ///////
//     र: "x6A"  ,// "ra",                                                                                        ///////
//     र: "x6A"  ,// "ra",                                                                                        ///////
//     ल: "x79"  ,// "la",                                                                                        ///////
//     व: "x6F"  ,// "va",                                                                                        ///////
//     श: "x27x6B"  ,// "sha",                                                                                    ///////
//     ष: "x22x6B"  ,// "sha",                                                                                    ///////
//     स: "x6C"  ,// "sa",                                                                                        ///////
//     ह: "x67"  ,// "ha",                                                                                        ///////
//     क्ष: "x7Bx6B"  ,// "ksha",                                                                                   ///////
//     त्र: "x3D"  ,// "tra",                                                                                       ///////
//     ज्ञ: "x4B"  ,// "jnya",                                                                                      ///////
//     स्: "x6Cx5A"  ,// "",                                                                                       ///////
//   ल्: "x79x5A",// "",  
//   ल: "x79",///////
//   ",": "x5D",
//     ल्: "x79x5A",// "",                                                                                         ///////
//     'ा': "x6B",// "x6B",                                                                                        ///////
//     'ॉ': "x6Bx57",                                                                                              ///////
//     'ि': "x66",// "x66",                                                                                        ///////
//     'िं': "xC7",                                                                                                 ///////
//     'ी': "x68",                                                                                                 ///////
//     'ु': "x71",                                                                                                  ///////
//     'ू': "x77",                                                                                                  ///////
//     'ृ': "x60",// "x60",                                                                                         ///////
//     '्': "x7E"  ,// "x7E",                                                                                       ///////
//     'े': "x73"  ,// "x73",                                                                                       ///////
//     // 'े': "xA2",// "xA2",                                                                                      ///////
//     'ै': "x53",// "x53",                                                                                         ///////
//     'ो': "xA8",// "xA8",                                                                                         ///////
//     'ौ': "xA9",// "xA9",                                                                                         ///////
//     ' ': "x20",                                                                                                  ///////
//     'ं': "x61",                                                                                                   ///////
//     '्': "x7E",                                                                                                   ///////
//     '़': "x2B",                                                                                                   ///////
//     'ॅ': "x57",                                                                                                   ///////
//     'ँ': "xA1",                                                                                                   ///////
//     '{': "xBF",                                                                                                  ///////
//     '}': "xF8",                                                                                                  ///////
//     '=': "xBE",                                                                                                  ///////
//     '!': "x21",                                                                                                  ///////
//     '+': "x24",                                                                                                  ///////
//     '÷': "xBB",                                                                                                  ///////
//     'ः': "x25",                                                                                                  ///////
//     '-': "x26",                                                                                                  ///////
//     ';': "x28",                                                                                                  ///////
//     '(': "xBC",                                                                                                  ///////
//     '⦁': "xDB",                                                                                                  ///////
//     '∘': "xF1",                                                                                                  ///////
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
//     '/': "x40",                                                                                                  ///////
//     '|': "x41",                                                                                                  ///////
//     'ळ': "x47",                                                                                                  ///////
//     'ऽ': "xB7",                                                                                                  ///////
//     '8': "x39",                                                                                                  ///////
//     "०": "xE5",// "0",                                                                                           ///////
//     "१": "x31"  ,// "1",                                                                                         ///////
//     "२": "x201E"  ,// "2",                                                                                       ///////
//     "३": "x2026"  ,// "3",                                                                                       ///////
//     "४": "x2020"  ,// "4",                                                                                       ///////
//     "५": ""  ,// "5",                                                                                            ///////
//     "६": "x2C6"  ,// "6",                                                                                        ///////
//     "७": "x2030"  ,// "7",                                                                                       ///////
//     "८": "x160"  ,// "8",                                                                                        ///////
//     "९": "x2039",// "9",                                                                                         ///////
//     'रर्': "x6Bx5A"  ,// "9",                                                                                     ///////
// };  


// var obj3 = { 
//   ":":"x20",
//   ",":",",
//   "$":"##",                                                                                                ///////
//   0: "##",
//   a: "#",
//   b: "#",
//   c: "#",
//   d:  "#",
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
//     ष: "xB7"  ,// "sha",                                                                                    ///////
//   स: "xB8",// "sa",
//     ह: "xB9"  ,// "ha",                                                                                        ///////
//     क्ष: "x95xCDxB7"  ,// "ksha",                                                                                   ///////
//   त्र: "xA4xCDxB1",// "tra",
//   ज्ञ: "x9CxCDx9E",// "jnya",
//     स्: "xB8xCD",// "",                                                                                       ///////
//   ल्: "xB2xCD",// "",
//   ल:"xB2",
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
//   '.': "x83"
// ///////////////////  new data 
//                                                                                                    ///////                                                                                                 ///////                                                                                    ///////
// }; 