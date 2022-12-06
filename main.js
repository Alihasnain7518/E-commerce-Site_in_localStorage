const form =document.getElementById("form");
const parentDiv = document.getElementById('result');
const taskInput = document.querySelector(".row input");
const description = document.querySelector(".row textarea");
const addBtn = document.getElementById("btnsubmit");
const output = document.querySelector("#result2");

let id ;
let  imgAddress;
let product = JSON.parse(localStorage.getItem("product-list"));
let catagories;

const userAuth = JSON.parse(localStorage.getItem("logged-in"));

if(!userAuth){

    location.href = location.origin
}

// document.querySelector(`a[href^='${location.pathname.split('/'[1])}']`).className.add = "active";

// showing  admin panel upload product and view product pages if loggedIn object  exist
window.addEventListener('load', ()=>{
    let headerIndex = document.querySelector("#header");
    let innerMenu = `
    <a href="#"><img src="logo.png" width="200px" class="logo" alt="logo"></a>
    <div>
        <ul id="navbar">
            <li><a  href="view2.html"> View Products</a></li>
            <li><a href="admin.html">Admin Panel</a></li>
            <li><a  href="view.html">Upload Products</a></li>
            <li><a  href="catogories.html">Catogires</a></li>
            <button class="btnLogOut" onclick="localStorage.removeItem('logged-in');location.reload();">Logout</button>
        </ul>
    </div>
    `

    headerIndex.innerHTML = innerMenu;
})

// import { manageData } from './module.js';
HTMLSelectElement.prototype.contains = function( value ) {

    for ( var i = 0, l = this.options.length; i < l; i++ ) {
        if ( this.options[i].value == value ) {
            return true;
        }
    }
    console.log(this.options.length)
    return false;
}

// Getting Data from user and storing in localstorage on  button click
 function manageData(){   
    document.getElementById("msg").innerHTML = ""
    document.getElementById("nmb").innerHTML = ""
    document.getElementById("detail").innerHTML = ""
    let name  = document.getElementById("name").value;
    let details = document.getElementById("details").value;
    let price = document.getElementById("number").value;
    if(name == '' || details == '' || price == '' ){
        document.getElementById("detail").innerHTML = "please add some details"
        document.getElementById("msg").innerHTML = "please add some tile"
        document.getElementById("nmb").innerHTML = "please add price"
    }else{
        if( catagories ){

            const products = JSON.parse(localStorage.getItem("product-list")) || [];
           let catogories = JSON.parse(localStorage.getItem("catogory-list"));
            loggedIn = JSON.parse(localStorage.getItem("logged-in"))
            filterPro =  catogories.filter(item => item.userId == loggedIn.userId);
            // console.log(filterPro[0].userId);
            const productData = {
                userId :  loggedIn.userId,
                id: Math.floor(Math.random(0, 1) * 1000),
                title: name, 
                price: price,
                description: details,
                img: imgAddress ,
                prCatogery: catagories 
            }
            products.push(productData);
            localStorage.setItem("product-list", JSON.stringify(products))
            
            alert("Product added successfully")   
        }else{
            alert("please add catagorey for uploading product")
        }
    }
      document.getElementById("name").value ='';
     document.getElementById("details").value = '';
     document.getElementById("number").value = '';
}



function getSelectedValue(){

   catagories = document.getElementById("catogories").value
    console.log(catagories)
}
// if ( catagories.contains( catagories.value ) ) {
//     console.log("someting")
// }else{
//     console.log("nothings")
// }
    

// Reading and showing image in the dom

document.querySelector("#image").addEventListener("change", (e) => { 
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      const files = e.target.files;
      const output = document.querySelector("#result");
      output.innerHTML = "";
      for (let i = 0; i < files.length; i++) {
         if (!files[i].type.match("image")) continue;
          const picReader = new FileReader();
          picReader.addEventListener("load", function (event) {
            const picFile = event.target;
            const div = document.createElement("div");
            div.innerHTML = `<img class="thumbnail" src="${picFile.result}" title="${picFile.name}"/>`;
            output.appendChild(div);
          });
          picReader.readAsDataURL(files[i]);
         }
    } else {
      alert("Your browser does not support File API");
    }
  });



// Uploading imagge to local storage
function uploadImage(event) {
    event.preventDefault()
    let reader = new FileReader();
    console.log(reader)
    let name = document.getElementById('image').files[0].name
    console.log(name)
    reader.addEventListener('load', function(){ 
        if(this.result && localStorage){
            imgAddress = this.result
            localStorage.setItem(name, this.result)
            parentDiv.innerHTML = "";
            manageData()
        }
        else{
            alert("Not Successfull")
        }
    })
    reader.readAsDataURL(document.getElementById('image').files[0])
}





// show product catagories at upload product page and give a user option to choose one catogery

let catagories2  = document.getElementById("catogories")
 catogories = JSON.parse(localStorage.getItem("catogory-list"));
 console.log(catogories[0].value)
loggedIn = JSON.parse(localStorage.getItem("logged-in"))

filterCat =  catogories.filter(item => item.userId == loggedIn.userId);
if(catogories){
    filterCat.forEach((item, index) => {
        console.log(item)
        let catagoryList = `
        
        <option value="${item.catagory}">${item.catagory}</option>
        `
        catagories2.insertAdjacentHTML("beforeend",  catagoryList)
    });
}
// console.log(catogories)
// if(catogories = []){
//     console.log("please create an catogory");
// }else{
//     console.log("go on")
// }
