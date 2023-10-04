//LAZIMLIDI ISTI BOLUMDU BU (ANA YEMEKLER)

const ana_yemekler=[
    {
        id:1,
        name:"Qaymaqlı Toyuq",
        price:6.50,
    },
    {
        id:2,
        name:"Toyuq langet",
        price:6.00,
    },
    {
        id:3,
        name:"Monastir toyuq",
        price:7.00,
    },
    {
        id:4,
        name:"Toyuq faxitos",
        price:6.00,
    },
    {
        id:5,
        name:"Tabaka",
        price:12.00,
    },
    {
        id:6,
        name:"Ciyər tavada",
        price:8.00,
    },
    {
        id:7,
        name:"Pomidor yumurta",
        price:3.00,
    },
    {
        id:8,
        name:"Quzu qovurma",
        price:10.00,
    },
    {
        id:9,
        name:"Ev sayağı qovurma",
        price:8.00,
    },
    {
        id:10,
        name:"Çoban qovurma",
        price:12.00,
    },
   
]


const anaYemeklerDiv = document.getElementById("ana-yemekler");
var anaYemeklerSetData = "";

ana_yemekler.map((item)=>{
    anaYemeklerSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

anaYemeklerDiv.innerHTML = anaYemeklerSetData;