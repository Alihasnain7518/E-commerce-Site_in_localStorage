
// checking if loggedIn user is available in local storage than update
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




const showCatagory = document.querySelector("#result")
const tableData = document.querySelector("tbody")

let  loggedIn;
// create catgorey div and h4 append this inside the showcatagory div
//  and also store this inside the localstorage in side array
// attach user id with catogories also to filter out which user created the catogorie
function createCatagory(){
    let catagory = document.querySelector("#catagory").value;
    // catagory = document.querySelector("#catagory").value
    const Div = document.createElement('div');
    const catagoryName = document.createElement('h4')
    catagoryName.innerText = catagory
    Div.appendChild(catagoryName)
    showCatagory.appendChild(Div);
    loggedIn = JSON.parse(localStorage.getItem("logged-in"))
    console.log(loggedIn.userId)
     const catagoryObj = {
        catagory: catagory,
        id:  Math.floor(Math.random(0, 1) * 1000),
        userId: loggedIn.userId
        
    }
    if(catagory == ''){
        document.getElementById("msg").innerHTML = "please add catagory name"
    }else{
        let userCatogory = JSON.parse(localStorage.getItem("catogory-list")) || [];
        userCatogory.push(catagoryObj)
        localStorage.setItem("catogory-list", JSON.stringify(userCatogory))
        document.getElementById("msg").innerHTML = ""
    }
    console.log("catogorey function is  called")
}


// show user created dcatogories in the dom
function showAllCatagories() {
    // const products = JSON.parse(localStorage.getItem("product-list")) ;
    let catogories = JSON.parse(localStorage.getItem("catogory-list")) ;
    // console.log(catogories[0].catagory)
   loggedIn = JSON.parse(localStorage.getItem("logged-in"))
     filterPro =  catogories.filter(item => item.userId == loggedIn.userId);
    if(  loggedIn = JSON.parse(localStorage.getItem("logged-in"))){
        filterPro.forEach((item, index) => {          
                let tableDt = `
                <tr>
                <td>${item.catagory}</td>
                <td ><a onclick="editCatogory(${index}, '${item.id}')" href="javascript:void(0)">Edit</a> <a onclick="deleteCatogory(${index})"  href="javascript:void(0)">Delete</a></td>
              </tr>
                `
                tableData.insertAdjacentHTML("afterbegin", tableDt);  
                
        });
    }
   
}

showAllCatagories();



function deleteCatogory(index) {

    let confirmDel = confirm("Are you sure you want  to delete this Product?");
    if (!confirmDel) return
    let catogories = JSON.parse(localStorage.getItem("catogory-list"));
    catogories.splice(index, 1);
    localStorage.setItem("catogory-list", JSON.stringify(catogories))
    window.location.reload();
  

}

function editCatogory(index, id) {
    console.log("function calle catogary")
    console.log(index)
    // id = index
    
    // let confirmDel = confirm("Are you sure you want  to delete this Product?");
    // if (!confirmDel) return
    let catogories = JSON.parse(localStorage.getItem("catogory-list"));
    console.log(catogories[index].id)
    document.querySelector("#catagory").value = catogories[index].catagory
   let a2 =  document.querySelector("#createBtn").style.display = "none";
    let a =  document.createElement("button")
    a.innerText = "Update Category"
    document.getElementById("btncontainer").appendChild(a)
    let catagory = document.querySelector("#catagory").value
    const productData = catogories.find(catagory1 => parseInt(catagory1.id) == id);
    // console.log(productData)
    const updatedcatagoryObj = {
        catagory: catagory,
        id:  id
        
    }
    a.addEventListener("click", async()=>{

     await console.log(productData.catagory = document.querySelector("#catagory").value );
      console.log(productData[index] = updatedcatagoryObj)
        localStorage.setItem("catogory-list", JSON.stringify(catogories))
        location.reload();
    })
    

}




