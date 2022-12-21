const phoneList = [
    {name:"Pixel 6a", brand:"Google", memory:"128 GB", color:"white", os:"Android", cost:399},
    {name:"Pixel 6a", brand:"Google", memory:"128 GB", color:"green", os:"Android", cost:399},
    {name:"Pixel 6a", brand:"Google", memory:"128 GB", color:"black", os:"Android", cost:399},
    {name:"Pixel 6 Pro", brand:"Google", memory:"256 GB", color:"black", os:"Android", cost:749},
    {name:"iPhone 12 Pro", brand:"Apple", memory:"512 GB", color:"gold", os:"iOS", cost:1149},
    {name:"iPhone 12 Pro", brand:"Apple", memory:"512 GB", color:"gray", os:"iOS", cost:1149},
    {name:"iPhone 12 Pro", brand:"Apple", memory:"512 GB", color:"silver", os:"iOS", cost:1149},
    {name:"iPhone SE 2020", brand:"Apple", memory:"64 GB", color:"red", os:"iOS", cost:349},
    {name:"iPhone SE 2020", brand:"Apple", memory:"64 GB", color:"white", os:"iOS", cost:349},
    {name:"iPhone 13 Mini", brand:"Apple", memory:"256 GB", color:"blue", os:"iOS", cost:729},
    {name:"iPhone 13 Mini", brand:"Apple", memory:"256 GB", color:"white", os:"iOS", cost:729},
    {name:"iPhone 13 Mini", brand:"Apple", memory:"256 GB", color:"black", os:"iOS", cost:729},
    {name:"iPhone 13 Mini", brand:"Apple", memory:"256 GB", color:"pink", os:"iOS", cost:729},
    {name:"G82", brand:"Motorola", memory:"128 GB", color:"gray", os:"Android", cost:249},
    {name:"Moto E30", brand:"Motorola", memory:"32 GB", color:"blue", os:"Android", cost:89},
    {name:"Moto E30", brand:"Motorola", memory:"32 GB", color:"gray", os:"Android", cost:89},
    {name:"Galaxy S22 Plus", brand:"Samsung", memory:"128 GB", color:"green", os:"Android", cost:949},
    {name:"Galaxy S22 Plus", brand:"Samsung", memory:"128 GB", color:"black", os:"Android", cost:949},
    {name:"Galaxy S22 Plus", brand:"Samsung", memory:"128 GB", color:"white", os:"Android", cost:949},
    {name:"Galaxy S22 Plus", brand:"Samsung", memory:"128 GB", color:"pink", os:"Android", cost:949},
    {name:"Galaxy A13", brand:"Samsung", memory:"64 GB", color:"white", os:"Android", cost:129},
    {name:"Galaxy A13", brand:"Samsung", memory:"64 GB", color:"black", os:"Android", cost:129},
    {name:"105", brand:"Nokia", memory:"4 MB", color:"black", os:"Symbian OS", cost:25},
    {name:"105", brand:"Nokia", memory:"4 MB", color:"blue", os:"Symbian OS", cost:25},
    {name:"105", brand:"Nokia", memory:"4 MB", color:"pink", os:"Symbian OS", cost:25},
];

//search functions

// Search for manufacturer
function manufacturerSelect(){
    const manufacturer = document.getElementById("manufacturer");
	const chkBoxes = manufacturer.querySelectorAll('input[type="checkbox"]:checked'); //select all the checkboxes that have been checked
 	const selectedItemsManufacturer = []; //declare an empty array
    chkBoxes.forEach(function(chkBox){ //loop over the selected checkboxes
        selectedItemsManufacturer.push(chkBox.value); //add the checkbox value to the selectedItems array
    })
    console.log(selectedItemsManufacturer);
}

// Search for color
function colorSelect(){
    const color = document.getElementById("color");
	const chkBoxes = color.querySelectorAll('input[type="checkbox"]:checked'); //select all the checkboxes that have been checked
 	const selectedItemsColor = []; //declare an empty array
    chkBoxes.forEach(function(chkBox){ //loop over the selected checkboxes
        selectedItemsColor.push(chkBox.value); //add the checkbox value to the selectedItems array
    })
    console.log(selectedItemsColor);
}

// Search for operating system
function operatingSystemSelect(){
    let selectMenu = document.getElementById("operatingSystem");
    const os = selectMenu.value;
    console.log(os);
}

// Search for memory
function memorySelect(){
    let selectMenu = document.getElementById("memory");
    const memory = selectMenu.value;
    console.log(memory);
}

// Search for price
function priceSelect(){
    const price = document.getElementById("price");
    console.log(price.value);
}

// Search phones array for matching phones and create an array of the matching results
function matchingPhones(phoneList, selectedItemsManufacturer, selectedItemsColor, os, memory, price) {
    
}

//displayContent function

document.addEventListener("change",function(){
	manufacturerSelect();
    colorSelect();
    operatingSystemSelect();
    memorySelect();
    priceSelect();
})

//onLoad function

