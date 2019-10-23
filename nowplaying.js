var total_images = 8;
var image = document.getElementById('image');
var random_number = Math.floor((Math.random()*total_images));
var random_img = [];

random_img[0] = '<a href="Preethi.html" target="_blank"><img src="preethi.jpg"></a>';
random_img[1] = '<a href="Shanthi.html" target="_blank"><img src="shanthi.jpg"></a>';
random_img[2] = '<a href="hi.html" target="_blank"><img src="abhinav.jpg"></a>';
random_img[3] = '<a href="https://facebook.com" target="_blank"><img src="harisha.jpg"></a>';
random_img[4] = '<a href="https://www.khanacademy.org/hour-of-code/diy-halloween-costumes/5887408675094528" target="_blank"><img src="rishika.jpg"></a>';
random_img[5] = '<a href="arya.html" target="_blank"><img src="arya.jpg"></a>';
random_img[6] = '<a href="https://apple.com" target="_blank"><img src="brody.jpg"></a>';
random_img[7] = '<a href="https://youtube.com" target="_blank"><img src="shivika.jpg"></a>';

image.innerHTML = random_img[random_number];
