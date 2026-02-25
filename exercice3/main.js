let maBaliselabelInput = document.querySelector("#lastname");
// console.log(maBaliselabelInput);

// maBaliselabelInput.KeyboardEvent("dialog", function () {
// //   console.log("Hello world !");

//   alert();
// });

maBaliselabelInput.addEventListener("keyup", handleKeydown );

function handleKeydown() {
  alert(maBaliselabelInput.value);
}