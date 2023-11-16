let isAuth = localStorage.getItem("isAuth") || "Not Auntenticated"
if(isAuth === "Authenticated")
{
    let lgn=document.querySelector("#login")
    let div =document.createElement("div")
    let button =document.createElement("button")
    button.innerText ="Logout"
    
    button.onclick=function()
    {
        localStorage.setItem("isAuth","Not Authenticated")
        window.location.reload()
    }
    button.classList.add("but")
    div.append(button)
    lgn.append(div)
}