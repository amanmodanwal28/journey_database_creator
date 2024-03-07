const XLSX = require('xlsx');

function safelyConvertToNumber(value) {
    if (typeof value === 'string') {
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

function geoToCartesion(latitude, longitude, altitude) {
    const a = 6378137.0;
    const b = 6356752.314140371;

    const latrad = (latitude * (Math.PI / 180));
    const longrad = (longitude * (Math.PI / 180));

    const s = Math.sin(latrad);
    const N = a / Math.sqrt(1 - (1 - (b / a) ** 2) * (Math.sin(latrad)) ** 2);

    const x = Math.abs(Math.floor((N + altitude) * Math.cos(latrad) * Math.cos(longrad)));
    const y = Math.abs(Math.floor((N + altitude) * Math.cos(latrad) * Math.sin(longrad)));
    const z = Math.abs(Math.floor((((b / a) ** 2) * N + altitude) * Math.sin(latrad)));

    console.log(latitude, longitude, altitude);
    console.log(typeof latitude, typeof longitude, typeof altitude);
    return { x, y, z };
}

// Assuming you have an Excel file named 'data.xlsx' with columns 'latitude', 'longitude', and 'altitude'
const workbook = XLSX.readFile('FINAL_MASTER.xlsx');
const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

const updatedData = data.map((row) => {
    // Use the custom conversion function for each column
    const latitude = safelyConvertToNumber(row.Latitude);
    const longitude = safelyConvertToNumber(row.Longitude);
    const altitude = safelyConvertToNumber(row.Altitude_M);

    console.log(latitude)
    const cartesianCoordinates = geoToCartesion(latitude, longitude, altitude);
    return { ...row, ...cartesianCoordinates };
});

const updatedWorksheet = XLSX.utils.json_to_sheet(updatedData, { header: Object.keys(updatedData[0]), skipHeader: true });

// Set column widths
const colWidths = [{ wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 15 }]; // Example widths
updatedWorksheet['!cols'] = colWidths;

const updatedWorkbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(updatedWorkbook, updatedWorksheet, "UpdatedData1");

// Specify Excel file type
XLSX.writeFile(updatedWorkbook, "data2.xlsx", { bookType: 'xlsx' });

console.log("cartesianCoordinates");










// const XLSX = require('xlsx');

// function safelyConvertToNumber(value) {
//     if (typeof value === 'string') {
//         // Remove spaces and attempt to convert to a number
//         const numericValue = parseFloat(value.replace(/\s/g, ''));
//         // Check if the conversion is successful
//         if (!isNaN(numericValue)) {
//             return numericValue;
//         }
//     }
//     // Return the original value if it couldn't be converted
//     return value;
// }

// function geoToCartesion(latitude, longitude, altitude) {
//     const a = 6378137.0;
//     const b = 6356752.314140371;

//     const latrad = (latitude * (Math.PI / 180));
//     const longrad = (longitude * (Math.PI / 180));
//     const s = Math.sin(latrad);
//     const N = a / Math.sqrt(1 - (1 - (b / a) ** 2) * (Math.sin(latrad)) ** 2);

//     const x = Math.abs(Math.floor((N + altitude) * Math.cos(latrad) * Math.cos(longrad)));
//     const y = Math.abs(Math.floor((N + altitude) * Math.cos(latrad) * Math.sin(longrad)));
//     const z = Math.abs(Math.floor((((b / a) ** 2) * N + altitude) * Math.sin(latrad)));

//     console.log(latitude, longitude, altitude);
//     console.log(typeof latitude, typeof longitude, typeof altitude);
//     return { x, y, z };
// }

// // Assuming you have an Excel file named 'data.xlsx' with columns 'latitude', 'longitude', and 'altitude'
// const workbook = XLSX.readFile('FINAL_MASTER.xlsx');
// const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
// const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

// const updatedData = data.map((row) => {
//     // Use the custom conversion function for each column
//     const latitude = safelyConvertToNumber(row.Latitude);
//     const longitude = safelyConvertToNumber(row.Longitude);
//     const altitude = safelyConvertToNumber(row.Altitude_M);

//     const cartesianCoordinates = geoToCartesion(latitude, longitude, altitude);
//     return { ...row, ...cartesianCoordinates };
// });

// const updatedWorksheet = XLSX.utils.json_to_sheet(updatedData);

// const updatedWorkbook = XLSX.utils.book_new();
// XLSX.utils.book_append_sheet(updatedWorkbook, updatedWorksheet, "UpdatedData1");

// XLSX.writeFile(updatedWorkbook, "data2.xlsx")
// console.log("cartesianCoordinates");

// // Assuming the data array contains objects with 'latitude', 'longitude', and 'altitude' properties
// // data.forEach((row) => {
// //     const cartesianCoordinates = geoToCartesion(row.Latitude, row.Longitude, row.Altitude_M);
// //     // console.log(cartesianCoordinates);
// // });










// const XLSX = require('xlsx');

// function geoToCartesion(latitude, longitude, altitude) {
//     const a = 6378137.0;
//     const b = 6356752.314140371;

//     const latrad = (latitude * (Math.PI / 180));
//     const longrad = (longitude * (Math.PI / 180));

//     const s = Math.sin(latrad);
//     const N = a / Math.sqrt(1 - (1 - (b / a) ** 2) * (Math.sin(latrad)) ** 2);

//     const x = Math.abs(Math.floor((N + altitude) * Math.cos(latrad) * Math.cos(longrad)));
//     const y = Math.abs(Math.floor((N + altitude) * Math.cos(latrad) * Math.sin(longrad)));
//     const z = Math.abs(Math.floor((((b / a) ** 2) * N + altitude) * Math.sin(latrad)));

//     console.log(latitude, longitude, altitude);
//     console.log(typeof latitude, typeof longitude, typeof altitude);
//     return { x, y, z };
// }

// // Assuming you have an Excel file named 'data.xlsx' with columns 'latitude', 'longitude', and 'altitude'
// const workbook = XLSX.readFile('FINAL_MASTER.xlsx');
// const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
// const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

// const updatedData = data.map((row) => {
//     // Check if the values are strings before using replace
//     // const latitude = typeof row.Latitude === 'string' ? parseFloat(row.Latitude.replace(/\s/g, '')) : row.Latitude;
//     // const longitude = typeof row.Longitude === 'string' ? parseFloat(row.Longitude.replace(/\s/g, '')) : row.Longitude;
//     // const altitude = typeof row.Altitude_M === 'string' ? parseFloat(row.Altitude_M.replace(/\s/g, '')) : row.Altitude_M;

//      const latitude = parseFloat(row.Latitude.replace(/\s/g, ''))
//     const longitude = parseFloat(row.Longitude.replace(/\s/g, '')) 
//     const altitude = parseFloat(row.Altitude_M.replace(/\s/g, ''))

//     const cartesianCoordinates = geoToCartesion(latitude, longitude, altitude);
//     return { ...row, ...cartesianCoordinates };
// });

// const updatedWorksheet = XLSX.utils.json_to_sheet(updatedData);
// const updatedWorkbook = XLSX.utils.book_new();
// XLSX.utils.book_append_sheet(updatedWorkbook, updatedWorksheet, "UpdatedData1");
// XLSX.writeFile(updatedWorkbook, "data2.xlsx")
// console.log("cartesianCoordinates");

// // Assuming the data array contains objects with 'latitude', 'longitude', and 'altitude' properties
// data.forEach((row) => {
//     const cartesianCoordinates = geoToCartesion(row.Latitude, row.Longitude, row.Altitude_M);
//     // console.log(cartesianCoordinates);
// });
