
const stars = document.querySelectorAll(".stars i"); 

// stars.forEach(function (elements,indexA){
// 	// console.log("etoile :" + indexA);
// 	elements.addEventListener("click", function () {
// 		// console.log("click");
// 		// console.log(elements);
// 		// console.log(indexA);

// 		stars.forEach(function (elements, indexB){
// 			// console.log("click");
// 			// console.log(elements);
// 			// console.log(indexB);			
// 			if(indexA >= indexB){
// 				elements.classList.add("active")
// 			}else{
// 				elements.classList.remove("active")
// 			}

// 		})
// 	})
// })



stars.forEach(myfunctionA);

function myfunctionA(elements, indexA){
	console.log("etoile :" + indexA);
	elements.addEventListener("click", () => {
		console.log(indexA);
		console.log("etoile :" + indexA);
	stars.forEach(myfunctionB);
		function myfunctionB (elements, indexB) {

			console.log(indexB);			
				if(indexA >= indexB){
					elements.classList.add("active")
				}else{
					elements.classList.remove("active")
				}

		}
	})
}