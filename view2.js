

// const parentDiv = document.getElementById('result');

// const userAuth = JSON.parse(localStorage.getItem("logged-in"));

// if(!userAuth){

//     location.href = location.origin
// }


// // document.querySelector(`a[href^='${location.pathname.split('/'[1])}']`).className.add = "active";

// showing  admin panel upload product and view product pages if loggedIn object  exist
window.addEventListener('load', ()=>{
    let headerIndex = document.querySelector("#header");
    let innerMenu = `
    <a href="#"><img src="logo.png" width="200px" class="logo" alt="logo"></a>
    <div>
        <ul id="navbar">
            <li><a class="active" href="view2.html"> View Products</a></li>
            <li><a href="admin.html">Admin Panel</a></li>
            <li><a  href="view.html">Upload Products</a></li>
            <li><a  href="catogories.html">Catogires</a></li>
            <button class="btnLogOut" onclick="localStorage.removeItem('logged-in');location.reload();">Logout</button>
        </ul>
    </div>
    `

    headerIndex.innerHTML = innerMenu;
})








// function getAllProducts() {
//     const products = JSON.parse(localStorage.getItem("product-list")) || [];
    
//     products.forEach(item => {
        
        
//         const productDiv = document.createElement('div')
//         const secondDiv = document.createElement('div');
//         const productTitle = document.createElement('h2')
//         const productDescription = document.createElement('p')
//         const productImage = document.createElement('img')
//         productDiv.classList.add("pro-container")
//         secondDiv.classList.add("container2")
//         productTitle.innerText = item.title
//         productDescription.innerText = item.description.length > 25 ? item.description.substr(0, 25) + '....' : item.description;
//         productDiv.appendChild(secondDiv);
//         secondDiv.appendChild(productImage)  
//         secondDiv.appendChild(productTitle)
//         secondDiv.appendChild(productDescription)  
//         productImage.src = item.img
//         parentDiv.appendChild(productDiv)
//     });

// }



// getAllProducts()


const parentDiv = document.getElementById('result');


// import { getAllProducts } from './module.js';
let logIn ;
// rendering header to first page on the website
// window.addEventListener('load', ()=>{
// let headerIndex = document.querySelector("#header");
// const userAuth = JSON.parse(localStorage.getItem("user-Auth"));
// if(userAuth){
//      logIn = ` <li><a id="logIn"   href="logIn.html">Login </a></li>`
// }else{
//     logIn = '';
// }


//     let innerMenu = `
//                 <a href="#"><img src="logo.png" width="200px" class="logo" alt="logo"></a>
//                 <div>
//                     <ul id="navbar">
//                         <li><a class="active" href="index.html">Products</a></li>
//                         <li><a href="signUp.html">Create Account </a></li>
//                        ${logIn}
//                     </ul>
//                 </div>
//     `
// // const logInTag = document.getElementById("logIn");
//     // console.log(logInTag)
//     headerIndex.innerHTML = innerMenu;

// });
// Get all products

// create new object which include a product quantity and total price and all other stuff will remail the same
// first time when user click on the cart add the object in the array 
// otherwise increase the price the quatity

// { 
//     id: 12,
//     price: 10,
//     title: 'test',
//     description: 'test',
// }

// const alreadyExistedItem = cartProducts.findIndex(item => item.id === id)
// const filterItem = productList.find(item => item.id === id)
// if(alreadyExistedItem !== -1) {
//     cartProducts[alreadyExistedItem].quantity = cartProducts[alreadyExistedItem].quantity + 1
//     cartProducts[alreadyExistedItem].totalPrice = cartProducts[alreadyExistedItem].quantity * item
// }else {
//     cartProducts.push({
//         ...item,
//         quantity: 1,
//         totalPrice: item.price
//     })
// }


