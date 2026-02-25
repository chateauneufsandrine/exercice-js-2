// CREER UN ELEMENT HTML/////////////////////////////////////////////////////
let maBaliseImg = document.querySelector("#image1");

//ou // let imgHover = document.getElementById("#image1");

// ///////////////////OU///////////////////////////////////////////////////////
// // console.log(maBaliseImg);

maBaliseImg.addEventListener("mouseenter", changerpuce)


function changerpuce() {
   console.log(maBaliseImg.src);
   
    if (maBaliseImg.src === "http://127.0.0.1:5500/exercice1/images/image1.jpg") {
        
        
        maBaliseImg.src = "http://127.0.0.1:5500/exercice1/images/image1_2.jpg";
    } else {

        
       maBaliseImg.src = "http://127.0.0.1:5500/exercice1/images/image1.jpg" ;
    }

}


// maBaliseImg.addEventListener("over", changerpuce)


// function changerpuce() {
//    console.log(maBaliseImg.src);
   
//     if (maBaliseImg.src === "http://127.0.0.1:5501/images/image1.jpg") {
//         maBaliseImg.src === "http://127.0.0.1:5501/images/image1_2.jpg";
//     } else {
//        maBaliseImg.src === "http://127.0.0.1:5501/images/image1.jpg" ;
//     }

// }


