// const XLSX = require('xlsx');

// function geoToCartesion(latitude, longitude, altitude) {
//   const a = 6378137.0;
//   const b = 6356752.314140371;

//   // Ensure latitude, longitude, and altitude are defined and then convert to strings
//   const latitudeStr = latitude !== undefined ? (typeof latitude === 'string' ? latitude : latitude.toString()) : '';
//   const longitudeStr = longitude !== undefined ? (typeof longitude === 'string' ? longitude : longitude.toString()) : '';
//   const altitudeStr = altitude !== undefined ? (typeof altitude === 'string' ? altitude : altitude.toString()) : '';

//   // Remove non-numeric and non-decimal characters from latitude, longitude, and altitude
//   const cleanLatitude = parseFloat(latitudeStr.replace(/[^0-9.-]/g, ''));
//   const cleanLongitude = parseFloat(longitudeStr.replace(/[^0-9.-]/g, ''));
//   const cleanAltitude = parseFloat(altitudeStr.replace(/[^0-9.-]/g, ''));

//   // Check if the cleaned values are valid numbers
//   if (isNaN(cleanLatitude) || isNaN(cleanLongitude) || isNaN(cleanAltitude)) {
//     console.error('Invalid data in the Excel sheet. Latitude, longitude, and altitude must be valid numeric values.');
//     return null;
//   }

//   const latrad = (cleanLatitude * (Math.PI / 180));
//   const longrad = (cleanLongitude * (Math.PI / 180));

//   const s = Math.sin(latrad);
//   const N = a / Math.sqrt(1 - (1 - (b / a) ** 2) * (Math.sin(latrad)) ** 2);

//   const x = Math.floor((N + cleanAltitude) * Math.cos(latrad) * Math.cos(longrad));
//   const y = Math.floor((N + cleanAltitude) * Math.cos(latrad) * Math.sin(longrad));
//   const z = Math.floor((((b / a) ** 2) * N + cleanAltitude) * Math.sin(latrad));

//   return { x, y, z };
// }

// // Assuming you have an Excel file named 'FINAL_MASTER.xlsx' with columns 'Latitude', 'Longitude', and 'Altitude_M'
// const workbook = XLSX.readFile('FINAL_MASTER.xlsx');
// const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
// const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

// const updatedData = data.map((row) => {
//   const cartesianCoordinates = geoToCartesion(row.Latitude, row.Longitude, row.Altitude_M);
//   return cartesianCoordinates ? { ...row, ...cartesianCoordinates } : null;
// });

// // Check for errors and filter out null values
// const validData = updatedData.filter((row) => row !== null);

// const updatedWorksheet = XLSX.utils.json_to_sheet(validData);

// const updatedWorkbook = XLSX.utils.book_new();
// XLSX.utils.book_append_sheet(updatedWorkbook, updatedWorksheet, 'UpdatedData1');

// XLSX.writeFile(updatedWorkbook, 'data2.xlsx');
// console.log('Cartesian coordinates');

// // Assuming the data array contains objects with 'Latitude', 'Longitude', and 'Altitude_M' properties
// validData.forEach((row) => {
//   const cartesianCoordinates = geoToCartesion(row.Latitude, row.Longitude, row.Altitude_M);
//   console.log(cartesianCoordinates);
// });

















// const XLSX = require('xlsx');

// function geoToCartesion(latitude, longitude, altitude) {
//     const a = 6378137.0;
//     const b = 6356752.314140371;

    

//   const latrad = (latitude * (Math.PI / 180));
//   const longrad = (longitude * (Math.PI / 180));

//   const s = Math.sin(latrad);
//   const N = a / Math.sqrt(1 - (1 - (b / a) ** 2) * (Math.sin(latrad)) ** 2);

//   const x = Math.abs(Math.floor((N + altitude) * Math.cos(latrad) * Math.cos(longrad)));
//   const y = Math.abs(Math.floor((N + altitude) * Math.cos(latrad) * Math.sin(longrad)));
//   const z = Math.abs(Math.floor((((b / a) ** 2) * N + altitude) * Math.sin(latrad)));
    
//     console.log(latitude, longitude, altitude)
//       console.log(typeof latitude,typeof longitude,typeof altitude)
//   return { x, y, z };
  
// }

// // Assuming you have an Excel file named 'data.xlsx' with columns 'latitude', 'longitude', and 'altitude'
// const workbook = XLSX.readFile('FINAL_MASTER.xlsx');
// const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
// const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);


// const updAtedData = data.map((row) => {

//     const latitude1 = parseFloat(row.Latitude.replace(/\s/g, ''));
//     const longitude1 = parseFloat(row.Longitude.replace(/\s/g, ''));
//      const altitude1 = parseFloat(row.Altitude_M.replace(/\s/g, ''));

//     const cartesianCoordinates = geoToCartesion(latitude1,longitude1,altitude1)
//     // const cartesianCoordinates = geoToCartesion(row.Latitude, row.Longitude, row.Altitude_M);
//     return { ...row, ...cartesianCoordinates }
// });

// const updatedWorksheet = XLSX.utils.json_to_sheet(updAtedData);

// const updatedworkbook = XLSX.utils.book_new();
// XLSX.utils.book_append_sheet(updatedworkbook, updatedWorksheet, "UpdatedData1")

// // XLSX.writeFile(updatedworkbook, "data2.xlsx")
//  console.log("cartesianCoordinates");

