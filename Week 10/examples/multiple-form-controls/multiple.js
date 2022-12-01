

function getSearchTerm(){
	const searchTerm=document.getElementById("search").value;
	return searchTerm;
};

function checkTerms(){
	const termsChkBox=document.getElementById("terms");
	return termsChkBox.checked;
}

function getAnswer(){
 	const selectedRadBtn=document.querySelector('input[name="question"]:checked');
	return selectedRadBtn.value;
};

function processForm(){
	const searchTerm =  getSearchTerm();
	const termsAndConditions = checkTerms();
	const answer = getAnswer();
	console.log(searchTerm);
	console.log(termsAndConditions);
	console.log(answer);
}



const btn =  document.getElementById("myButton");

btn.addEventListener("click",function(){
	processForm();
})
