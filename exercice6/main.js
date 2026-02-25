let images = document.querySelectorAll("img");

images.forEach((image) => {
  image.addEventListener("mouseenter", handleClickChangerpuce);
  image.addEventListener("mouseleave", handleLeaveChangerpuce);
});

function handleClickChangerpuce(event) {
  console.log(event.target);
  let image = event.target;
  image.dataset.original = image.src;
  image.src = image.src.replace(".jpg", "_2.jpg");
}

function handleLeaveChangerpuce(event) {
  let image = event.target;
 image.dataset.original = image.src;
  image.src = image.src.replace("_2.jpg", ".jpg");
}
