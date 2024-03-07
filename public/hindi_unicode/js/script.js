 function submitForm() {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/upload_button', true,);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    document.getElementById('message').innerHTML = xhr.responseText;
                }
            };
            xhr.send();
        }
//         function successful_message() {
//       setTimeout(function() {
//         var myText = document.getElementById("myText");
//         setTimeout(function() {
//           myText.innerText = "File uploaded successfully.";
//         },0.5* 1000); // 2000 milliseconds = 2 seconds
//       });
//       setTimeout(function() {
//           myText.innerText = "";
//         },3.5* 1000); // 2000 milliseconds = 2 seconds // 1000 milliseconds = 1 second
// }
    function successful_message() {
      setTimeout(function() {
        var myText = document.getElementById("myText");
        setTimeout(function() {
          myText.innerText = "File uploaded successfully.";
        },0.5* 1000); // 2000 milliseconds = 2 seconds
      });
      setTimeout(function() {
          myText.innerText = "";
        },3.5* 1000); // 2000 milliseconds = 2 seconds // 1000 milliseconds = 1 second
    }