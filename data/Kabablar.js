// LAZİMLİDİ FAST FOODLAR

const kabablar=[
    {
        id:1,
        name:"Naggest + free",
        price:5.00,
    },
    {
        id:2,
        name:"Shintzel + free",
        price:6.50,
    },
    {
        id:3,
        name:"Şaurma + free",
        price:4.50,
    },
    {
        id:4,
        name:"Klab sandviç + free",
        price:5.00,
    },
    {
        id:5,
        name:"Burger toyuq + free",
        price:6.00,
    },
    
]

const kabablarDiv = document.getElementById("kabablar");
var kabablarSetData = "";

kabablar.map((item)=>{
    kabablarSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

kabablarDiv.innerHTML = kabablarSetData;