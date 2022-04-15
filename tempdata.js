var txt =
  '{"data":[' +
  '{"Title":"LIVE: Greg Inglis to announce early retirement….","Imageurl":"img1.png","Intro": "Rabbitohs Rabbitohs Rabbitohs  star Greg……","Published": "2m"},' +
  '{"Title":"LIVE: Greg Inglis to announce early retirement….","Imageurl":"img2.png","Intro": "RabbitohsRabbitohs star Greg……","Published": "2m"},' +
  '{"Title":"LIVE: Greg Inglis to announce early retirement….","Imageurl":"img3.png","Intro": "Rabbitohs star Greg……","Published": "2m"},' +
  '{"Title":"LIVE: Greg Inglis to announce early retirement….","Imageurl":"img4.png","Intro": "Rabbitohs star Greg……","Published": "2m"}]}';
var data = JSON.parse(txt).data;
var container = document.getElementById("mydiv");

var info = document.createElement("div");
info.className = "info";
var image = document.createElement("img");
image.className = "headlineImage";
image.src = data[0].Imageurl;
// image.width =100px
// image.height = 100%
info.appendChild(image);

var name1 = document.createElement("div");
name1.className = "headline";
name1.innerHTML = data[0].Title;
info.appendChild(name1);

var time = document.createElement("div");
time.className = "time";
time.innerHTML = data[0].Intro;
info.appendChild(time);

var email = document.createElement("div");
email.className = "email";
email.innerHTML = data[0].Published;
info.appendChild(email);

container.appendChild(info);

var infosecond = document.createElement("div");
infosecond.className = "infosecond";

var info = document.createElement("div");
info.className = "info";
var image = document.createElement("img");
image.className = "headlineImage";
image.src = data[1].Imageurl;
info.appendChild(image);

var name1 = document.createElement("div");
name1.className = "headline";
name1.innerHTML = data[1].Title;
info.appendChild(name1);

var time = document.createElement("div");
time.className = "time";
time.innerHTML = data[1].Intro;
info.appendChild(time);

var email = document.createElement("div");
email.className = "email";
email.innerHTML = data[1].Published;
info.appendChild(email);
infosecond.appendChild(info);

var subheading = document.createElement("div");
subheading.className = "subheading";
var info = document.createElement("div");
info.className = "info";

var name1 = document.createElement("div");
name1.className = "headline";
name1.innerHTML = data[2].Title;
subheading.appendChild(name1);
info.appendChild(subheading);

var image = document.createElement("img");
image.className = "headlineImage";
image.src = data[2].Imageurl;
subheading.appendChild(image);
var email = document.createElement("div");
email.className = "email";
email.innerHTML = data[2].Published;
info.appendChild(email);
infosecond.appendChild(info);

var subheading = document.createElement("div");
subheading.className = "subheading";
var info = document.createElement("div");
info.className = "info";

var name1 = document.createElement("div");
name1.className = "headline";
name1.innerHTML = data[3].Title;
subheading.appendChild(name1);

var image = document.createElement("img");
image.className = "headlineImage";
image.src = data[3].Imageurl;
subheading.appendChild(image);
var email = document.createElement("div");
email.className = "email";
email.innerHTML = data[3].Published;
info.appendChild(subheading);
info.appendChild(email);
infosecond.appendChild(info);
container.appendChild(infosecond);
console.log(container);
