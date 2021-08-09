var fileInput = document.getElementById("backgroundInput");
    fileInput.addEventListener('change', function(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);


        reader.onload = function () {
            var photoFrame = document.createElement("body");
            photoFrame.style = `background : url(${reader.result});`
            photoFrame.className = "photoFrame";
            document.getElementById("pictures").appendChild(photoFrame);
           
        };
    });
