const stars = document.querySelectorAll(".stars i"); 
// console.log(stars);

stars.forEach((star,indexA) => {
	star.addEventListener("click", () => {
		console.log("click");
		console.log(star);
		console.log(indexA);

		stars.forEach((star, indexB) => {
			// console.log("click");
			// console.log(star);
			// console.log(indexB);			
			if(indexA >= indexB){
				star.classList.add("active")
			}else{
				star.classList.remove("active")
			}

		})
	})
})