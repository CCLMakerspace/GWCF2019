var total_images = 7;
var image = document.getElementById('image');
var random_number = Math.floor((Math.random()*total_images));
var random_img = [];

random_img[0] = '<a href="Preethi.html" target="_blank"><img src="preethi.jpg" width="400" height="400"></a>';
random_img[1] = '<a href="Shanthi.html" target="_blank"><img src="shanthi.jpg" width="400" height="400"></a>';
random_img[2] = '<a href="hi.html" target="_blank"><img src="abhinav.jpg" width="400" height="400"></a>';
random_img[3] = '<a href="https://www.khanacademy.org/hour-of-code/diy-halloween-costumes/5887408675094528" target="_blank"><img src="rishika.jpg" width="400" height="400"></a>';
random_img[4] = '<a href="arya.html" target="_blank"><img src="arya.jpg" width="400" height="400"></a>';
random_img[5] = '<a href="Brody-web.html" target="_blank"><img src="brody.jpg" width="400" height="400"></a>';
random_img[6] = '<a href="mainpage.html" target="_blank"><img src="shivika.jpg" width="400" height="400"></a>';

image.innerHTML = random_img[random_number];