function addProductToCart(id) {
    console.log('here')
    console.log("id", id)
    const AddCartPro = JSON.parse(localStorage.getItem("Product-Cart")) || [];
    const products = JSON.parse(localStorage.getItem("product-list"));
    loggedIn = JSON.parse(localStorage.getItem("logged-in"));
    const alreadyExistedItem = AddCartPro.findIndex(item => item.id === id && item.userId === loggedIn.userId);
    let  filterPro =  products.filter(item => item.id == id);
    // filterPro =  products.filter(item => item.userId == loggedIn.userId);
    // const alreadyExistedItem2 = AddCartPro.filter(item => item.id === id);
    // console.log(filterPro[0].price)
    if(alreadyExistedItem !== -1) {
        console.log("inside if")
        AddCartPro[alreadyExistedItem].quantity = AddCartPro[alreadyExistedItem].quantity + 1;
        console.log( AddCartPro[alreadyExistedItem].quantity);
        AddCartPro[alreadyExistedItem].totalPrice = AddCartPro[alreadyExistedItem].quantity *  filterPro[0].price;
        // AddCartPro.push(filterPro[0]);
        const productsCart = localStorage.setItem("Product-Cart", JSON.stringify(AddCartPro));
        alert("pakistan added successfully")
    }else{
        console.log("inside else")
        const products = JSON.parse(localStorage.getItem("product-list"));
        loggedIn = JSON.parse(localStorage.getItem("logged-in"));
        filterPro =  products.filter(item => item.id == id);
        console.log(filterPro[0].id)
            filterPro[0].quantity =  1,
            filterPro[0].totalPrice =  parseInt(filterPro[0].price);
            filterPro[0].userId =  loggedIn.userId
    
        console.log( filterPro[0].quantity)
        AddCartPro.push(filterPro[0]);
        const productsCart = localStorage.setItem("Product-Cart", JSON.stringify(AddCartPro));
    }
    // const cartObj = {
    //     userId :  item.userId,
    //     id: item.id,
    //     title: item.title, 
    //     price: item.price,
    //     description:item.description,
    //     img: item.img ,
    //     prCatogery: item.prCatogery,
    //     // productQuantity: sd ,
    //     // TotalPrice:
    // }
    console.log(filterPro[0]);
    // AddCartPro.push(filterPro[0]);
    // const productsCart = localStorage.setItem("Product-Cart", JSON.stringify(AddCartPro));
    console.log(AddCartPro)
  

}

function getAllProducts() {
    const products = JSON.parse(localStorage.getItem("product-list")) || [];
    
    products.forEach((item , index)=> {
        // console.log(index)
        
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
        const CartBtn = document.createElement('button')

        const checkLabel = document.createElement('div')
        const productImage = document.createElement('img')

        CartBtn.addEventListener("click", () => addProductToCart(item.id));
        // CartBtn.setAttribute('onclick', addProductToCart(item.id))
        productDiv.classList.add("pro-container")
        secondDiv.classList.add("container2")
        thirdDiv.classList.add("priceList")
        fifthDiv.classList.add("ProductCatogory")
        productTitle.innerText = item.title
        priceTitle.innerText = "PKR"
        checkLabel.id = "tocart"
        CartBtn.id = "cart"
        CartBtn.innerText = "Add To Cart";
        CartBtn.classList.add("btn-primary")
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
        fourthDiv.appendChild(checkLabel)  
        checkLabel.appendChild(CartBtn)  
        fifthDiv.appendChild(CatagoryTitle)  
        fifthDiv.appendChild(productCatagory)  
        productImage.src = item.img
        parentDiv.appendChild(productDiv);
    });
    
}

 getAllProducts();

let Cart = document.getElementById("cart");

const products = JSON.parse(localStorage.getItem("product-list"));

// Cart.addEventListener("click",()=>{
//             console.log(products[0].userId)
//         filterPro =  products.filter(item => item.index == index);
//         console.log(filterPro)
       
//         alert("Your selected product is added to the Cart")
//         if(alert){
//             // let  Cart = localStorage.getItem("Cart-Product", JSON.stringify(addToCart)) || [];
//         }
//         location.reload();
//         console.log("checked")
        
//     });
    
    // getAllProducts();