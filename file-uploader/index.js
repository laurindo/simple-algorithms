var fileInput = document.getElementById('fileInput');
var fileDisplayArea = document.getElementById('fileDisplayArea');

fileInput.addEventListener('change', function(e) {
    var file = fileInput.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = reader.result;
        var utf8 = encodeURIComponent(data);
        var bytes = [];
        for (var i = 0; i < utf8.length; i++) {
            bytes.push(utf8.charCodeAt(i));
        }    
        var result = new Blob([bytes], { type: 'text/csv' });
        console.log(result);
    }
    reader.readAsBinaryString(file);
});


