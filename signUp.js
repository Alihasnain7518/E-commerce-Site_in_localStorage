
let userAuthens = JSON.parse(localStorage.getItem("user-Auth"));

function userAuth(){
    // e.preventDefualt(); 
    document.getElementById("userempty").innerHTML = ""
    document.getElementById("emailempty").innerHTML = ""
    document.getElementById("passwordempty").innerHTML = ""
    const Name = document.getElementById("name").value;  
    const Id = document.getElementById("id").value;  
    const Email = document.getElementById("email").value;  
    const Password = document.getElementById("password").value;  
    
    let singUp = {
        id: Id,
        name: Name,
        password:  Password,
        email: Email,
    }
    if(Name == '' || Email == '' || Password == ''){
        document.getElementById("userempty").innerHTML = "please add username"
        document.getElementById("emailempty").innerHTML = "please add some email"
        document.getElementById("passwordempty").innerHTML = "please add some password"
    }else{
        const userAuthen = JSON.parse(localStorage.getItem("user-Auth")) || [];
        userAuthen.push(singUp);
        localStorage.setItem("user-Auth", JSON.stringify(userAuthen))
    
        alert("Account Created Successfully")
        location.replace("login.html")
        
    }
    document.getElementById("name").value = '';
    document.getElementById("id").value = '';
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
    console.log(singUp)

console.log("this is userAtuh")

}

