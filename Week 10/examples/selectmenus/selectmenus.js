
let selectMenu;
function processForm(){
 	const price = selectMenu.value;
	console.log(price); // e.g. £2.30
};



selectMenu =  document.getElementById("flavours");
selectMenu.addEventListener("change",function(){
  	processForm();
})



// const btn =  document.getElementById("myButton");
//
// btn.addEventListener("click",function(){
// 	processForm();
// })
