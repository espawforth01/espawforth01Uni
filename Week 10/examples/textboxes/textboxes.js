

function processForm(){
	const searchTerm=document.getElementById("search").value;
	console.log(`You entered ${searchTerm}`)
}


const btn =  document.getElementById("myButton");


btn.addEventListener("click",function(){
	processForm();
})
