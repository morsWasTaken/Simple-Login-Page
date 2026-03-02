const form = document.getElementById("loginForm");


const dataBase = [
    {email: "adming@gmail.com",
    password: "123456"},
    {
    email: "mors@gmail.com",
    password: "123456"
    },{
    email: "chihiro@gmail.com",
    password: "123456"
    }       
]


form.addEventListener("submit",function(event){
    event.preventDefault();

    let found = false;
    const email = document.getElementById("femail").value;
    const password = document.getElementById("fpassword").value;


    const errorMessage = document.getElementById("errorMessage");


   for(let i = 0;i < dataBase.length; i++){
        if(email === dataBase[i].email && password === dataBase[i].password){
            console.log("Login successfull");
            found = true;
            break;
        }
   }

   if(!found){
    errorMessage.innerText ="Invalid email or password";
   } else {
    errorMessage.innerText = "";
   }
})

