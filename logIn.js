


let userAuthen = JSON.parse(localStorage.getItem("user-Auth"));
function logInFunc(){
    document.getElementById("emailempty").innerHTML = ""
    document.getElementById("passwordempty").innerHTML = ""
    document.getElementById("result").innerHTML = ""
    
    const Email = document.getElementById("email").value;  
    const Password = document.getElementById("password").value; 
    const Id = document.getElementById("id").value;
    userAuthen = localStorage.getItem("user-Auth");
    userData = JSON.parse(userAuthen);
    // const Filter = userData.filter(user => user.name === "Ali Hasnain")
    // console.log(Filter);
    const userEmail = userData.find(user => user.email === Email)
    const userPass = userData.find(user => user.password === Password)
    const userId = userData.find(user => user.id === Id)
    // loggedIn = JSON.parse(localStorage.getItem("logged-in")|| {});
    const loggedInUserDetails = {
        email: Email,
        userId : Id,
        
    }
    // userAuthen.push(loggedInUserDetails);
    
    
    if(  userEmail != undefined &&  userPass != undefined && userId != undefined){
        console.log("Credential matched")
        localStorage.setItem("logged-in", JSON.stringify(loggedInUserDetails))
        document.getElementById("result").innerHTML = "LoggedIn Successfully";
        location.replace("view.html");

    }else{
        alert("password or username or id not matched")
     
    }

}




function userAuth(){
 
 

    if(Name == '' || Email == '' || Password == ''){
        document.getElementById("userempty").innerHTML = "please add username"
        document.getElementById("emailempty").innerHTML = "please add some email"
        document.getElementById("passwordempty").innerHTML = "please add some password"
    }else{
        const userAuthen = JSON.parse(localStorage.getItem("user-Auth")) || [];
        userAuthen.push(singUp);
        localStorage.setItem("user-Auth", JSON.stringify(userAuthen))
    
        alert("Account Created Successfully")
    }
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
    console.log(singUp)

console.log("this is userAtuh")

}



// users = []
// products = []
// loggedInUserDetails = {}




// Login In =>

// Check User Details are valid
// if valid => save user in loggedInUserDetails => { id: 2, name: ali}


// Product Creation
// Is user logged In
// if object present => allow creation
// production addition => {userId: loggedInUserDetails.id, id: '', title: }


// Logout

// loggedInUserDetails = {}



// Products
// products.filter(item => item.userId === loggedInUserDetails.id)
