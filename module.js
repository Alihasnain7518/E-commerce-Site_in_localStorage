const parentDiv = document.getElementById('result');
// const taskInput = document.querySelector(".row input");
// const description = document.querySelector(".row textarea");
// const addBtn = document.getElementById("btnsubmit");
// const output = document.querySelector("#result2");
// const form =document.getElementById("form");


// Get all products
 function getAllProducts() {
    const products = JSON.parse(localStorage.getItem("product-list")) || []
    products.forEach(item => { 
        const productDiv = document.createElement('div')
        const secondDiv = document.createElement('div');
        const productTitle = document.createElement('h2')
        const productDescription = document.createElement('p')
        const productImage = document.createElement('img')
        productDiv.classList.add("pro-container")
        secondDiv.classList.add("container2")
        productTitle.innerText = item.title
        productDescription.innerText = item.description.length > 25 ? item.description.substr(0, 25) + '....' : item.description;
        productDiv.appendChild(secondDiv);
        secondDiv.appendChild(productImage)  
        secondDiv.appendChild(productTitle)
        secondDiv.appendChild(productDescription)  
        productImage.src = item.img
        parentDiv.appendChild(productDiv)
    });

}




// Getting Data from user and storing in localstorage on  button click
 function manageData(){   
    document.getElementById("msg").innerHTML = ""
    document.getElementById("detail").innerHTML = ""
    let name  = document.getElementById("name").value;
    let details = document.getElementById("details").value;
    if(name == '' && details == ''){
        document.getElementById("detail").innerHTML = "please add some details"
        document.getElementById("msg").innerHTML = "please add some tile"
    }else{
        const products = JSON.parse(localStorage.getItem("product-list")) || [];
        
        const productData = {
            id: Math.floor(Math.random(0, 1) * 1000),
            title: name, 
            description: details,
            img: imgAddress 
            
        }
        products.push(productData);
        localStorage.setItem("product-list", JSON.stringify(products))
    
        alert("Product added successfully")   
       
    }
      document.getElementById("name").value ='';
     document.getElementById("details").value = '';
}


export { manageData, getAllProducts }