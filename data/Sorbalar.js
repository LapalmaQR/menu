// LAZIMLIDI SUPLARDI BU

const sorbalar=[
    {
        id:1,
        name:"Mərci",
        price:3.00,
    },
    {
        id:2,
        name:"Toyuq",
        price:3.50,
    },
    {
        id:3,
        name:"Düşbərə",
        price:4.50,
    },
    
]

const sorbalarDiv = document.getElementById("sorbalar");
var sorbalarSetData = "";

sorbalar.map((item)=>{
    sorbalarSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

sorbalarDiv.innerHTML = sorbalarSetData;