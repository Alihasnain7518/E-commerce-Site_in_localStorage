const parentDiv = document.getElementById('result');


// import { getAllProducts } from './module.js';
let logIn ;
// rendering header to first page on the website
window.addEventListener('load', ()=>{
let headerIndex = document.querySelector("#header");
const userAuth = JSON.parse(localStorage.getItem("user-Auth"));
if(userAuth){
     logIn = ` <li><a id="logIn"   href="logIn.html">Login </a></li>`
}else{
    logIn = '';
}


    let innerMenu = `
                <a href="#"><img src="logo.png" width="200px" class="logo" alt="logo"></a>
                <div>
                    <ul id="navbar">
                        <li><a class="active" href="index.html">Products</a></li>
                        <li><a href="signUp.html">Create Account </a></li>
                       ${logIn}
                    </ul>
                </div>
    `
// const logInTag = document.getElementById("logIn");
    // console.log(logInTag)
    headerIndex.innerHTML = innerMenu;

});
// Get all products
function getAllProducts() {
    const products = JSON.parse(localStorage.getItem("product-list")) || [];
    
    products.forEach(item => {
        
        
        const productDiv = document.createElement('div')
        const secondDiv = document.createElement('div');
        const thirdDiv = document.createElement('div');
        const fourthDiv = document.createElement('div');
        const fifthDiv = document.createElement('div');
        const productTitle = document.createElement('h2')
        const priceTitle = document.createElement('h5')
        const productPrice = document.createElement('p')
        const productCatagory = document.createElement('p')
        const CatagoryTitle = document.createElement('h6')
        const productDescription = document.createElement('p')
        const productImage = document.createElement('img')
        productDiv.classList.add("pro-container")
        secondDiv.classList.add("container2")
        thirdDiv.classList.add("priceList")
        fifthDiv.classList.add("ProductCatogory")
        productTitle.innerText = item.title
        priceTitle.innerText = "PKR"
        productCatagory.innerText = item.prCatogery
        CatagoryTitle.innerText = "Catagory"
        productPrice.innerText = item.price
        productDescription.innerText = item.description.length > 25 ? item.description.substr(0, 25) + '....' : item.description;
        productDiv.appendChild(secondDiv);
        fourthDiv.appendChild(productImage)  
        secondDiv.insertAdjacentElement("afterbegin",thirdDiv);
        secondDiv.insertAdjacentElement("afterbegin",fourthDiv);
        secondDiv.insertAdjacentElement("beforeend",fifthDiv);
        fourthDiv.appendChild(productTitle)
        thirdDiv.appendChild(priceTitle)
        thirdDiv.appendChild(productPrice)
        fourthDiv.appendChild(productDescription)  
        fifthDiv.appendChild(CatagoryTitle)  
        fifthDiv.appendChild(productCatagory)  
        productImage.src = item.img
        parentDiv.appendChild(productDiv)
    });

}



getAllProducts()