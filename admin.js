const descriptionPro = document.querySelector("#details")
const titleInp = document.querySelector("#name")
const tableData = document.querySelector("tbody")
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
    const products = JSON.parse(localStorage.getItem("product-list")) || [];
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
                <td>${item.price}</td>
                <td>${item.description.length > 25 ? item.description.substr(0, 25) + '....' : item.description}</td>
                <td ><a onclick="editProduct(${item.id}, '${item.description}', '${item.title}', '${item.id}' )" href="javascript:void(0)">Edit</a> <a onclick="deleteProduct(${index}, '${index}')" href="javascript:void(0)">Delete</a></td>
              </tr>
                `
        
                tableData.insertAdjacentHTML("afterbegin", tableDt);
           
            // products.filter(item => item.userId == loggedIn.userId);
        });
    }
  

}

showAllProducts()


function deleteProduct(index) {

    let confirmDel = confirm("Are you sure you want  to delete this Product?");
    if (!confirmDel) return
    let products = JSON.parse(localStorage.getItem("product-list"));
    products.splice(index, );
    localStorage.setItem("product-list", JSON.stringify(products));
    window.location.reload();
    showAllProducts()

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







// create product catergories 
// show product categories just indiviually which user created those catgeroies
// also add product price section on each product





// Remove all products of just logged in User

function remove(){
    let confirmDel = confirm("Are you sure you want  to delete this Product?");
    if (!confirmDel) return
    let  loggedIn = JSON.parse(localStorage.getItem("logged-in"))
    let products = JSON.parse(localStorage.getItem("product-list"));
    let filterPro =  products.filter(item => item.userId !== loggedIn.userId);
    localStorage.setItem("product-list", JSON.stringify(filterPro));
    // products.forEach((index)=>{
    //     if(filterPro){
    //      products.splice(index, 1)
    //     }
    // })
    window.location.reload();

    console.log("product deleted")
   
}