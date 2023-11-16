let form =document.getElementById("lgform")
let email =document.getElementById("lgemail")
let pass =document.getElementById("lgpass")

form.addEventListener('submit',function()
{
    event.preventDefault();
    
    let userdetails={
        email: email.value,
        password: pass.value
    }
    let details= JSON.parse(localStorage.getItem("userdetails")) || {}
    if(userdetails.email === details.email && userdetails.password === details.password)
    {
        localStorage.setItem("isAuth","Authenticated")
        window.location.href="./website.html"
        alert("Login sucess");
    }
    else
    {
        alert("Wrong Details")
    }
})
