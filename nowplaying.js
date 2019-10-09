var total_images = 8;
var image = document.getElementById('image');
var random_number = Math.floor((Math.random()*total_images));
var random_img = [];

random_img[0] = '<a href="https://google.com" target="_blank"><img src="preethi.jpg"></a>';
random_img[1] = '<a href="https://twitter.com" target="_blank"><img src="shanthi.jpg"></a>';
random_img[2] = '<a href="https://tumblr.com" target="_blank"><img src="abhinav.jpg"></a>';
random_img[3] = '<a href="https://facebook.com" target="_blank"><img src="harisha.jpg"></a>';
random_img[4] = '<a href="https://spotify.com" target="_blank"><img src="rishika.jpg"></a>';
random_img[5] = '<a href="https://bing.com" target="_blank"><img src="arya.jpg"></a>';
random_img[6] = '<a href="https://apple.com" target="_blank"><img src="brody.jpg"></a>';
random_img[7] = '<a href="https://youtube.com" target="_blank"><img src="shivika.jpg"></a>';

image.innerHTML = random_img[random_number];
