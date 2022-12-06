const descriptionPro = document.querySelector("#details")
const titleInp = document.querySelector("#name")
const tableData = document.querySelector("tbody")
const cartTotal = document.querySelector("#secondbody")
const productEdit = document.querySelector("#productedit")

const userAuth = JSON.parse(localStorage.getItem("logged-in"));

if(!userAuth){

    location.href = location.origin
}

let imgAddress;
let isUpdate = false, updateId;

// find the product  which has the same userId as loggedIn userid
const products = JSON.parse(localStorage.getItem("product-list")) ;
let  loggedIn = JSON.parse(localStorage.getItem("logged-in"))
// console.log(loggedIn.userId)
products.forEach((item)=>{
    products.filter(item => item.userId == loggedIn.userId);
    console.log(item)
// worket method
   let pdfs =  products.filter(item => item.userId == loggedIn.userId);
    console.log(pdfs)
});

// show just  filter product in the admin panel
function showAllProducts() {
    const products = JSON.parse(localStorage.getItem("Product-Cart")) || [];
     filterPro =  products.filter(item => item.userId == loggedIn.userId);
    if(  loggedIn = JSON.parse(localStorage.getItem("logged-in"))){

        filterPro.forEach((item, index) => {
           
                
                let tableDt = `
                <tr>
                <th scope="row">${item.id}</th>
                <th scope="row">${item.userId}</th>
                <td><img src="${item.img}" style="width: 50px;" > </td>
                <td>${item.prCatogery}</td>
                <td>${item.title}</td>
                <td><input id="quantityupdate" value="${item.quantity}" type="number" style="width: 60px"></td>
                <td>${item.totalPrice}</td>
                <td> <a onclick="deleteProduct(${index})" href="javascript:void(0)">Delete</a> <a onclick="updateQuantity(${item.id})" href="javascript:void(0)">Update Quantity</a></td>
              </tr>
                `
                tableData.insertAdjacentHTML("afterbegin", tableDt);
           
            // products.filter(item => item.userId == loggedIn.userId);
        });
    }
}

// get the all products prices from all objects and show the sum of theme;
    function updateQuantity(id) {
        const updateQuantity = document.querySelector("#quantityupdate");
    const AddCartPro = JSON.parse(localStorage.getItem("Product-Cart")) || [];
    const products = JSON.parse(localStorage.getItem("product-list"));
    const alreadyExistedItem = AddCartPro.findIndex(item => item.id === id);
    let  filterPro =  products.filter(item => item.id == id);
        // const alreadyExistedItem2 = AddCartPro.filter(item => item.id === id);
    // console.log(filterPro[0].price);
    if(alreadyExistedItem !== -1) {
        console.log("inside if")
        AddCartPro[alreadyExistedItem].quantity = updateQuantity.value;
        console.log(AddCartPro[alreadyExistedItem].quantity)
        AddCartPro[alreadyExistedItem].totalPrice = AddCartPro[alreadyExistedItem].quantity *  filterPro[0].price;
         localStorage.setItem("Product-Cart", JSON.stringify(AddCartPro));
    }else{
        console.log("inside else")
        const products = JSON.parse(localStorage.getItem("product-list"));
        filterPro =  products.filter(item => item.id == id);
        console.log(filterPro[0].id)
            filterPro[0].quantity =  1,
            filterPro[0].totalPrice =  parseInt(filterPro[0].price)
    
        console.log( filterPro[0].quantity)
        AddCartPro.push(filterPro[0]);
      localStorage.setItem("Product-Cart", JSON.stringify(AddCartPro));
    }
    location.reload();
}

