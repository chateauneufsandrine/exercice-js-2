let maBaliseButton = document.querySelector("button");
// console.log(maBaliseButton);

maBaliseButton.addEventListener("click", handleClickRemiseAZero);

 function handleClickRemiseAZero(){
  let inputs = document.querySelectorAll("input");
  
  inputs.forEach(input => {
    input.value = "";
    
  });
 }   
