// LAZİMLİDİ DESERTLERR

const desertler=[
    {
        id:1,
        name:"Rulet",
        price:3.00,
    },
    {
        id:2,
        name:"Kurabiye(5 ədəd)",
        price:3.00,
    },
    {
        id:3,
        name:"Mürəbbə",
        price:"4 / 6",
    },
    {
        id:4,
        name:"Snikers",
        price:2.50,
    },
    {
        id:5,
        name:"Çərəz(balaca)",
        price:7.00,
    },
    {
        id:6,
        name:"Çərəz(böyük)",
        price:10.00,
    },
]

const desertlerDiv = document.getElementById("desertler");
var desertlerSetData = "";

desertler.map((item)=>{
    desertlerSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

desertlerDiv.innerHTML = desertlerSetData;