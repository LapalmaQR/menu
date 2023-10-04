// LAZIMLIDI SALATLARDI BU


const soyuq_qelyanaltilar=[
    {
        id:0,
        name:"Çoban salatı",
        price:4.00,
    },
    {
        id:1,
        name:"Sezar salatı",
        price:6.00,
    },
    {
        id:2,
        name:"Ağ Pendir",
        price:2.00,
    },
    
    
]

const soyuqQelyanAltiDiv = document.getElementById("soyuq-qelyanalti");
var soyuqQelyanAltiSetData = "";

soyuq_qelyanaltilar.map((item)=>{
    soyuqQelyanAltiSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

soyuqQelyanAltiDiv.innerHTML = soyuqQelyanAltiSetData;
