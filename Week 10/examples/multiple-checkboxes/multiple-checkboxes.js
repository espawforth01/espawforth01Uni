

function processForm(){
	const chkBoxes = document.querySelectorAll('input[type="checkbox"]:checked'); //select all the checkboxes that have been checked
 	const selectedItems = []; //declare an empty array
  chkBoxes.forEach(function(chkBox){ //loop over the selected checkboxes
    selectedItems.push(chkBox.value); //add the checkbox value to the selectedItems array
  })
  console.log(selectedItems);
}



const btn =  document.getElementById("myButton");

btn.addEventListener("click",function(){
	processForm();
})
