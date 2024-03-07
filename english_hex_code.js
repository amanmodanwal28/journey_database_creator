const xlsx = require('xlsx');
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3001;
const fs = require('fs')
app.use(express.static('public/app_english')); // Serve static files in the 'public' directory
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
app.post('/a', upload.single('file'), (req, res) => {
  const filePath = req.file.path;
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const jsonData = xlsx.utils.sheet_to_json(sheet);
  const newData = [];
  const xData = jsonData.map((key) => key.X);
  console.log(xData)
  for (let data of jsonData) {
    for (let key in data) {
      if (key === 'English') {
        const original_text = data[key].trim();;
        // const chars = [...data[key].toUpperCase()]
        const chars = [...original_text.toUpperCase()]
          .map((letter) => 'x' + letter.charCodeAt(0).toString(16).toUpperCase())
          .join('');
        console.log(chars)
        // newData.push({ ...data, English_Hex_CODE: chars });
            newData.push({ English_Hex_CODE: chars ,xxx: xData});
        // console.log(typeof data[key])
      }
    }
  }

  const newSheet = xlsx.utils.json_to_sheet(newData);
  xlsx.utils.book_append_sheet(workbook, newSheet, 'English_Hex_CODE', true);
  const outputFilePath = path.join(__dirname, filePath.replace('uploads/', ''));
  xlsx.writeFile(workbook, outputFilePath);
  res.download(outputFilePath, 'English_Hex_CODE.xlsx', () => {
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Server is running on http://localhost:${port}`);
});







//////////////////////////////////////////////////////////////////////////////



// const xlsx = require('xlsx');
// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const app = express();
// const port = 3001;

// app.use(express.static('public/app_english')); // Serve static files in the 'public' directory

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// app.post('/a', upload.single('file'), (req, res) => {
//   const filePath = req.file.path;
//   const workbook = xlsx.readFile(filePath);
//   const sheetName = workbook.SheetNames[0];
//   const sheet = workbook.Sheets[sheetName];
//   const jsonData = xlsx.utils.sheet_to_json(sheet);
//   const newData = [];
  
//   for (let data of jsonData) {
//     for (let key in data) {
//       if (key === 'English') {
//         const chars = [...data[key].toUpperCase()]
//           .map((letter) => 'x' + letter.charCodeAt(0).toString(16).toUpperCase())
//           .join('');
//         newData.push({ ...data, English_Hex_CODE: chars });
//       }
//     }
//   }

//   const newSheet = xlsx.utils.json_to_sheet(newData);
//   xlsx.utils.book_append_sheet(workbook, newSheet, 'English_Hex_CODE', true);
//   const outputFilepath = path.join(__dirname, 'uploads', 'English_Hex_CODE.xlsx');
//   xlsx.writeFile(workbook, outputFilepath);
//   console.log('New Excel file created successfully at:', outputFilepath);
//   res.send('New Excel file created successfully.');
// });

// app.get('/download', (req, res) => {
//   const filename = 'English_Hex_CODE.xlsx';
//   const filePath = path.join(__dirname, 'uploads', filename);
//   res.download(filePath, filename);
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
//   console.log(`Server is running on http://localhost:${port}`);
// });



//////////////////////////////////////

// const xlsx = require('xlsx');
// const express = require('express');
// const multer = require('multer');
// const app = express();
// const port = 3001;
// app.use(express.static('public/app_english')); // Serve static files in the 'public' directory
// // app.use(express.urlencoded({ extended: false }));

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// });
// const upload = multer({ storage: storage });
// app.post('/a', upload.single('file'), (req, res) => {
  
//     const filePath = req.file.path;
//     const workbook = xlsx.readFile(filePath);
//     const sheetName = workbook.SheetNames[0];
//     const sheet = workbook.Sheets[sheetName];
//     const jsonData = xlsx.utils.sheet_to_json(sheet);
//   const newData = [];
//   for (let data of jsonData) {
//     for (let key in data) {
//       if (key === 'English') {
//         // console.log(data[key])
//         const chars = [...data[key].toUpperCase()].map(letter => 'x' + letter.charCodeAt(0).toString(16).toUpperCase()).join('');
//         newData.push({ ...data, English_Hex_CODE: chars }); // Add encrypted data to new field 'ENCRYPTED'
//         // console.log(chars)
//       }
//     }
//   }
//     const newSheet = xlsx.utils.json_to_sheet(newData); // Convert the newData array to a new sheet
//     xlsx.utils.book_append_sheet(workbook, newSheet, 'English_Hex_CODE',true); // Add the new sheet to the workbook
//     xlsx.writeFile(workbook, 'C:\\Users\\PTCS\\Downloads\\English_Hex_CODE.xlsx');
//     console.log('New Excel file created successfully at:');
//     res.send('New Excel file created successfull.');
// });
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
//   console.log(`Server is running on http://localhost:${port}`);
// });



///////////////////////////////////////////
// const xlsx = require("xlsx");
// const workbook = xlsx.readFile('C:\\Users\\PTCS\\Desktop\\test\\ENG.xlsx');
// const sheetName = workbook.SheetNames[0];
// const sheetData = workbook.Sheets[sheetName];
// const jsonData = xlsx.utils.sheet_to_json(sheetData);
// jsonData.forEach((row, index) => {
//   const englishValue = row['English'].toUpperCase();
//   const hexadecimalValue = [...englishValue].map(letter => 'x' + letter.charCodeAt(0).toString(16).toUpperCase()).join('');
//   row['English_Hex_CODE_1'] = hexadecimalValue;
// });
// const newSheetData = xlsx.utils.json_to_sheet(jsonData);
// workbook.Sheets[sheetName] = newSheetData;
// xlsx.writeFile(workbook, 'C:\\Users\\PTCS\\Desktop\\test\\ENG_with_hex.xlsx');
// console.log('data transfer')
//////////////////////
///////////////////////////////////////////////////////////////
////////////// file transfer in given excell file path///////////////////
////////////////////////////////////////////////////////////////////////
// const xlsx = require('xlsx');
// const workbook = xlsx.readFile('C:\\Users\\PTCS\\Desktop\\test\\ENG.xlsx');
// const sheetName = workbook.SheetNames[0];
// const sheet = workbook.Sheets[sheetName];
// const jsonData= xlsx.utils.sheet_to_json(sheet);
// const newData = [];
// for (let data of jsonData) {
//     for (let key in data) {
//         if (key === 'English') {
//             const chars = [...data[key].toUpperCase()].map(letter => 'x' + letter.charCodeAt(0).toString(16).toUpperCase()).join('');
//             newData.push({ ...data, English_hex_codes: chars }); // Add encrypted data to new field 'ENCRYPTED'
//         }
//     }
// }
// const newSheet = xlsx.utils.json_to_sheet(newData); // Convert the newData array to a new sheet
// xlsx.utils.book_append_sheet(workbook, newSheet, 'english_hex',true); // Add the new sheet to the workbook
// xlsx.writeFile(workbook, 'C:\\Users\\PTCS\\Desktop\\test\\ENG.xlsx'); // Save the modified workbook to a new file
// console.log('Encrypted data  has been added to the Excel sheet.');





























//////////////comfirm ///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const xlsx = require('xlsx');
// const workbook = xlsx.readFile('C:\\Users\\PTCS\\Desktop\\test\\ENG.xlsx');
// const sheetName = workbook['SheetNames'][0];
// const sheet = workbook.Sheets[sheetName];
// const  jsonData= xlsx.utils.sheet_to_json(sheet)
// const newData = []
// for (let data of jsonData) { 
//     for (let key in data) {
//         // console.log(key)
//         if (key === 'English') {
//             // console.log(data[key].toUpperCase())
//             const chars = [...data[key]].map(letter => 'x' + letter.charCodeAt(0).toString(16).toUpperCase()).join('')
//             console.log(chars)
//         }
//     }
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const xlsx = require('xlsx');
// const workbook = xlsx.readFile('C:\\Users\\PTCS\\Desktop\\test\\ENG.xlsx');
// const sheetName = workbook['SheetNames'][0];
// const sheet = workbook.Sheets[sheetName];
// const  jsonData= xlsx.utils.sheet_to_json(sheet)
// const newData = []
// for (let i = 0; i <= jsonData.length - 1; i++){
//     for (let key in jsonData[i]) {
//         // console.log(jsonData[i][key])
//         if (key === 'English') {
//             // console.log(jsonData[i][key])
//             const chars = [...jsonData[i][key]].map(letter => 'x' + letter.charCodeAt(0).toString(16).toUpperCase()).join('')
//             console.log(chars)
//         }
//     }
// }



// const xlsx = require('xlsx');
// const workbook = xlsx.readFile('C:\\Users\\PTCS\\Desktop\\TOURIST_SPECIAL\\journey station sample.xlsx');
// const sheetName = workbook.SheetNames[1];
// const sheet = workbook.Sheets[sheetName];
// const data = xlsx.utils.sheet_to_json(sheet);
// const newData = [];
// for (let i = 0; i < data.length; i++) {
//     for (let key in data[i]) {
//         let tag = key;
//         let value = data[i][key];
        
//         if (tag === Object.keys(data[i])[1] ) {
//             bag = [...value.toUpperCase()].map(letter => 'x' + letter.charCodeAt(0).toString(16).toUpperCase()).join('');
//             value = bag
//              newData.push({ [key]: bag });

//         }
//     }
// }
// const modifiedSheet = xlsx.utils.json_to_sheet(newData);
// const newWorkbook = xlsx.utils.book_new();
// xlsx.utils.book_append_sheet(newWorkbook, modifiedSheet, sheetName);
// xlsx.writeFile(newWorkbook, 'C:\\Users\\PTCS\\Desktop\\TOURIST_SPECIAL\\journey station sample.xlsx');


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////convert one by one english to hex code letter by ltter in next line////////////////////////
// // const word = 'MAHUVA JN.';
// // for (let i = 0; i < word.length; i++) {
// //   const letter = word.charAt(i);
// //   const asciiValue = letter.charCodeAt(0);
// // //   console.log('The ASCII value of', letter, 'is', asciiValue);
// // }
// // const word1 = 'KOPARGAON';
// // console.log([...word1].map(letter => 'x' + letter.charCodeAt(0).toString(16).toUpperCase()).join(''));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////convert english to hex////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////1/////////////////////////////////////////////////////////////////////////////////////////////////////////
// function convertToHex(value) {
//     let hexValue = "";
//     for (let i = 0; i < value.length; i++) {
//         let hexCode = value.charCodeAt(i).toString(16).toUpperCase();
//         hexValue +="x"+ hexCode ;
//     }
//     return hexValue;
// }
// let englishValue = "     aAHello, World!";
// let hexValue = convertToHex(englishValue.trim());
// console.log(hexValue);
////////convert english to hex////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///2
// let char = "AMAN"
// const chars = [...char].map(letter=>'x'+ letter.charCodeAt(0).toString(16).toUpperCase()).join('')
// console.log(chars)

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////we check map method only
// let char2 = "aman"
// const chars2 = [...char2].map(bag => "x" + bag).join('')
// console.log(chars2)










































































