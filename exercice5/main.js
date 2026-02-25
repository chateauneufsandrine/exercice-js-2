let images = document.querySelectorAll("img");

images.forEach((image) => {
  image.addEventListener("mouseenter", handleClickChangerpuce);
});
 
function handleClickChangerpuce(event) {

  console.log(event.target);
let image = event.target;
image.dataset.original = image.src;
image.src = image.src.replace(".jpg", "_2.jpg" );

// img.src="" = img.src=""
// img.src="images/image2.jpg"=  img.src="exercice5/images/image2_2.jpg"
// img.src="images/image3.jpg;"= img.src="exercice5/images/image3_2.jpg"
// img.src="images/image4.jpg"= img.src="exercice5/images/image4_2.jpg"
// img.src="images/image5.jpg"= img.src="exercice5/images/image5_2.jpg"
// console.log(event);

}
