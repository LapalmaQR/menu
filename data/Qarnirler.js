// LAZİMLİDİ QARNIRLER

const qarnirler=[
    {
        id:1,
        name:"Düyü",
        price:3.00,
    },
    {
        id:2,
        name:"Free",
        price:3.00,
    },
    {
        id:3,
        name:"Ev sayağı kartof",
        price:3.50,
    },
    {
        id:4,
        name:"Alma dilim",
        price:4.50,
    },
    
]

const qarnirlerDiv = document.getElementById("qarnirler");
var qarnirlerSetData = "";

qarnirler.map((item)=>{
    qarnirlerSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

qarnirlerDiv.innerHTML = qarnirlerSetData;