// // Assuming the data array contains objects with 'latitude', 'longitude', and 'altitude' properties
// data.forEach((row) => {
//     const cartesianCoordinates = geoToCartesion(row.Latitude, row.Longitude, row.Altitude_M);
//     // console.log(cartesianCoordinates);
// });





///////////////////////////////////////////////////////////////////////////////////////////////


// const XLSX = require('xlsx');

// function geoToCartesion(latitude, longitude, altitude) {
//   const a = 6378137.0;
//   const b = 6356752.314140371;

//   const latrad = latitude * (Math.PI / 180);
//   const longrad = longitude * (Math.PI / 180);

//   const s = Math.sin(latrad);
//   const N = a / Math.sqrt(1 - (1 - (b / a) ** 2) * Math.sin(latrad) ** 2);

//   const x = Math.floor((N + altitude) * Math.cos(latrad) * Math.cos(longrad));
//   const y = Math.floor((N + altitude) * Math.cos(latrad) * Math.sin(longrad));
//   const z = Math.floor((((b / a) ** 2) * N + altitude) * Math.sin(latrad));

//   return { x, y, z };
// }

// // Assuming you have an Excel file named 'data.xlsx' with columns 'latitude', 'longitude', and 'altitude'
// const workbook = XLSX.readFile('FINAL_MASTER.xlsx');
// const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
// const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

// // Assuming the data array contains objects with 'latitude', 'longitude', and 'altitude' properties
// data.forEach((row) => {
//   const cartesianCoordinates = geoToCartesion(row.Latitude, row.Longitude, row.Altitude_M);
//   console.log(cartesianCoordinates);
// });







////////////////////////////////////////////////////////////////////////////////


// function geoToCartesion(latitude, longitude, altitude) {
//   const a = 6378137.0;
  // const b = 6356752.314245; 
//   const b = 6356752.314140371; 
  
//   const latrad = latitude * (Math.PI / 180);
//   const longrad = longitude * (Math.PI / 180);
    
//   var s = Math.sin(latrad)
//   var N = a/Math.sqrt(1-(1-(b/a)**2)*(Math.sin(latrad))**2)
    
//   const x = (N + altitude) * Math.cos(latrad) * Math.cos(longrad);
//   const y = (N + altitude) * Math.cos(latrad) * Math.sin(longrad);
//   const z = (((b/a)**2) * N + altitude) * Math.sin(latrad);

//   return { x, y, z };
// }

// const latitude =  22.7989314636394;
// const longitude = 73.2555883306155  ;
// const altitude =  55  ;

// const cartesianCordinates = geoToCartesion(latitude, longitude, altitude)
// console.log(cartesianCordinates)














// function geoToCartesion(latitude, longitude, altitude) {
//   const a = 6378137.0;
//   // const b = 6356752.314245; 
//   const b = 6356752.314140371; 
  
//   const latrad = latitude * (Math.PI / 180);
//   const longrad = longitude * (Math.PI / 180);
    
//   var s = Math.sin(latrad)
//   var N = a/Math.sqrt(1-(1-(b/a)**2)*(Math.sin(latrad))**2)
    
//   const x = (N + altitude) * Math.cos(latrad) * Math.cos(longrad);
//   const y = (N + altitude) * Math.cos(latrad) * Math.sin(longrad);
//   const z = (((b/a)**2) * N + altitude) * Math.sin(latrad);
  
//   console.log("N => " + N)
//   console.log("S => " + s)
//   console.log("cos_long => "+Math.cos(longrad))
//   console.log("cos_lat => " + Math.cos(latrad))
//   console.log("sin_lat => " + Math.sin(latrad))
//   console.log("sin_long => " + Math.sin(longrad))
//   return { x, y, z };
// }

// const latitude =  23.2127536112785;
// const longitude = 88.3537221473268  ;
// const altitude =  12  ;

// const cartesianCordinates = geoToCartesion(latitude, longitude, altitude)
// console.log(cartesianCordinates)








































// function geoToCartesion(latitude, longitude, altitude) {
//     const a = 6378137.0;
//       const b = 6356752.314245; 
//       const latrad = latitude * (Math.PI / 180);

//     const longrad = longitude * (Math.PI * 180);
  
//     const f = (a - b) / a;           // Ellipsoid Flatness
//     const  f_inv = 1.0 / f;       // Inverse flattening
//     const  a_sq = a * a;
//     const  b_sq = b * b;
//     const  e_sq = f * (2 - f);
    
//   var s = Math.sin(latrad)
//   //  var N = a / Math.sqrt(1 - e_sq * s * s);
//   var N = a/Math.sqrt(1-(1-(b/a)**2)*(Math.sin(latrad))**2)
    
//     const x = (N + altitude) * Math.cos(latrad) * Math.cos(longrad);
//     const y = (N + altitude) * Math.cos(latrad) * Math.sin(longrad);
//   const z = ((b ** 2 / a ** 2) * N + altitude) * Math.sin(latrad);
  
//   console.log("N => " + N)
//   console.log("S => " + s)
//   console.log("cos_long => "+Math.cos(longrad))
//   console.log("cos_lat => " + Math.cos(latrad))
//   console.log("sin_lat => " + Math.sin(latrad))
//    console.log("sin_long => "+Math.sin(longrad))
//     return { x, y, z };
// }

// const latitude =  26.4290227  ;
// const longitude = 82.5404858837144  ;
// const altitude =  92  ;


// const cartesianCordinates = geoToCartesion(latitude, longitude, altitude)

// console.log(cartesianCordinates)
