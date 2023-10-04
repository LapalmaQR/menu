// LAZIMLIDI SACLARDI BU

const saclar=[
    {
        id:1,
        name:"Toyuq Sac",
        price:15.00,
    },
    {
        id:2,
        name:"Quzu Sac",
        price:20.00,
    },
    {
        id:3,
        name:"Qarışıq Sac ",
        price:25.00,
    },
    
]
const saclarDiv = document.getElementById("saclar");
var saclarSetData = "";

saclar.map((item)=>{
    saclarSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

saclarDiv.innerHTML = saclarSetData;