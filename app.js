const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuitem");

const products =[
    {
        id:1,
        title:"Gucci",
        price:119,
        colors:[
            {
              code:"purple",
              img:"./img/images (95).jpeg",
            },
            {
                code: "green",
                img:"./img/images (95d).jpg",
            },
            
        ],
    },
{
    id:2,
    title: "Chanel",
    price:"119",
    colors:[
       {
           code:"lightgray",
           img:"./img/images (93c).jpeg",
       },
       {
           code: "blue",
           img:"./img/images (93d).jpg"
       },
    ],
},
{
    id:3,
    title:"XL",
    price:149,
    colors:[
        {
            code:"lightgray",
            img:"./img/images (94b).jpeg",
        },
        {
            code:"green",
            img:"./img/images (94d).jpg"
        },
    ],
},
{
    id : 4,
    title:"fENDI",
    price:119,
    colors:[
        {
            code:"lightgray",
            img:"./img/images (91b).jpeg",
        },
        {
            code:"yellow",
            img:"./img/images (91d).jpg",
        },
    ],
},
];

let chosenproduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index) => {
   item.addEventListener("click",()=>{
       //change the current slide
       wrapper.style.transform = `translateX(${-100*index}vw)`;

//change the chosen product
chosenProduct = products[index]

//change texts of currentProduct
currentProductTitle.textContent = chosenProduct.title
currentProductPrice.textContent = "$"+ chosenProduct.price
currentProductImg.src = chosenProduct.colors[0].img

//assigning new colors
currentProductColors.forEach((color,index)=>{
    color.style.backgroundColor = chosenProduct.colors[index].code;
});
});
});


currentProductColors.forEach((color,index)=>{
 color.addEventListener("click",()=>{
     currentProductImg.src = chosenProduct.colors[index].img;
 });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
        size.style.backgroundColor= "white"
        size.style.color= "black" 
     });   
       size.style.backgroundColor= "black"
       size.style.color= "white" 
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex";
});
close.addEventListener("click",()=>{
    payment.style.display="none";
});
