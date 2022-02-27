let images =[
	"https://cms-contents.pharmeasy.in/banner/48a1439746f-EASY400.jpg?dim=1440x0&dpr=1&q=100",
	"https://cms-contents.pharmeasy.in/banner/60fb9bbcf9a-DWEB.jpg?dim=1440x0&dpr=1&q=100",
	"https://cms-contents.pharmeasy.in/banner/b06a67e4fc7-Sarva_dWeb.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/dd96b2e3812-Yoga_Dweb.jpg?dim=1440x0&dpr=1&q=100"

];

   let container =document.getElementById("myslideshow");

   function startSlideShow() {

	let counter = 0
    
	setInterval(function () {

		container.innerHTML = null;
		if (counter=== images.length){
			counter = 0
		}


		let img = document.createElement("img"); 
		img.src = images[counter];
		container.append(img);

	   counter+=1;
   }, 3000);
}
  startSlideShow();
