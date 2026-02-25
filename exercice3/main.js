let maBaliselabelInput = document.querySelector("#lastname");

maBaliselabelInput.addEventListener("keyup", handleKeydown);

function handleKeydown() {
  alert(maBaliselabelInput.value);
}
