
const xlsx = require('xlsx');
const express = require('express');
const multer = require('multer');
const app = express();
const port = 3005;
app.use(express.static('public/app_hindi')); // Serve static files in the 'public' directory
// app.use(express.urlencoded({ extended: false }));
// Hindi Vowels (Swar)
const storage = multer.diskStorage({
    destination:  (req, file, cb) =>{
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });
var obj = {
    अ: "x76",// "a",
    आ: "x76x6B",// "aa",
    इ: "x62",// "i",
    ई: "xC3",// "ee",
    उ: "x6D",// "u",
    ऊ: "xC5",//"oo",
    ऋ: "x5F",// "ri",
    ए: "x2C",//"e",
    ऐ: "x2Cx73",// "ai",
    ओ: "x76xA8",// "o",
    औ: "x76xA9",// "au",
    क: "x64",// "ka",
    ख: "x5Bx6B"  ,// "kha",
    ग: "x78",// "ga",
    ग़: "x78x2B"  ,// "ga",
    घ: "xC4"  ,// "gha",
    ङ: "xB3",// "nga",
    ड़: "x4Dx2B"  ,// "nga",
    च: "x70"  ,// "cha",
    छ: "x4E"  ,// "chha",
    ज: "x74",// "ja",
    'ज़': "x47",// "ja",
    झ: "x3E"  ,// "jha",
    ञ: "xA5"  ,// "nya",
    ट: "x56"  ,// "ta",
    ठ: "x42"  ,// "tha",
    ड: "x4D",// "da",
    ड़: "x4Dx2B"  ,// "da",
    ढ: "x3C",// "dha",
    ढ़: "x3Cx2B"  ,// "dha",
    ण: "x2Ex6B"  ,// "na",
    त: "x72"  ,// "ta",
    थ: "x46x6B"  ,// "tha",
    द: "x6E"  ,// "da",
    ध: "x2Fx6B"  ,// "dha",
    न: "x75"  ,// "na",
    प: "x69"  ,// "pa",
    फ: "x51",// "pha",
    फ्र: "xDD"  ,// "pha",
    ब: "x63"  ,// "ba",
    भ: "x48x6B"  ,// "bha",
    म: "x65"  ,// "ma",
    य: "x3B",// "ya",  
    र: "x6A"  ,// "ra",
    ल: "x79"  ,// "la",
    व: "x6F"  ,// "va",
    श: "x27x6B"  ,// "sha",
    ष: "x22x6B"  ,// "sha",
    स: "x6C"  ,// "sa",
    ह: "x67"  ,// "ha",
    क्ष: "x7Bx6B"  ,// "ksha",
    त्र: "x3D"  ,// "tra",
    ज्ञ: "x4B"  ,// "jnya",
    स्: "x6Cx5A"  ,// "",
    ल्: "x79x5A",// "",
    ल्: "x79x5A",// "",
    'ा': "x6B",// "x6B",
    'ॉ': "x6Bx57",
    'ि': "x66",// "x66",
    'िं': "xC7",
    'ी': "x68",
    'ु': "x71",
    'ू': "x77",
    'ृ': "x60",// "x60",
    '्': "x7E"  ,// "x7E",
    'े': "x73"  ,// "x73",
    // 'े': "xA2",// "xA2",
    'ै': "x53",// "x53",
    'ो': "xA8",// "xA8",
    'ौ': "xA9",// "xA9",
    ' ': "x20",
    'ं': "x61",
    '्': "x7E",
    '़': "x2B",
    'ॅ': "x57",
    'ँ': "xA1",
    '{': "xBF",
    '}': "xF8",
    '=': "xBE",
    '!': "x21",
    '+': "x24",
    '÷': "xBB",
    'ः': "x25",
    '-': "x26",
    ';': "x28",
    '(': "xBC",
    '⦁': "xDB",
    '∘': "xF1",
    '.': "x2D",
    '(': "xBC",
    '?': "x5B",
    '0': "x30",
    '1': "x31",
    '2': "x32",
    '3': "x33",
    '4': "x34",
    '5': "x35",
    '6': "x36",
    '7': "x37",
    '8': "x38",
    '9': "x39",
    '/': "x40",
    '|': "x41",
    'ळ': "x47",
    'ऽ': "xB7",
    '8': "x39",
    "०": "xE5",// "0",
    "१": "x31"  ,// "1",
    "२": "x201E"  ,// "2",
    "३": "x2026"  ,// "3",
    "४": "x2020"  ,// "4",
    "५": ""  ,// "5",
    "६": "x2C6"  ,// "6",
    "७": "x2030"  ,// "7",
    "८": "x160"  ,// "8",
    "९": "x2039",// "9",
    'रर्': "x6Bx5A"  ,// "9",
};
app.post('/hindi', upload.single('file'), (req, res) => {
    const filePath = req.file.path;
    const workbook = xlsx.readFile(filePath);
//const workbook = xlsx.readFile('C:\\Users\\PTCS\\Desktop\\test\\hindi.xlsx');
const sheetName = workbook['SheetNames'][0];
const sheet = workbook.Sheets[sheetName];
const  jsonData= xlsx.utils.sheet_to_json(sheet)
const newData = []

let count=0
for (let i = 0; i <= jsonData.length - 1; i++){
    let bag1 = "";
    let aman1 = ""
    let aman2 = ""
    for (let key in jsonData[i]) {
        // console.log(jsonData[i][key])
        if (key === 'Hindi') {
            const output = []
            const output2 = []
            const hindi_text = [...jsonData[i]].trim();
        const hex = [...hindi_text.split('')];  
            // const hex = [...jsonData[i][key].split('')]
            output2.push(jsonData[i][key])
            // let keys = "कलर बख गक्रज"
            // const hex = [...keys.split('')]
            for (let i = 0; i < hex.length; i++) {
                if (hex[i + 1] === 'ि') {
                    output.push(hex[i + 1] + hex[i])
                    i++;
                } else if (hex[i] === ' ' && hex[i + 1] === 'ज' && hex[i + 2] === 'ं' && hex[i + 3] === 'क'&& hex[i + 4] ===  '्'  && hex[i + 5] === 'श' && hex[i + 6] === 'न' && hex[i + 7] === ' ') {
              output.push(' जं.') // जं़
            //   output2.push(' जं.') //////exception for hindi output.
            i += 7
            }else if (hex[i] === ' ' && hex[i + 1] === 'ज' && hex[i + 2] === 'ं' && hex[i + 3] === 'क'
            && hex[i + 4] ===  '्'  && hex[i + 5] === 'श' && hex[i + 6] === 'न' ) {
              output.push(' जं.') // जं़
            //   output2.push(' जं.') //////exception for hindi output.
            i += 7
            }else if (hex[i] === ' ' && hex[i + 1] === 'ज' && hex[i + 2] === 'ं' && hex[i + 3] === ' ') {
              output.push(' जं.') // जं़
            //   output2.push(' जं.')//////exception for hindi output.
              i += 3       //one extra line delete for if bymistake we add . then we remove one extra
            }else if (hex[i] === ' ' && hex[i + 1] === 'ज' && hex[i + 2] === 'ं' ) {
              output.push(' जं.') // जं़
            //   output2.push(' जं.')//////exception for hindi output.
              i += 3       //one extra line delete for if bymistake we add . then we remove one extra
            }
                else if (hex[i] === 'र' && hex[i + 1] === '्' && hex[i + 3] === 'ा') {
                    output.push(hex[i + 2] + hex[i + 3] + hex[i] + hex[i + 1])
                    i += 3;
                } else if (hex[i] === 'र' && hex[i + 1] === '्') {
                    output.push(hex[i + 2] + hex[i] + hex[i + 1])
                    i += 2;
                } else {
                    output.push(hex[i])
                }
            }
            aman2 = output2
            aman1 = output.join('')
            // console.log(keys)
            // console.log(hex)
            // console.log(output)
            // console.log(aman1)
            const final = [...aman1.split('')]
            // console.log(final)
            function getvalues5(final) {
                for (let j = 0; j < final.length; j++) {
                    if (final[j] === 'स' && final[j + 1] === '्' && final[j + 2] === 'त' && final[j + 3] === '्' && final[j + 4] === 'र') {
                        bag1 += "xF3" + " "   // स्त्र
                        j += 4
                    } else if (final[j] === 'क' && final[j + 1] === '्' && final[j + 2] === 'ष' && final[j + 3] === '्') {
                        bag1 += "x7B" //+ " "   // क्ष्
                        j += 3
                    } else if (final[j] === 'न' && final[j + 1] === '्' && final[j + 2] === 'न' && final[j + 3] === '्') {
                        bag1 += "xE9x7E"// + " "   // न्न्
                        j += 3
                    } else if (final[j] === 'त' && final[j + 1] === '्' && final[j + 2] === 'त' && final[j + 3] === '्') {
                        bag1 += "xD9" //+ " "   // त्त्
                        j += 3
                    } else if (final[j] === 'द' && final[j + 1] === 'र' && final[j + 2] === '्' && final[j + 3] === '्' && final[j + 4] === 'ध') {
                        bag1 += "x29" //+ " "  //द्ध
                        j += 4
                    } else if (final[j] === '्' && final[j + 1] === 'र') {
                        bag1 += "x7A" //+ " "    // ex म्र
                        j++
                    } else if (final[j] === 'क' && final[j + 1] === 'ृ') {
                        bag1 += "xD1" //+ " "    // ex म्र
                        j++
                    } else if (final[j] === 'क' && final[j + 1] === '्' && final[j + 2] === 'र') {
                        bag1 += "xD8" //+ " "   // क्र
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
                    } else if (final[j] === 'त' && final[j + 1] === '्') {
                        bag1 += "x52" //+ " "   // त्
                        j++
                    } else if (final[j] === 'त' && final[j + 1] === '्' && final[j + 2] === 'र') {
                        bag1 += "x3D" //+ " "   // त्र
                        j += 2
                    } else if (final[j] === 'थ' && final[j + 1] === '्' && final[j + 2] === 'ि') {
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
                return bag1
            }
            getvalues5(final)
        } 
    }
    newData.push({ 'S_no.': `${i + 1}`, 'Hindi_HEX_CODE': `${bag1}`, 'Hindi': `${aman2}` });
    count++;
    if (count === 1) {
        newData.push({ 'S_no.': `${i + 1}`, 'Hindi_HEX_CODE': `${bag1}`, 'Hindi': `${aman2}` });
    }
}

const newSheet = xlsx.utils.json_to_sheet(newData);
xlsx.utils.book_append_sheet(workbook, newSheet, 'hindi_hex_code',true);
// xlsx.writeFile(workbook, 'C:\\Users\\PTCS\\Desktop\\test\\output.xlsx');
xlsx.writeFile(workbook, 'C:\\Users\\PTCS\\Downloads\\hindi.xlsx');
// res.send(getValues3(final));
    // res.send(newData);
    res.send('New Excel file successfully created in download folder .');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Server running at http://localhost:${port}`);
});