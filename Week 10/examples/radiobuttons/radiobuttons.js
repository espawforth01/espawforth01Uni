
function processForm(){
 	const correctRdioBtn=document.getElementById("caracas");
	if(correctRdioBtn.checked){
		console.log("You are correct");
	}else{
		console.log("You are wrong");
	}
};

const btn =  document.getElementById("myButton");

btn.addEventListener("click",function(){
	processForm();
})
