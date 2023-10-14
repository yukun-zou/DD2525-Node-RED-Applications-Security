var originalUrl = lbl("https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDDtX_YnDVfS-o0a7jEDsV4rQALpCkq8Y4"); 

var encodedUrl = "123";

if (originalUrl) {encodedUrl = "localhost:3000/images:annotate?key=" + encodeURIComponent(originalUrl); }