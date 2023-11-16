let form =document.getElementById("sgform")
let email =document.getElementById("sgemail")
let pass =document.getElementById("sgpass")

form.addEventListener('submit',function()
{
    event.preventDefault();
    // console.log(email.value , pass.value)
    let userdetails ={
        email: email.value,
        password: pass.value
    }
    localStorage.setItem("userdetails",JSON.stringify(userdetails))
    
})