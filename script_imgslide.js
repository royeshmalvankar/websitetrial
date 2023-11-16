let imgsld=[
    "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1678454437383-aa4984.jpeg",
    "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1693574670466-aba837.jpeg",
    "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1688127325421-d1c680.jpeg",
    "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1681110360042-dcfde0.jpeg",
    "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1678463309015-2b92d2.jpeg",
    "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1699859892789-978a14.jpeg"
];

let pre = document.getElementById('prev');
let next =document.getElementById('nex');
let image =document.querySelector('#im1>img');
let image1 =document.querySelector('#im2>img');
let image2 =document.querySelector('#im3>img');
let currim1 =0;
let currim2 =1;
let currim3 =2;
image.setAttribute('src',imgsld[currim1])
image1.setAttribute('src',imgsld[currim2])
image2.setAttribute('src',imgsld[currim3])

pre.addEventListener('click',function()
{
    currim1--
    currim2--
    currim3--
    if(currim3<0)
    {
        currim1= imgsld.length -1;
        currim2= imgsld.length -2;
        currim3= imgsld.length -3;
    }


    image.setAttribute('src',imgsld[currim1])
    image1.setAttribute('src',imgsld[currim2])
    image2.setAttribute('src',imgsld[currim3])
    console.log(image,image1,image2)
    console.log(currim1,currim2,currim3)
})

next.addEventListener('click',function()
{
    currim1++
    currim2++
    currim3++
    if(currim1>imgsld.length-3 )
    {
        currim1= 0;
        currim2= 1;
        currim3= 2;
    }
 

    image.setAttribute('src',imgsld[currim1])
    image1.setAttribute('src',imgsld[currim2])
    image2.setAttribute('src',imgsld[currim3])
    console.log(image,image1,image2)
    console.log(currim1,currim2,currim3)
})

const Obj=[
    {
        "image":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1659096798036-9b40ee.png",
        "title":"sofa cleaning",
        "star":4.8,
        "price":"₹738"
    },
    {
        "image":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1659102409372-8ca38a.png",
        "title":"bathroom cleaning",
        "star":4.76,
        "price":"₹898"
    },
    {
        "image":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1659102409372-8ca38a.png",
        "title":"bathroom cleaning",
        "star":4.76,
        "price":"₹898"
    },
    {
        "image":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1659102409372-8ca38a.png",
        "title":"bathroom cleaning",
        "star":4.76,
        "price":"₹898"
    },
    {
        "image":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1659102409372-8ca38a.png",
        "title":"bathroom cleaning",
        "star":4.76,
        "price":"₹898"
    },
    {
        "image":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1659102409372-8ca38a.png",
        "title":"bathroom cleaning",
        "star":4.76,
        "price":"₹898"
    },
    {
        "image":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1659102409372-8ca38a.png",
        "title":"bathroom cleaning",
        "star":4.76,
        "price":"₹898"
    },
    {
        "image":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1659102409372-8ca38a.png",
        "title":"bathroom cleaning",
        "star":4.76,
        "price":"₹898"
    },
    {
        "image":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1659102409372-8ca38a.png",
        "title":"bathroom cleaning",
        "star":4.76,
        "price":"₹898"
    },

]
// let bt=document.getElementById("b4")
let d=document.getElementById("data");
let pbtn=document.createElement("button")
pbtn.innerText="<"
d.append(pbtn)
Obj.map((ele)=>
{
    
    let card=document.createElement("div")
    let img=document.createElement("img")
    let tl=document.createElement("h3")
    let str=document.createElement("p")
    let pr=document.createElement("p")
    
    img.setAttribute("src",ele.image)
    tl.innerText=ele.title;
    str.innerText=ele.star;
    pr.innerText=ele.price;
    
   
    card.append(img,tl,str,pr);
    d.append(card);
    
})
let fbtn=document.createElement("button")
fbtn.innerText=">"
d.append(fbtn)


pbtn.addEventListener('click',function()
{
    console.log(obj[d[0]])

 })

fbtn.addEventListener('click',function()
{
    console.log(d[0])

})