let grandTotal = 0;
function showProductsTotal() {
    const products = JSON.parse(localStorage.getItem("Product-Cart")) || [];
     filterPro =  products.filter(item => item.userId == loggedIn.userId);
    if(  loggedIn = JSON.parse(localStorage.getItem("logged-in"))){

        filterPro.forEach((item, index) => { 
              const Price =  Object.values(item)[8]
              grandTotal = parseInt(Price)  + grandTotal ;
              console.log(grandTotal);
        });
        let tableDt = `
        <tr>
        <th scope="row"></th>
        <th scope="row"></th>
        <td><img src="" style="width: 50px;" > </td>
        <td></td>
        <td></td>
        <td></td>
        <td > <strong>Total Price</strong>:${grandTotal}</td>            
      </tr>
        `
        cartTotal.insertAdjacentHTML("afterbegin", tableDt);         
    }
}

showProductsTotal()
showAllProducts()


function deleteProduct(index) {

    let products = JSON.parse(localStorage.getItem("Product-Cart"));
    let confirmDel = confirm("Are you sure you want  to delete this Product?");
    if (!confirmDel) return
    products.splice(index, 1);
    localStorage.setItem("Product-Cart", JSON.stringify(products));
    window.location.reload();
    // showAllProducts()

}


function editProduct(index, title, description, id) {
    // let confirmDel = confirm("Are you sure you want  to edit this note?");
    // if (!confirmDel) return;
    updateId = index
    let products = JSON.parse(localStorage.getItem("product-list"));
    console.log("INDEX", index)
    const productData = products.find(item => parseInt(item.id) === index)
    console.log(productData)
        let editPr = `
    <li class="note pop-box">
                <div class="details popup">
                <div class="content">
               
              <form action="#">
              <div class="row title">
              <label for="">Id<input  id="editedId"  type="text" value=" ${productData.id}" ></label>
                <label for="">Title<input  id="editedValue" type="text" value=" ${productData.title}" ></label>
                <div class="mt-2" style="width: 400px; ">
               
                <input type="file" id="image" >
            
                <img src="${productData.img}" style="width: 100px; " > </div>
                </div>
                <div class="row description">
                <label for="">Description: <textarea id="editedDescription" > ${productData.description}</textarea></label>
                </div>
                <button onclick="uploadImage(event, ${index})">Update Products</button>
                </form>
                </div>
            </div>
                </li>
                `
        productEdit.innerHTML = editPr


    // window.location.href="view.html";
}



function upDated(index) {
    console.log("update called successfullly")
    let titleValue = document.getElementById("editedValue").value
    let editedDescription = document.getElementById("editedDescription").value
    let editedId = document.getElementById("editedId").value
    let products = JSON.parse(localStorage.getItem("product-list"));
    // isUpdate = true
    const productData = {
        id: editedId,
        title: titleValue,
        description: editedDescription,
        img: imgAddress

    }

    products[index] = productData; //updating specified note
    localStorage.setItem("product-list", JSON.stringify(products))
    location.reload()

}

// uloading image to edit array
function uploadImage(event, index) {
    console.log("upload function called the successfully")
    event.preventDefault()
    let reader = new FileReader();
    // console.log(reader)
    // let name = document.getElementById('image').files[0].name
    // console.log(name)
    reader.addEventListener('load', function () {
        if (this.result && localStorage) {
            imgAddress = this.result
            // console.log(imgAddress)
            //  localStorage.setItem(name, this.result)
            // parentDiv.innerHTML = "";
            // manageData()
            console.log("image address set in locale storage successfully")
        }
        else {
            alert("Not Successfull")
        }
        upDated(index)

    })
    reader.readAsDataURL(document.getElementById('image').files[0])
}





// Remove all products of just logged in User

function remove(){
    let confirmDel = confirm("Are you sure you want  to delete this Product?");
    if (!confirmDel) return
    let  loggedIn = JSON.parse(localStorage.getItem("logged-in"))
    let products = JSON.parse(localStorage.getItem("Product-Cart"));
    let filterPro =  products.filter(item => item.userId !== loggedIn.userId);
    localStorage.setItem("Product-Cart", JSON.stringify(filterPro));
    // products.forEach((index)=>{
    //     if(filterPro){
    //      products.splice(index, 1)
    //     }
    // })
    window.location.reload();

    console.log("product deleted")
   
}

